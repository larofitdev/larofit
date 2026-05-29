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
  s.src = 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/dist/umd/supabase.min.js';
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

    // Get current user (null if not logged in)
    async user() {
      const sb = await lfReady();
      const { data } = await sb.auth.getUser();
      return data?.user || null;
    },

    // Sign up with email + password
    async signUp(email, password, fullName) {
      const sb = await lfReady();
      const firstName = fullName.trim().split(' ')[0];
      const { data, error } = await sb.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: fullName.trim(),
            name:      firstName,
          },
          emailRedirectTo: 'https://larofit.com/index.html'
        }
      });
      return { data, error };
    },

    // Sign in with email + password
    async signIn(email, password) {
      const sb = await lfReady();
      const { data, error } = await sb.auth.signInWithPassword({ email, password });
      if (data?.user && !error) {
        // Cache user basics in localStorage for offline use
        await LF.auth._cacheUser(data.user);
      }
      return { data, error };
    },

    // Sign out
    async signOut() {
      const sb = await lfReady();
      const { error } = await sb.auth.signOut();
      // Clear local cache
      LS.remove('user');
      LS.remove('profile');
      LS.remove('seeded');
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
    return true;
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

    // Synchronous read of the local cache (populated by getCustomExercises)
    _customsLocalCache() {
      return LS.get('custom_exercises', []);
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
        LS.set('custom_exercises', exercises);
        return exercises;
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
        const { data, error } = await sb
          .from('custom_exercises')
          .upsert({
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
          }, { onConflict: 'id,user_id' })
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
      if (!isOnline()) return LS.get('workout_history', {});
      try {
        const sb   = await lfReady();
        const user = await LF.auth.user();
        if (!user) return LS.get('workout_history', {});
        const { data, error } = await sb
          .from('workout_history')
          .select('*')
          .eq('user_id', user.id)
          .order('workout_date', { ascending: false });
        if (error) return LS.get('workout_history', {});
        // Convert array → object keyed by YYYY-MM-DD (matches existing app shape)
        const history = {};
        (data || []).forEach(row => {
          history[row.workout_date] = {
            ...row.session_data,
            name:        row.name,
            durationMin: row.duration_min,
            totalVolume: row.total_volume,
            prs:         row.prs,
          };
        });
        LS.set('workout_history', history);
        return history;
      } catch { return LS.get('workout_history', {}); }
    },

    async saveWorkout(dateStr, session) {
      // Optimistic local update
      const local = LS.get('workout_history', {});
      local[dateStr] = session;
      LS.set('workout_history', local);

      if (!isOnline()) return { error: null, offline: true };
      try {
        const sb   = await lfReady();
        const user = await LF.auth.user();
        if (!user) return { error: 'Not authenticated' };
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
        return { data, error };
      } catch (e) { return { error: e.message }; }
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
