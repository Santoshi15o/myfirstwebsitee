// Mobile menu
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');
if (menuBtn) {
  menuBtn.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', open);
    menuBtn.innerHTML = open ? '&#10005;' : '&#9776;';
  });
}

// Reveal sections as they scroll into view
const items = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold: 0.12 });
  items.forEach(el => io.observe(el));
} else {
  items.forEach(el => el.classList.add('in'));
}

// Gallery lightbox
const lb = document.getElementById('lightbox');
if (lb) {
  document.querySelectorAll('.photo').forEach(p => {
    p.addEventListener('click', () => {
      document.getElementById('lbImg').src = p.querySelector('img').src;
      document.getElementById('lbCap').textContent = p.querySelector('figcaption').firstChild.textContent;
      lb.classList.add('open');
    });
  });
  lb.addEventListener('click', () => lb.classList.remove('open'));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') lb.classList.remove('open'); });
}

// Contact form (demo: shows a thank-you message)
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    document.getElementById('formNote').classList.add('show');
    form.reset();
  });
}
