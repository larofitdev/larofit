// One account's data on the phone is never shown in, or uploaded to, another account
import fs from 'fs';
const src = fs.readFileSync('supabase-client.js', 'utf8').replace(/\r\n/g, '\n');
const code = src.slice(src.indexOf('// ── WHOSE DATA THIS PHONE HOLDS'), src.indexOf('// ── MAIN LF NAMESPACE'));

const make = (store, userId) => new Function('store', 'userId', `
  const localStorage = { getItem: k => k in store ? store[k] : null, setItem: (k, v) => { store[k] = String(v); }, removeItem: k => { delete store[k]; } };
  Object.defineProperty(localStorage, 'keys', { value: () => Object.keys(store) });
  const Object_ = Object; const ObjectKeys = o => o === localStorage ? Object_.keys(store) : Object_.keys(o);
  const LS = { get: (k, d = null) => { const v = store['lf_' + k]; return v == null ? d : JSON.parse(v); } };
  let reloaded = 0; const location = { reload: () => { reloaded++; } };
  const LF = { auth: { user: async () => userId ? { id: userId } : null } };
  ${code.replace(/Object\.keys\(localStorage\)/g, 'ObjectKeys(localStorage)')}
  return { check: lfCheckOwner, clear: lfClearAccountData, reloaded: () => reloaded };`)(store, userId);

let fail = 0;
const check = (name, ok, extra = '') => { console.log((ok ? 'ok   ' : 'FAIL ') + name + (ok ? '' : '   ' + extra)); if (!ok) fail++; };
const phone = owner => ({ lf_sb_session: 'tok', lf_install_banner_dismissed: '1', lf_programs: '[1]', lf_workout_history: '{"2026-10-22":{}}', lf_settings: '{}', lf_user: JSON.stringify({ id: 'main' }), ...(owner ? { lf_owner: owner } : {}) });

{
  const store = phone('main'), p = make(store, 'main');
  check('same account: kept', await p.check() === true && store.lf_programs && !p.reloaded());
}
{
  const store = phone('main'), p = make(store, 'support');
  const ok = await p.check();
  check('another account signed in: its data cleared, page reloaded', ok === false && !store.lf_programs && !store.lf_workout_history && !store.lf_settings && p.reloaded() === 1);
  check('the sign-in and the phone\'s own settings kept', store.lf_sb_session === 'tok' && store.lf_install_banner_dismissed === '1' && store.lf_owner === 'support');
  check('checked once per page', await p.check() === false && p.reloaded() === 1);
}
{
  // A phone from before this: whose it is comes from the account last signed in
  const store = phone(null), p = make(store, 'main');
  check('not recorded yet, same account: kept and recorded', await p.check() === true && store.lf_programs && store.lf_owner === 'main');
  check('but only as a guess (old workouts aren't uploaded on it)', store.lf_owner_guessed === '1');
  const other = phone(null), q = make(other, 'support');
  check('not recorded yet, a different account: cleared', await q.check() === false && !other.lf_programs);
}
{
  const store = phone('main'), p = make(store, null);
  check('not signed in: nothing touched', await p.check() === true && store.lf_programs);
}

console.log(fail ? '\n' + fail + ' FAILED' : '\nall passed');
process.exit(fail ? 1 : 0);
