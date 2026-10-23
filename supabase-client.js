/**
 * supabase-client.js
 * LaroFit v2 — Shared Supabase client, auth helpers, and data layer.
 * Load this before any page-specific scripts on every page.
 *
 * Provides:
 *   LF.auth   — sign up, sign in, sign out, session
 *   LF.db     — data read/write (Supabase first, localStorage fallback)
 *   LF.guard  — redirect to login if not authenticated
 */

// ── SUPABASE CONFIG ───────────────────────────────────────────
const SUPABASE_URL      = 'https://sdaswuokokoxgsuwfjpg.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNkYXN3dW9rb2tveGdzdXdmanBnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk0MDAxMzAsImV4cCI6MjA5NDk3NjEzMH0.1j8Q9EOL5lbabDZGaux4yEgB9LcCJCacRiEIWMDeoKA';

// Load Supabase JS from CDN (injected once)
(function loadSupabaseSDK() {
  if (window.__lf_supabase_loaded) return;
  window.__lf_supabase_loaded = true;
  const s = document.createElement('script');
  s.src = '/supabase.min.js';
  s.onload = () => {
    window._lf_sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
      auth: {
        autoRefreshToken:    true,
        persistSession:      true,
        detectSessionInUrl:  true,
        storageKey:          'lf_sb_session',
      }
    });
    // Fire event so pages can react when client is ready
    window.dispatchEvent(new Event('lf:ready'));
  };
  document.head.appendChild(s);
})();

// ── WAIT FOR CLIENT HELPER ────────────────────────────────────
// Usage: await LF.ready()
function lfReady() {
  return new Promise(resolve => {
    if (window._lf_sb) return resolve(window._lf_sb);
    window.addEventListener('lf:ready', () => resolve(window._lf_sb), { once: true });
  });
}

// ── OFFLINE DETECTION ─────────────────────────────────────────
function isOnline() { return navigator.onLine; }

// ── LOCAL STORAGE HELPERS ─────────────────────────────────────
const LS = {
  get(key, fallback = null) {
    try {
      const v = localStorage.getItem('lf_' + key);
      return v === null ? fallback : JSON.parse(v);
    } catch { return fallback; }
  },
  set(key, value) {
    try { localStorage.setItem('lf_' + key, JSON.stringify(value)); } catch {}
  },
  remove(key) {
    try { localStorage.removeItem('lf_' + key); } catch {}
  }
};

// ── PENDING WORKOUT SYNC QUEUE ────────────────────────────────
// Dates (YYYY-MM-DD) whose Supabase push failed or was deferred (offline /
// not signed in). Retried automatically on next load and on reconnect.
function _queuePending(dateStr) {
  const q = LS.get('pending_sync', []);
  if (!q.includes(dateStr)) { q.push(dateStr); LS.set('pending_sync', q); }
}
function _unqueuePending(dateStr) {
  const q = LS.get('pending_sync', []);
  const next = q.filter(d => d !== dateStr);
  if (next.length !== q.length) LS.set('pending_sync', next);
}

// ── WHOSE DATA THIS PHONE HOLDS ───────────────────────────────
// Programs, history, settings and the rest are kept on the phone (lf_*) for speed and
// offline use. They belong to one account, lf_owner. Signing out clears them, and finding a
// different account signed in clears them before anything is shown or uploaded, so one
// account's data never appears in (or is synced into) another.
const LF_DEVICE_KEYS = ['lf_sb_session', 'lf_owner', 'lf_owner_guessed', 'lf_install_banner_dismissed'];   // the phone's, not an account's
function lfClearAccountData() {
  try {
    Object.keys(localStorage).filter(k => k.startsWith('lf_') && !LF_DEVICE_KEYS.includes(k) && !k.startsWith('lf_sb_'))
      .forEach(k => localStorage.removeItem(k));
  } catch {}
}
// Once per page: true when the phone's data is the signed-in account's. When it was someone
// else's it is cleared and the page reloaded (pages read it as they open).
let _lfOwnerCheck = null;
function lfCheckOwner() {
  return _lfOwnerCheck = _lfOwnerCheck || (async () => {
    const user = await LF.auth.user();
    if (!user) return true;
    let owner = null;
    try { owner = localStorage.getItem('lf_owner'); } catch {}
    // Not recorded yet (phones from before this): the account last signed in here. Only a
    // guess (the data may be an earlier account's), so old workouts aren't uploaded on it
    // (see flushWorkoutSync) until the next sign-in says whose they are.
    if (!owner) {
      const cached = LS.get('user');
      owner = cached && cached.id ? cached.id : user.id;
      try { localStorage.setItem('lf_owner_guessed', '1'); } catch {}
    }
    if (owner === user.id) { try { localStorage.setItem('lf_owner', user.id); } catch {} return true; }
    lfClearAccountData();
    try { localStorage.setItem('lf_owner', user.id); } catch {}
    location.reload();
    return false;
  })();
}

