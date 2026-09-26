(() => {
  'use strict';
  const menu = document.getElementById('mobilePanel');
  const hamburger = document.getElementById('hamburgerBtn');
  if (menu && hamburger) {
    hamburger.setAttribute('aria-controls', 'mobilePanel');
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && menu.classList.contains('open')) {
        menu.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
        hamburger.focus();
      }
    });
  }
})();
