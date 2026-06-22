const header = document.querySelector('[data-header]');
const progress = document.querySelector('.scroll-progress span');
const revealEls = document.querySelectorAll('.reveal');
const menuToggle = document.querySelector('[data-menu-toggle]');
const nav = document.querySelector('[data-nav]');

function updateScrollUI() {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  const current = Math.max(window.scrollY, 0);
  const percent = max > 0 ? (current / max) * 100 : 0;
  progress.style.width = `${percent}%`;
  header.classList.toggle('is-scrolled', current > 24);
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.14, rootMargin: '0px 0px -6% 0px' });

revealEls.forEach((el, index) => {
  el.style.transitionDelay = `${Math.min(index % 4, 3) * 70}ms`;
  observer.observe(el);
});

menuToggle?.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('is-open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  document.body.style.overflow = isOpen ? 'hidden' : '';
});

nav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('is-open');
    menuToggle?.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  });
});

window.addEventListener('scroll', updateScrollUI, { passive: true });
window.addEventListener('resize', updateScrollUI);
updateScrollUI();