// ── MAIN LF NAMESPACE ─────────────────────────────────────────
window.LF = {

  ready: lfReady,

  // ── AUTH ───────────────────────────────────────────────────

  auth: {

    // Get current session (null if not logged in)
    async session() {
      const sb = await lfReady();
      const { data } = await sb.auth.getSession();
      return data?.session || null;
    },

    // Get current user from local session (no network call — reliable on mobile)
    async user() {
      const sb = await lfReady();
      const { data } = await sb.auth.getSession();
      return data?.session?.user || null;
    },

    // Sign up with email + password
    async signUp(email, password, fullName, extra) {
      const sb = await lfReady();
      const firstName = fullName.trim().split(' ')[0];
      const { data, error } = await sb.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: fullName.trim(),
            name:      firstName,
            ...(extra || {}),   // e.g. when the terms were accepted
          },
          emailRedirectTo: 'https://larofit.com/verified.html'
        }
      });
      return { data, error };
    },

    // Sign in with email + password
    async signIn(email, password) {
      const sb = await lfReady();
      const { data, error } = await sb.auth.signInWithPassword({ email, password });
      if (data?.user && !error) {
        // Another account's data on this phone: cleared before this one's is loaded
        let owner = null;
        try { owner = localStorage.getItem('lf_owner'); } catch {}
        // Not known whose (a phone from before this): cleared too, so nothing of another account's stays
        if (owner !== data.user.id || localStorage.getItem('lf_owner_guessed')) lfClearAccountData();
        try { localStorage.setItem('lf_owner', data.user.id); localStorage.removeItem('lf_owner_guessed'); } catch {}
        // Cache user basics in localStorage for offline use
        await LF.auth._cacheUser(data.user);
      }
      return { data, error };
    },

    // Sign out
    async signOut() {
      const sb = await lfReady();
      // Anything logged offline goes up first (to this account, while it's still signed in)
      try {
        const user = await LF.auth.user();
        if (user && localStorage.getItem('lf_owner') === user.id) await Promise.race([LF.db.flushWorkoutSync(), new Promise(r => setTimeout(r, 4000))]);
      } catch {}
      const { error } = await sb.auth.signOut();
      // This account's data off the phone: the next one to sign in starts from its own
      lfClearAccountData();
      try { localStorage.removeItem('lf_owner'); localStorage.removeItem('lf_owner_guessed'); } catch {}
      return { error };
    },

    // Send password reset email
    async resetPassword(email) {
      const sb = await lfReady();
      return sb.auth.resetPasswordForEmail(email, {
        redirectTo: 'https://larofit.com/login.html?reset=1'
      });
    },

    // Cache user basics to localStorage for offline access
    async _cacheUser(user) {
      const profile = await LF.db.getProfile();
      if (profile) {
        LS.set('user', {
          id:       user.id,
          email:    user.email,
          name:     profile.name     || user.user_metadata?.name || '',
          fullName: profile.full_name|| user.user_metadata?.full_name || '',
          initials: profile.initials || (profile.name || user.email || 'U').charAt(0).toUpperCase(),
          dob:      profile.dob      || '',
          sex:      profile.sex      || '',
          onboarded:profile.onboarded|| false,
        });
      }
    },

    // Listen for auth state changes (login/logout)
    onChange(callback) {
      lfReady().then(sb => {
        sb.auth.onAuthStateChange((event, session) => {
          callback(event, session);
        });
      });
    }
  },

  // ── AUTH GUARD ─────────────────────────────────────────────
  // Call at top of every protected page
  async guard() {
    const session = await LF.auth.session();
    if (!session) {
      window.location.href = 'login.html';
      return false;
    }
    return await lfCheckOwner();
  },

  // ── DATABASE ───────────────────────────────────────────────

  db: {

    // ── PROFILE ──────────────────────────────────────────────

    async getProfile() {
      // Offline: return cached
      if (!isOnline()) return LS.get('profile');
      try {
        const sb   = await lfReady();
        const user = await LF.auth.user();
        if (!user) return LS.get('profile');
        const { data, error } = await sb
          .from('profiles')
          .select('*')
          .eq('id', user.id)
          .single();
        if (error) return LS.get('profile');
        LS.set('profile', data);
        return data;
      } catch { return LS.get('profile'); }
    },

    async saveProfile(updates) {
      LS.set('profile', { ...LS.get('profile'), ...updates });
      if (!isOnline()) return { error: null, offline: true };
      try {
        const sb   = await lfReady();
        const user = await LF.auth.user();
        if (!user) return { error: 'Not authenticated' };
        const { data, error } = await sb
          .from('profiles')
          .upsert({ id: user.id, ...updates, updated_at: new Date().toISOString() })
          .select()
          .single();
        if (!error) LS.set('profile', data);
        return { data, error };
      } catch (e) { return { error: e.message }; }
    },

    // ── PROGRAMS ─────────────────────────────────────────────

    async getPrograms() {
      if (!isOnline()) return LS.get('programs', []);
      try {
        const sb   = await lfReady();
        const user = await LF.auth.user();
        if (!user) return LS.get('programs', []);
        const { data, error } = await sb
          .from('programs')
          .select('*')
          .eq('user_id', user.id)
          .order('saved_at', { ascending: false });
        if (error) return LS.get('programs', []);
        // Normalise to the shape the rest of the app expects
        const programs = (data || []).map(row => ({
          ...row.program_data,
          id:           row.id,
          name:         row.name,
          overview:     row.overview,
          weeks:        row.weeks,
          goal:         row.goal,
          aiGenerated:  row.ai_generated,
          isActive:     row.is_active,
          savedAt:      row.saved_at,
        }));
        LS.set('programs', programs);
        return programs;
      } catch { return LS.get('programs', []); }
    },

    async saveProgram(program) {
      // Optimistic local update
      const local = LS.get('programs', []);
      const idx   = local.findIndex(p => p.id === program.id);
      if (idx >= 0) local[idx] = program; else local.unshift(program);
      LS.set('programs', local);

      if (!isOnline()) return { error: null, offline: true };
      try {
        const sb   = await lfReady();
        const user = await LF.auth.user();
        if (!user) return { error: 'Not authenticated' };
        const row = {
          user_id:      user.id,
          name:         program.name,
          overview:     program.overview || '',
          weeks:        program.weeks    || 8,
          goal:         program.goal     || '',
          ai_generated: program.aiGenerated || false,
          is_active:    program.isActive    || false,
          program_data: program,
          updated_at:   new Date().toISOString(),
        };
        // If program has a UUID id, use upsert; otherwise insert
        const isUUID = /^[0-9a-f-]{36}$/.test(program.id || '');
        if (isUUID) row.id = program.id;
        const { data, error } = await sb
          .from('programs')
          .upsert(row)
          .select()
          .single();
        return { data, error };
      } catch (e) { return { error: e.message }; }
    },

    // ── CUSTOM EXERCISES ─────────────────────────────────────

    // One-time migration: push any old localStorage exercises to Supabase
    async migrateLocalCustomExercises() {
      const LEGACY_KEY = 'lf_custom_exercises';
      const MIGRATED_KEY = 'lf_custom_exercises_migrated';
      if (localStorage.getItem(MIGRATED_KEY)) return; // already done
      try {
        const raw = localStorage.getItem(LEGACY_KEY);
        if (!raw) { localStorage.setItem(MIGRATED_KEY, '1'); return; }
        const old = JSON.parse(raw);
        if (!old || !old.length) { localStorage.setItem(MIGRATED_KEY, '1'); return; }

        // Normalise old field names to new shape
        const normalised = old.map(ex => ({
          id:               ex.id               || ('cx-' + Date.now() + Math.random()),
          name:             ex.name             || 'Unnamed',
          primaryMuscle:    ex.primaryMuscle    || ex.category || 'abs',
          secondaryMuscles: ex.secondaryMuscles || ex.muscles  || [],
          equipment:        ex.equipment        || ex.eq       || 'bodyweight',
          recordType:       ex.recordType       || 'weight_reps',
          instructions:     ex.instructions     || ex.notes    || null,
          exerciseUrl:      ex.exerciseUrl       || ex.video   || null,
          custom:           true,
        }));

        // Upload each one — fire sequentially to avoid rate limits
        for (const ex of normalised) {
          await LF.db.saveCustomExercise(ex);
        }

        localStorage.setItem(MIGRATED_KEY, '1');
        console.log(`[LaroFit] Migrated ${normalised.length} custom exercise(s) to Supabase.`);
      } catch (e) {
        console.warn('Custom exercise migration failed:', e);
      }
    },

    // Synchronous read of localStorage, normalising any old-format fields
    _customsLocalCache() {
      try {
        const raw = JSON.parse(localStorage.getItem('lf_custom_exercises') || '[]');
        return Array.isArray(raw) ? raw.map(ex => ({
          ...ex,
          primaryMuscle:    ex.primaryMuscle    || ex.category || '',
          secondaryMuscles: ex.secondaryMuscles || ex.muscles  || [],
          equipment:        ex.equipment        || ex.eq       || 'bodyweight',
          recordType:       ex.recordType       || 'weight_reps',
          custom:           true,
        })) : [];
      } catch(e) { return []; }
    },

    async getCustomExercises() {
      if (!isOnline()) return LS.get('custom_exercises', []);
      try {
        const sb   = await lfReady();
        const user = await LF.auth.user();
        if (!user) return LS.get('custom_exercises', []);
        const { data, error } = await sb
          .from('custom_exercises')
          .select('*')
          .eq('user_id', user.id)
          .order('created_at', { ascending: false });
        if (error) return LS.get('custom_exercises', []);
        const exercises = (data || []).map(row => ({
          id:               row.id,
          name:             row.name,
          primaryMuscle:    row.primary_muscle,
          secondaryMuscles: row.secondary_muscles || [],
          equipment:        row.equipment,
          recordType:       row.record_type,
          instructions:     row.instructions  || null,
          exerciseUrl:      row.exercise_url  || null,
          custom:           true,
        }));
        // Merge Supabase exercises with any local-only ones not yet uploaded.
        // Supabase is the source of truth for existing IDs; local-only entries are preserved.
        const local = LS.get('custom_exercises', []);
        const supabaseIds = new Set(exercises.map(e => e.id));
        const localOnly   = local.filter(e => !supabaseIds.has(e.id));
        const merged      = [...exercises, ...localOnly];
        LS.set('custom_exercises', merged);
        return merged;
      } catch { return LS.get('custom_exercises', []); }
    },

    async saveCustomExercise(ex) {
      // Update local cache immediately
      const local = LS.get('custom_exercises', []);
      const idx   = local.findIndex(e => e.id === ex.id);
      if (idx >= 0) local[idx] = ex; else local.unshift(ex);
      LS.set('custom_exercises', local);

      if (!isOnline()) return { error: null, offline: true };
      try {
        const sb   = await lfReady();
        const user = await LF.auth.user();
        if (!user) return { error: 'Not authenticated' };
        const row = {
            id:                ex.id,
            user_id:           user.id,
            name:              ex.name,
            primary_muscle:    ex.primaryMuscle,
            secondary_muscles: ex.secondaryMuscles || [],
            equipment:         ex.equipment,
            record_type:       ex.recordType,
            instructions:      ex.instructions  || null,
            exercise_url:      ex.exerciseUrl   || null,
            updated_at:        new Date().toISOString(),
          };
        const { data, error } = await sb
          .from('custom_exercises')
          .upsert(row)
          .select().single();
        return { data, error };
      } catch (e) { return { error: e.message }; }
    },

    async deleteCustomExercise(id) {
      // Remove from local cache immediately
      const local = LS.get('custom_exercises', []).filter(e => e.id !== id);
      LS.set('custom_exercises', local);

      if (!isOnline()) return { error: null, offline: true };
      try {
        const sb   = await lfReady();
        const user = await LF.auth.user();
        if (!user) return { error: 'Not authenticated' };
        return sb.from('custom_exercises').delete().eq('id', id).eq('user_id', user.id);
      } catch (e) { return { error: e.message }; }
    },

    async deleteProgram(programId) {
      const local = LS.get('programs', []).filter(p => p.id !== programId);
      LS.set('programs', local);
      if (!isOnline()) return { error: null, offline: true };
      try {
        const sb   = await lfReady();
        const user = await LF.auth.user();
        if (!user) return { error: 'Not authenticated' };
        return sb.from('programs').delete().eq('id', programId).eq('user_id', user.id);
      } catch (e) { return { error: e.message }; }
    },

    async setActiveProgram(programId) {
      LS.set('active_program', programId);
      if (!isOnline()) return { error: null, offline: true };
      try {
        const sb   = await lfReady();
        const user = await LF.auth.user();
        if (!user) return { error: 'Not authenticated' };
        // Clear all active flags then set the chosen one
        await sb.from('programs').update({ is_active: false }).eq('user_id', user.id);
        return sb.from('programs').update({ is_active: true }).eq('id', programId).eq('user_id', user.id);
      } catch (e) { return { error: e.message }; }
    },

    // ── WORKOUT HISTORY ──────────────────────────────────────

    async getWorkoutHistory() {
      const localHist = LS.get('workout_history', {});
      if (!isOnline()) return localHist;
      try {
        const sb   = await lfReady();
        const user = await LF.auth.user();
        if (!user) return localHist;
        const { data, error } = await sb
          .from('workout_history')
          .select('*')
          .eq('user_id', user.id)
          .order('workout_date', { ascending: false });
        if (error) return localHist;
        // Convert array → object keyed by YYYY-MM-DD (matches existing app shape)
        const remote = {};
        (data || []).forEach(row => {
          remote[row.workout_date] = {
            ...row.session_data,
            name:        row.name,
            durationMin: row.duration_min,
            totalVolume: row.total_volume,
            prs:         row.prs,
          };
        });
        // Merge — local first, remote overlaid on top. This preserves
        // workouts saved locally but not yet synced (or mid-sync) so a
        // background read can never wipe a fresh local save.
        const merged = { ...localHist, ...remote };
        LS.set('workout_history', merged);
        return merged;
      } catch { return localHist; }
    },

    async saveWorkout(dateStr, session) {
      // Optimistic local update
      const local = LS.get('workout_history', {});
      local[dateStr] = session;
      LS.set('workout_history', local);

      // Offline → can't push now. Queue it so it syncs on reconnect / next load.
      if (!isOnline()) { _queuePending(dateStr); return { error: null, offline: true }; }
      try {
        const sb   = await lfReady();
        const user = await LF.auth.user();
        // Not signed in yet in this context → queue, don't drop.
        if (!user) { _queuePending(dateStr); return { error: 'Not authenticated' }; }
        const { data, error } = await sb
          .from('workout_history')
          .upsert({
            user_id:      user.id,
            workout_date: dateStr,
            name:         session.name         || 'Workout',
            duration_min: session.durationMin  || 0,
            total_volume: session.totalVolume  || 0,
            prs:          session.prs          || 0,
            session_data: session,
          }, { onConflict: 'user_id,workout_date' })
          .select()
          .single();
        // Push failed (network/RLS/etc) → queue for retry. Succeeded → clear it.
        if (error) _queuePending(dateStr); else _unqueuePending(dateStr);
        return { data, error };
      } catch (e) { _queuePending(dateStr); return { error: e.message }; }
    },

    // Push any locally-saved workouts the cloud is missing. Safe to call
    // anytime — it only ADDS dates remote doesn't have, never overwrites an
    // existing remote workout, so a stale local copy can't clobber the cloud.
    // This is what self-heals a workout that was logged offline (or before the
    // device was signed in) and never got pushed.
    async flushWorkoutSync() {
      if (!isOnline()) return;
      try {
        const sb   = await lfReady();
        const user = await LF.auth.user();
        if (!user) return;  // not signed in here — leave queue intact, retry later
        if (!(await lfCheckOwner())) return;   // another account's workouts: never pushed to this one
        const local = LS.get('workout_history', {});
        // Which dates does the cloud already have?
        const { data, error } = await sb
          .from('workout_history')
          .select('workout_date')
          .eq('user_id', user.id);
        if (error) return;
        const remoteDates = new Set((data || []).map(r => r.workout_date));

        // Candidates: explicitly-queued dates + any local date missing remotely (only when
        // the phone's data is known to be this account's, not guessed)
        const pending  = LS.get('pending_sync', []);
        const toPush    = new Set(pending);
        let guessed = false;
        try { guessed = !!localStorage.getItem('lf_owner_guessed'); } catch {}
        if (!guessed) Object.keys(local).forEach(d => { if (!remoteDates.has(d)) toPush.add(d); });

        const stillPending = [];
        for (const dateStr of toPush) {
          // Never overwrite a workout the cloud already has.
          if (remoteDates.has(dateStr)) continue;
          const session = local[dateStr];
          if (!session) continue;  // nothing local to push for this date
          const { error: upErr } = await sb
            .from('workout_history')
            .upsert({
              user_id:      user.id,
              workout_date: dateStr,
              name:         session.name        || 'Workout',
              duration_min: session.durationMin || 0,
              total_volume: session.totalVolume || 0,
              prs:          session.prs         || 0,
              session_data: session,
            }, { onConflict: 'user_id,workout_date' });
          if (upErr) stillPending.push(dateStr);
        }
        LS.set('pending_sync', stillPending);
      } catch { /* swallow — will retry on next load / reconnect */ }
    },

    // ── MEASUREMENTS ─────────────────────────────────────────

    async getMeasurements() {
      if (!isOnline()) return LS.get('measurements_log', []);
      try {
        const sb   = await lfReady();
        const user = await LF.auth.user();
        if (!user) return LS.get('measurements_log', []);
        const { data, error } = await sb
          .from('measurements')
          .select('*')
          .eq('user_id', user.id)
          .order('entry_date', { ascending: false });
        if (error) return LS.get('measurements_log', []);
        LS.set('measurements_log', data || []);
        return data || [];
      } catch { return LS.get('measurements_log', []); }
    },

    async saveMeasurement(entry) {
      const local = LS.get('measurements_log', []);
      const idx   = local.findIndex(m => m.entry_date === entry.entry_date);
      if (idx >= 0) local[idx] = entry; else local.unshift(entry);
      LS.set('measurements_log', local);

      if (!isOnline()) return { error: null, offline: true };
      try {
        const sb   = await lfReady();
        const user = await LF.auth.user();
        if (!user) return { error: 'Not authenticated' };
        const { data, error } = await sb
          .from('measurements')
          .upsert({ user_id: user.id, ...entry }, { onConflict: 'user_id,entry_date' })
          .select()
          .single();
        return { data, error };
      } catch (e) { return { error: e.message }; }
    },
  },

  // ── TOAST (shared UI helper) ───────────────────────────────
  _toastTimer: null,
  toast(msg, duration = 2500) {
    let el = document.getElementById('lf-global-toast');
    if (!el) {
      el = document.createElement('div');
      el.id = 'lf-global-toast';
      el.style.cssText = [
        'position:fixed', 'bottom:calc(var(--nav-h, 64px) + 16px)', 'left:50%',
        'transform:translateX(-50%)', 'background:var(--bg-dark,#111)',
        'color:var(--volt,#c6f135)', 'border:1px solid var(--volt,#c6f135)',
        'border-radius:999px', 'padding:10px 20px', 'font-size:13px',
        'font-weight:700', 'z-index:9999', 'pointer-events:none',
        'opacity:0', 'transition:opacity 0.25s', 'white-space:nowrap',
        'font-family:var(--font-body,sans-serif)'
      ].join(';');
      document.body.appendChild(el);
    }
    el.textContent = msg;
    el.style.opacity = '1';
    clearTimeout(LF._toastTimer);
    LF._toastTimer = setTimeout(() => { el.style.opacity = '0'; }, duration);
  }

};

