// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Mobile navigation toggle
const mobileNav = () => {
  const navLinks = document.querySelector('.nav-links');
  const hamburger = document.querySelector('.logo svg');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
};

// Initialize mobile navigation
mobileNav();

// Intersection Observer for scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');

      // Animate numbers in hero stats when they become visible
      if (entry.target.classList.contains('hero-stats')) {
        animateNumbers();
      }
    }
  });
}, observerOptions);

// Observe sections and other elements for animation
document.querySelectorAll('section, .hero-stats, .service-card, .process-step, .testimonial-card').forEach(element => {
  observer.observe(element);
});

// Number animation function
function animateNumbers() {
  document.querySelectorAll('.stat-number').forEach(stat => {
    const target = parseInt(stat.textContent);
    let current = 0;
    const increment = target / 50; // Adjust for animation speed
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        stat.textContent = target + (stat.textContent.includes('%') ? '%' : '+');
        clearInterval(timer);
      } else {
        stat.textContent = Math.floor(current) + (stat.textContent.includes('%') ? '%' : '+');
      }
    }, 20);
  });
}