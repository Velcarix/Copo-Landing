(() => {
  'use strict';
  const hero = document.querySelector('.hero');
  const toggle = document.getElementById('sceneToggle');
  if (hero && toggle) {
    toggle.addEventListener('click', () => {
      const paused = hero.classList.toggle('is-paused');
      toggle.setAttribute('aria-pressed', String(paused));
      toggle.setAttribute('aria-label', paused ? 'Reanudar movimiento del fondo' : 'Pausar movimiento del fondo');
      toggle.textContent = paused ? '▷ Reanudar fondo' : 'Ⅱ Pausar fondo';
    });
  }
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

(() => {
  'use strict';
  const carousel = document.getElementById('businessCarousel');
  const toggle = document.getElementById('businessCarouselToggle');
  if (!carousel || !toggle) return;
  const track = carousel.querySelector('.business-carousel__track');
  const list = carousel.querySelector('.local-businesses__list');
  if (!track || !list) return;
  const copy = list.cloneNode(true);
  copy.setAttribute('aria-hidden', 'true');
  copy.setAttribute('inert', '');
  copy.removeAttribute('aria-label');
  track.append(copy);
  carousel.classList.add('is-ready');
  toggle.addEventListener('click', () => {
    const paused = carousel.classList.toggle('is-paused');
    toggle.setAttribute('aria-pressed', String(paused));
    toggle.textContent = paused ? 'Reanudar movimiento' : 'Pausar movimiento';
  });
})();