// ── AUTOMATIC BACKGROUND SYNC ─────────────────────────────────
// Self-heals any workout saved locally but not yet pushed to the cloud
// (logged offline, or before the device was signed in). Runs once the
// Supabase client is ready on every page load, and again whenever the
// device regains connectivity. Fully behind the scenes — no user action.
(function wireAutoSync() {
  const flush = () => { try { LF.db.flushWorkoutSync(); } catch {} };
  // 'lf:ready' fires when the SDK finishes loading; if it already loaded
  // (cached), run immediately.
  if (window._lf_sb) flush();
  else window.addEventListener('lf:ready', flush, { once: true });
  window.addEventListener('online', flush);
})();

// ── SETTINGS THAT FOLLOW THE ACCOUNT ──────────────────────────
// Units, the coach's voice and timer sounds are kept on the device (lf_settings) so
// pages can read them instantly, and copied to the account so a new phone or a
// reinstall picks them up. Whichever copy was changed most recently wins.
const LF_SYNCED_SETTINGS = ['units', 'voiceName', 'sound', 'equipment', 'progression'];

// ── EQUIPMENT I USE ───────────────────────────────────────────
// Ticked once on Profile. The AI builder, the exercise pickers and "replace" then
// only offer exercises that use it. Nothing ticked (or never set) means everything.
// Exercises the user made themselves always count, and so does anything they ask for by name.
LF.equipment = {
  options: [
    { id: 'dumbbells',      label: 'Dumbbells' },
    { id: 'barbell',        label: 'Barbell' },
    { id: 'ez_bar',         label: 'EZ bar' },
    { id: 'machine_cable',  label: 'Machines & cables' },
    { id: 'smith',          label: 'Smith machine' },
    { id: 'kettlebells',    label: 'Kettlebells' },
    { id: 'bands',          label: 'Bands' },
    { id: 'exercise_ball',  label: 'Exercise ball' },
    { id: 'bodyweight',     label: 'Bodyweight' },
    { id: 'cardio_machine', label: 'Cardio machines' },
  ],
  // What the earlier single-choice "Training Style" meant, as ticks
  fromStyle: {
    db: ['dumbbells'], mc: ['machine_cable'], db_mc: ['dumbbells', 'machine_cable'],
    full: ['dumbbells', 'barbell', 'ez_bar', 'machine_cable', 'smith'],
    bw: ['bodyweight'], bw_bands: ['bands', 'bodyweight'], mix: []
  },
  // The ticked ids, or null when the user hasn't narrowed it down. Someone who has never
  // used the checklist gets what they chose under the old Training Style.
  get() {
    let mine = (LS.get('settings', {}) || {}).equipment;
    if (!Array.isArray(mine)) {
      const profile = LS.get('profile') || {};
      const style = (profile.details && profile.details.trainingStyle) || profile.trainingStyle;
      mine = this.fromStyle[style] || [];
    }
    return mine.length ? mine : null;
  },
  // Which option an exercise belongs to (the library files Smith machine lifts under machines)
  kindOf(ex) {
    if (/\bsmith\b/i.test(ex.name || '')) return 'smith';
    return ex.equipment || '';
  },
  allows(ex) {
    const mine = this.get();
    if (!mine || !ex || ex.custom) return true;
    const kind = this.kindOf(ex);
    if (!kind || kind === 'bench') return true;   // a bench is assumed wherever there are weights
    return mine.includes(kind);
  },
  // "dumbbells, machines & cables" for a sentence
  describe() {
    const mine = this.get();
    return mine ? this.options.filter(o => mine.includes(o.id)).map(o => o.label.toLowerCase()).join(', ') : '';
  }
};
LF.settings = {
  // Call after changing a setting on this device
  async push() {
    try {
      const local = LS.get('settings', {}) || {};
      const at = Date.now();
      local._at = at; LS.set('settings', local);
      const sb = await lfReady();
      if (!(await LF.auth.user()) || !isOnline()) return;
      const copy = { _at: at };
      for (const k of LF_SYNCED_SETTINGS) if (local[k] !== undefined) copy[k] = local[k];
      await sb.auth.updateUser({ data: { lf_settings: copy } });
    } catch {}
  },
  // Call on load: takes the account's copy if it is newer than this device's
  async pull() {
    try {
      const user = await LF.auth.user();
      const remote = user && user.user_metadata && user.user_metadata.lf_settings;
      if (!remote || !remote._at) return false;
      const local = LS.get('settings', {}) || {};
      if ((local._at || 0) >= remote._at) return false;
      let changed = false;
      for (const k of LF_SYNCED_SETTINGS) if (remote[k] !== undefined && JSON.stringify(local[k]) !== JSON.stringify(remote[k])) { local[k] = remote[k]; changed = true; }
      local._at = remote._at;
      LS.set('settings', local);
      if (changed) window.dispatchEvent(new Event('lf:settings'));
      return changed;
    } catch { return false; }
  }
};

