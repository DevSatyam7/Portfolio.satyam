const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');
menuToggle?.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
});
nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuToggle?.setAttribute('aria-expanded', 'false');
}));
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.hero-copy, .hero-visual, .section-heading, .skill-card, .project-card, .timeline-item, .education-card, .contact-panel').forEach(el => {
  el.classList.add('reveal');
  revealObserver.observe(el);
});
const rotatingText = document.getElementById('rotatingText');
const phrases = ['AI & web technology', 'data-driven ideas', 'useful digital tools'];
let phraseIndex = 0;
if (rotatingText && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  setInterval(() => {
    phraseIndex = (phraseIndex + 1) % phrases.length;
    rotatingText.style.opacity = '0';
    setTimeout(() => {
      rotatingText.textContent = phrases[phraseIndex];
      rotatingText.style.opacity = '1';
    }, 180);
  }, 2600);
  rotatingText.style.transition = 'opacity .18s ease';
}
document.querySelectorAll('a[href^="#"]').forEach(anchor => anchor.addEventListener('click', event => {
  const target = document.querySelector(anchor.getAttribute('href'));
  if (target) { event.preventDefault(); target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
}));