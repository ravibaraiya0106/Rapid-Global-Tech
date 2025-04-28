// Initialize Lucide icons
lucide.createIcons();

// Mobile menu toggle
const menuBtn = document.querySelector('.mobile-menu-btn');
const mobileMenu = document.querySelector('.mobile-menu');
let isMenuOpen = false;

menuBtn.addEventListener('click', () => {
  isMenuOpen = !isMenuOpen;
  mobileMenu.style.display = isMenuOpen ? 'block' : 'none';
  menuBtn.innerHTML = isMenuOpen ? 
    '<i data-lucide="x"></i>' : 
    '<i data-lucide="menu"></i>';
  lucide.createIcons();
});

// Intersection Observer for fade-in animations
const observerOptions = {
  root: null,
  threshold: 0.1,
  rootMargin: '0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Add fade-in class and observe all sections
document.querySelectorAll('section').forEach(section => {
  section.classList.add('fade-in');
  observer.observe(section);
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
      // Close mobile menu if open
      if (isMenuOpen) {
        isMenuOpen = false;
        mobileMenu.style.display = 'none';
        menuBtn.innerHTML = '<i data-lucide="menu"></i>';
        lucide.createIcons();
      }
    }
  });
});

// Progress bar animation
const progressBars = document.querySelectorAll('.progress');
progressBars.forEach(bar => {
  const width = bar.style.width;
  bar.style.width = '0';
  setTimeout(() => {
    bar.style.width = width;
  }, 500);
});