// ── TERMS ─────────────────────────────────────────────────────
// New accounts agree at sign-up. An account from before the terms existed, or from
// before they last changed, is asked once, the next time the app is opened.
const LF_TERMS_VERSION = '2026-10-13';
LF.terms = {
  version: LF_TERMS_VERSION,
  async check() {
    try {
      if (/\/(login|signup|verified|privacy|terms|disclaimer|404)(\.html)?$/.test(location.pathname)) return;
      const user = await LF.auth.user();
      if (!user || (user.user_metadata || {}).terms_version === LF_TERMS_VERSION) return;
      if (document.getElementById('lf-terms')) return;
      const wrap = document.createElement('div');
      wrap.id = 'lf-terms';
      wrap.setAttribute('role', 'dialog'); wrap.setAttribute('aria-modal', 'true'); wrap.setAttribute('aria-labelledby', 'lf-terms-title');
      wrap.style.cssText = 'position:fixed;inset:0;z-index:2000;background:rgba(0,0,0,0.7);display:flex;align-items:flex-end;justify-content:center;';
      wrap.innerHTML = `
        <div style="background:var(--bg-card,#fff);color:var(--text,#111);width:100%;max-width:520px;border-radius:18px 18px 0 0;padding:24px 20px calc(20px + env(safe-area-inset-bottom,0px));font-family:var(--font-body,sans-serif);">
          <div id="lf-terms-title" style="font-family:var(--font-display,sans-serif);font-size:28px;letter-spacing:0.5px;line-height:1.1;margin-bottom:8px;">BEFORE YOU CARRY ON</div>
          <div style="font-size:14px;line-height:1.55;color:var(--text-2,#444);margin-bottom:14px;">
            LaroFit now has a <a href="terms.html" target="_blank" rel="noopener" style="color:var(--volt-dark,#6a8a00);font-weight:700;">Terms of Service</a>,
            a <a href="privacy.html" target="_blank" rel="noopener" style="color:var(--volt-dark,#6a8a00);font-weight:700;">Privacy Policy</a> and a
            <a href="disclaimer.html" target="_blank" rel="noopener" style="color:var(--volt-dark,#6a8a00);font-weight:700;">Health Disclaimer</a>. Please read them.
          </div>
          <label style="display:flex;align-items:flex-start;gap:12px;font-size:14px;line-height:1.5;color:var(--text-2,#444);margin-bottom:16px;cursor:pointer;">
            <input type="checkbox" id="lf-terms-box" style="width:24px;height:24px;margin:0;flex-shrink:0;accent-color:var(--volt-dark,#6a8a00);">
            <span>I am at least 16 years old and I agree to all three.</span>
          </label>
          <div id="lf-terms-err" style="display:none;font-size:13px;color:var(--danger,#c00);margin-bottom:10px;"></div>
          <button id="lf-terms-ok" class="btn btn-volt btn-full btn-lg" style="width:100%;min-height:52px;">Agree and continue</button>
        </div>`;
      document.body.appendChild(wrap);
      const err = msg => { const e = document.getElementById('lf-terms-err'); e.textContent = msg; e.style.display = 'block'; };
      document.getElementById('lf-terms-ok').onclick = async () => {
        if (!document.getElementById('lf-terms-box').checked) return err('Tick the box to continue.');
        const btn = document.getElementById('lf-terms-ok');
        btn.disabled = true;
        try {
          const sb = await lfReady();
          const { error } = await sb.auth.updateUser({ data: { terms_accepted_at: new Date().toISOString(), terms_version: LF_TERMS_VERSION } });
          if (error) throw new Error(error.message);
          wrap.remove();
        } catch (e) {
          btn.disabled = false;
          err('That could not be saved. Check your connection and try again.');
        }
      };
    } catch {}
  }
};

