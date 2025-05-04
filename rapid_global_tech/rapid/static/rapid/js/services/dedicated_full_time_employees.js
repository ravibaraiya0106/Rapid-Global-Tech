// Intersection Observer for animations
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animationDelay = entry.target.dataset.delay || '0s';
      entry.target.style.animationPlayState = 'running';
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe all animated elements
document.querySelectorAll('.animate-fade-up').forEach((element, index) => {
  element.style.animationPlayState = 'paused';
  element.dataset.delay = `${index * 0.1}s`;
  observer.observe(element);
});

// Progress bar animation
document.querySelectorAll('.progress').forEach(progress => {
  progress.style.width = '0%';
  observer.observe(progress);
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