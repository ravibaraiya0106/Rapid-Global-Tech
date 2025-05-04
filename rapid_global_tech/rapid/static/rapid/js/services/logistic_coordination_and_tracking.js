
// Intersection Observer for scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animation = entry.target.dataset.animation;
    }
  });
}, observerOptions);

// Observe all animated elements
const animatedElements = document.querySelectorAll('.fade-up, .fade-in');
animatedElements.forEach((element, index) => {
  element.style.opacity = '0';
  const delay = element.classList.contains('fade-up') ? index * 0.2 : 0;
  const animation = element.classList.contains('fade-up') ? 'fadeUp' : 'fadeIn';
  element.dataset.animation = `${animation} 0.5s ease-out ${delay}s forwards`;
  observer.observe(element);
});

// Button hover effects
document.querySelectorAll('.btn-primary').forEach(button => {
  button.addEventListener('mouseover', () => {
    button.style.transform = 'translateY(-2px)';
    button.style.transition = 'all 0.3s ease';
  });
  
  button.addEventListener('mouseout', () => {
    button.style.transform = 'translateY(0)';
  });
});

// Card hover animations
document.querySelectorAll('.offering-card, .challenge-card, .benefit-item').forEach(card => {
  card.addEventListener('mouseover', () => {
    card.style.transform = card.classList.contains('benefit-item') ? 
      'translateX(10px)' : 'translateY(-5px)';
    card.style.transition = 'all 0.3s ease';
  });
  
  card.addEventListener('mouseout', () => {
    card.style.transform = 'translate(0)';
  });
});

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Add parallax effect to hero section
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const hero = document.querySelector('.hero');
  if (hero) {
    hero.style.backgroundPositionY = scrolled * 0.5 + 'px';
  }
});