// ── ERROR REPORTS ─────────────────────────────────────────────
// When something in the app breaks on a user's device, a short report (what went
// wrong, on which page) is saved to the account so it can be found and fixed.
// At most five per page load, and never the same one twice.
(function wireErrorReports() {
  const sent = new Set();
  // Not faults in the app: a dropped connection, a request the app cancelled itself
  const ignore = /^Script error\.?$|ResizeObserver loop|Load failed|Failed to fetch|NetworkError|aborted|AbortError|The operation was aborted|cancelled/i;
  const report = async (kind, message, stack) => {
    try {
      message = String(message || '').slice(0, 500);
      if (!message || ignore.test(message) || sent.has(message) || sent.size >= 5 || !isOnline()) return;
      sent.add(message);
      const sb = await lfReady();
      const user = await LF.auth.user();
      if (!user) return;
      await sb.from('client_errors').insert({
        user_id: user.id,
        page: location.pathname.slice(0, 120),
        kind,
        message,
        stack: String(stack || '').slice(0, 2000) || null,
        build: (typeof VOICE_BUILD !== 'undefined' ? 'voice ' + VOICE_BUILD : null),
        device: navigator.userAgent.slice(0, 300)
      });
    } catch {}
  };
  window.addEventListener('error', e => report('error', e.message, e.error && e.error.stack || (e.filename ? e.filename + ':' + e.lineno : '')));
  window.addEventListener('unhandledrejection', e => { const r = e.reason; report('promise', r && (r.message || r), r && r.stack); });
  LF.reportError = (message, detail) => report('reported', message, detail);
})();

