// Header scroll effect
const header = document.querySelector('.header');
const logo = document.querySelector('.logo');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  
  if (currentScroll > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
  
  lastScroll = currentScroll;
});

// Mobile menu
const menuButton = document.querySelector('.mobile-menu-button');
const mainNav = document.querySelector('.main-nav');

menuButton?.addEventListener('click', () => {
  mainNav.classList.toggle('active');
});

// Services tabs
const serviceTabs = document.querySelectorAll('.service-tab');
const serviceDetails = document.querySelectorAll('.service-detail');

serviceTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    // Remove active class from all tabs and details
    serviceTabs.forEach(t => t.classList.remove('active'));
    serviceDetails.forEach(d => d.classList.remove('active'));
    
    // Add active class to clicked tab and corresponding detail
    tab.classList.add('active');
    const serviceId = tab.getAttribute('data-service');
    document.querySelector(`#${serviceId}-detail`).classList.add('active');
  });
});

// Intersection Observer for animations
const animateOnScroll = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
      observer.unobserve(entry.target);
    }
  });
};

const observer = new IntersectionObserver(animateOnScroll, {
  threshold: 0.1
});

document.querySelectorAll('.feature-card, .stat-item').forEach(element => {
  observer.observe(element);
});

// Update copyright year
document.getElementById('current-year').textContent = new Date().getFullYear();

// Form submission
const contactForm = document.querySelector('.contact-form');

contactForm?.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // Add your form submission logic here
  console.log('Form submitted');
});