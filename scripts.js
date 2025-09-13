function toggleMenu() {
  const nav = document.querySelector('nav ul');
  nav.classList.toggle('active');
}

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    document.body.classList.add('scrolled');
  } else {
    document.body.classList.remove('scrolled');
  }
});
// Fade-in sections on scroll
const sections = document.querySelectorAll('section');

function revealSections() {
  const triggerBottom = window.innerHeight * 0.85;

  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < triggerBottom) {
      section.classList.add('show');
    } 
  });
}

window.addEventListener('scroll', revealSections);
window.addEventListener('load', revealSections);

// List of background images
const backgrounds = [
  "images/bg1.jpg",
  "images/bg2.jpg",
  "images/bg3.jpg"
];

// Pick a random background each time the site loads
window.onload = function() {
  const randomIndex = Math.floor(Math.random() * backgrounds.length);
  document.body.style.backgroundImage = `url('${backgrounds[randomIndex]}')`;
};