// ── VOICE LOGS LEFT ON THE PHONE ──────────────────────────────
// A voice workout keeps a copy of its log on the phone as it goes. Finishing sends it; if the
// app was closed part way, whichever page opens next sends what was kept, so a log arrives
// without anyone having to remember to send it.
LF.sendKeptVoiceLog = async function () {
  try {
    const kept = JSON.parse(localStorage.getItem('lf_voice_log') || 'null');
    if (!kept || !kept.text || kept.sent || !isOnline()) return;
    // The workout page was sending it a moment ago: leave it, unless that was over 2 minutes back
    if (kept.sendingAt && Date.now() - kept.sendingAt < 120000) return;
    const sb = await lfReady();
    const user = await LF.auth.user();
    if (!user) return;
    const { error } = await sb.from('voice_logs').insert({ user_id: user.id, build: String(kept.build || ''), reason: 'recovered from ' + kept.at, log: kept.text.slice(-600000) });
    if (error) return;
    // Marked sent only if it is still the same copy (a workout may have saved a newer one meanwhile)
    const now = JSON.parse(localStorage.getItem('lf_voice_log') || 'null');
    if (now && now.at === kept.at) { now.sent = true; localStorage.setItem('lf_voice_log', JSON.stringify(now)); }
  } catch {}
};

