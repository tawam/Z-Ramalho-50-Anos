const progressBar = document.querySelector(".scroll-progress span");
const revealItems = document.querySelectorAll(".reveal");
const menuToggle = document.querySelector("[data-menu-toggle]");
const nav = document.querySelector("[data-nav]");

const heroImage = document.querySelector(".hero-bg img");

function updateHeroParallax() {
  if (!heroImage) return;
  if (window.matchMedia("(max-width: 900px)").matches) {
    heroImage.style.transform = "";
    return;
  }

  const scrollY = window.scrollY || window.pageYOffset;
  const baseMove = 82;
  const maxShift = 125;
  const shift = Math.min(scrollY * 0.22, maxShift);
  const move = baseMove - shift;
  heroImage.style.transform = `scale(1.12) translate3d(0, ${move}px, 0)`;
}


function updateProgress() {
  updateHeroParallax();
  const doc = document.documentElement;
  const scrollTop = doc.scrollTop || document.body.scrollTop;
  const max = doc.scrollHeight - doc.clientHeight;
  const progress = max > 0 ? (scrollTop / max) * 100 : 0;
  if (progressBar) progressBar.style.width = `${progress}%`;
}

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.14 });

revealItems.forEach((item) => revealObserver.observe(item));

updateHeroParallax();

window.addEventListener("scroll", updateProgress, { passive: true });
window.addEventListener("load", updateProgress);
window.addEventListener("resize", updateProgress);

if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    const expanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!expanded));
    nav.classList.toggle("is-open");
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menuToggle.setAttribute("aria-expanded", "false");
      nav.classList.remove("is-open");
    });
  });
}
