/**
 * larofit-nav.js
 * Injects the bottom nav into every page automatically.
 * Each page sets window.LF_PAGE to its tab name before loading this script.
 *
 * Usage in every page:
 *   <script>window.LF_PAGE = 'home';</script>
 *   <script src="larofit-nav.js"></script>
 *
 * Valid LF_PAGE values: 'home' | 'workout' | 'build' | 'progress' | 'profile'
 */

(function () {
  const TABS = [
    {
      id: 'home',
      label: 'Home',
      icon: 'ti-home',
      href: 'index.html',
    },
    {
      id: 'workout',
      label: 'Workout',
      icon: 'ti-barbell',
      href: 'workout.html',
    },
    {
      id: 'build',
      label: 'Build',
      icon: 'ti-layout-grid',
      href: 'programs.html',
    },
    {
      id: 'progress',
      label: 'Progress',
      icon: 'ti-chart-bar',
      href: 'progress.html',
    },
    {
      id: 'profile',
      label: 'Profile',
      icon: 'ti-user',
      href: 'profile.html',
    },
  ];

  const activePage = window.LF_PAGE || 'home';

  // ── Build nav HTML ──
  const tabsHTML = TABS.map(tab => {
    const isActive = tab.id === activePage;
    return `
      <a href="${tab.href}"
         class="lf-nav-tab${isActive ? ' active' : ''}"
         aria-label="${tab.label}"
         draggable="false"
         ${isActive ? 'aria-current="page"' : ''}>
        <div class="lf-nav-icon" aria-hidden="true">
          <i class="ti ${tab.icon}"></i>
        </div>
        <span class="lf-nav-label">${tab.label}</span>
      </a>`;
  }).join('');

  // Desktop sidebar gets a logo + tabs wrapper
  const navHTML = `
    <nav class="lf-nav" role="navigation" aria-label="Main navigation">
      <div class="lf-nav-logo" aria-hidden="true">LARO<span>FIT</span></div>
      <div class="lf-nav-tabs">
        ${tabsHTML}
      </div>
    </nav>`;

  // Inject at top of body so grid layout works on desktop
  document.body.insertAdjacentHTML('afterbegin', navHTML);

  // ── Tabler Icons CDN (if not already loaded) ──
  if (!document.querySelector('link[href*="tabler"]')) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css';
    document.head.appendChild(link);
  }

  // ── Register Service Worker ──
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js')
        .catch(err => console.warn('SW registration failed:', err));
    });
  }
})();