// ── A DAY'S WORKOUTS ──────────────────────────────────────────
// A program's day holds one workout ({ name, exercises }) and may hold more after it, as
// separate workouts ({ ..., more: [{ name, exercises }, ...] }): a morning rehab and an evening
// lift, say. Older days split into am / pm count as two. Every page lists a day's workouts
// through this: [{ workout (the object itself), slot (0 the first, then 1, 2...) }].
LF.dayWorkouts = function (day) {
  if (!day || day.rest) return [];
  const has = w => w && Array.isArray(w.exercises) && w.exercises.length;
  if (day.am || day.pm) return [day.am, day.pm].map((workout, slot) => ({ workout, slot })).filter(x => has(x.workout));
  return [day, ...(Array.isArray(day.more) ? day.more : [])].map((workout, slot) => ({ workout, slot })).filter(x => has(x.workout));
};
// A day with one more workout of its own on it (never merged into what's there). The same
// workout added again isn't doubled up. Returns the new day.
LF.withWorkout = function (day, w) {
  const copy = x => { const c = JSON.parse(JSON.stringify(x)); delete c.more; return c; };
  const list = LF.dayWorkouts(day).map(x => copy(x.workout));
  const ids = x => (x.exercises || []).map(e => e.id).join();
  if (list.some(x => (x.name || '') === (w.name || '') && ids(x) === ids(w))) return day;
  const [first, ...more] = [...list, copy(w)];
  return more.length ? { ...first, more } : first;
};

