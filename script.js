/* ============================================================
   CORAL GARDEN HOTEL — script.js
   Shared across all pages.
============================================================ */

const nav    = document.getElementById('mainNav');
const heroBg = document.getElementById('heroBg'); // only exists on index.html

/* ── Nav: transparent over hero, white on scroll ── */
function updateNav() {
  if (heroBg) {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  }
  // Non-hero pages always stay scrolled (set via class in HTML)
}
window.addEventListener('scroll', updateNav, { passive: true });

/* ── Hero subtle zoom on load ── */
window.addEventListener('load', () => {
  if (heroBg) setTimeout(() => heroBg.classList.add('loaded'), 100);
});

/* ── Mobile menu ── */
function mobOpen() {
  document.getElementById('mobMenu').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function mobClose() {
  document.getElementById('mobMenu').classList.remove('open');
  document.body.style.overflow = '';
}

/* ── Fade-in on scroll ── */
const obs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('vis');
      obs.unobserve(e.target);
    }
  });
}, { threshold: 0.07, rootMargin: '0px 0px -28px 0px' });

document.addEventListener('DOMContentLoaded', () => {
  updateNav();
  document.querySelectorAll('.fi').forEach(el => obs.observe(el));
  const yr = document.getElementById('copy-year');
  if (yr) yr.textContent = new Date().getFullYear();
});