// ── TODAY'S WORKOUTS ──────────────────────────────────────────
// Programs aren't "activated": whatever is scheduled on a date, in any program, can be done.
// Every workout for that date, each on its own (a day can hold more than one):
// [{ program, slot, name, exercises }]. A day left unnamed in Builder is saved as "Workout",
// so the program's name is used for it ("Workout 2" for a later one, so two don't share a name).
LF.workoutsOn = function (programs, dateKey) {
  const named = n => (n && String(n).trim() && String(n).trim() !== 'Workout') ? String(n).trim() : '';
  const out = [];
  (programs || []).forEach(p => {
    let day = p.days && !Array.isArray(p.days) ? p.days[dateKey] : null;
    if (!day && Array.isArray(p.days)) day = p.days[(new Date(dateKey + 'T00:00:00').getDay() + 6) % 7];   // old weekly plans
    LF.dayWorkouts(day).forEach(({ workout, slot }) => out.push({ program: p, slot, name: named(workout.name) || (slot ? 'Workout ' + (slot + 1) : p.name || 'Workout'), exercises: workout.exercises }));
  });
  return out;
};

// ── SUPERSETS AND CIRCUITS IN A LIST ──────────────────────────
// For showing a workout's exercises: whether a group starts at an exercise, the heading over
// it ("Superset · 3 rounds", "Timed circuit · 4 exercises · 3 rounds"), and a summary of a
// workout's groups ("1 superset, 1 circuit"). Groups are made in Builder (ex.group).
LF.groups = {
  size(exs, i) { const id = exs[i] && exs[i].group && exs[i].group.id; return id ? exs.filter(e => e.group && e.group.id === id).length : 0; },
  inOne(exs, i) { return this.size(exs, i) >= 2; },
  startsAt(exs, i) { return this.inOne(exs, i) && !(i > 0 && exs[i - 1].group && exs[i - 1].group.id === exs[i].group.id); },
  heading(exs, i) {
    const g = exs[i].group, n = this.size(exs, i);
    return (g.timed ? 'Timed circuit' : n === 2 ? 'Superset' : 'Circuit') + (n > 2 ? ' · ' + n + ' exercises' : '') + ' · ' + (parseInt(g.rounds) || 3) + ' rounds';
  },
  summary(exs) {
    let s = 0, c = 0;
    (exs || []).forEach((e, i) => { if (this.startsAt(exs, i)) { if (this.size(exs, i) === 2 && !e.group.timed) s++; else c++; } });
    return [s ? s + (s === 1 ? ' superset' : ' supersets') : '', c ? c + (c === 1 ? ' circuit' : ' circuits') : ''].filter(Boolean).join(', ');
  }
};

// On every page, once signed-in state is known: bring settings up to date and check the terms
(function wireAccountChecks() {
  const run = () => { LF.settings.pull(); LF.terms.check(); LF.sendKeptVoiceLog(); };
  if (window._lf_sb) run();
  else window.addEventListener('lf:ready', run, { once: true });
})();
