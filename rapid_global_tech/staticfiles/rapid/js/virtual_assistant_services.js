document.addEventListener('DOMContentLoaded', function() {
  // Mobile Menu Toggle
  const mobileMenu = document.getElementById('mobile-menu');
  const navMenu = document.querySelector('.nav-menu');
  
  mobileMenu.addEventListener('click', function() {
      this.classList.toggle('active');
      navMenu.classList.toggle('active');
      
      if (this.classList.contains('active')) {
          document.body.style.overflow = 'hidden';
          
          // Transform the hamburger into X
          document.querySelectorAll('.bar').forEach((bar, index) => {
              if (index === 0) {
                  bar.style.transform = 'rotate(45deg) translate(5px, 5px)';
              } else if (index === 1) {
                  bar.style.opacity = '0';
              } else if (index === 2) {
                  bar.style.transform = 'rotate(-45deg) translate(7px, -7px)';
              }
          });
          
      } else {
          document.body.style.overflow = 'auto';
          
          // Revert the X back to hamburger
          document.querySelectorAll('.bar').forEach((bar, index) => {
              bar.style.transform = 'none';
              bar.style.opacity = '1';
          });
      }
  });
  
  // Close mobile menu when clicking a nav link
  document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
          mobileMenu.classList.remove('active');
          navMenu.classList.remove('active');
          document.body.style.overflow = 'auto';
          
          // Revert the X back to hamburger
          document.querySelectorAll('.bar').forEach((bar, index) => {
              bar.style.transform = 'none';
              bar.style.opacity = '1';
          });
      });
  });
  
  // Service Card Expansion
  const learnMoreButtons = document.querySelectorAll('.learn-more-btn');
  
  learnMoreButtons.forEach(button => {
      button.addEventListener('click', function() {
          const card = this.closest('.service-card');
          
          // Toggle active class for the card
          if (card.classList.contains('active')) {
              card.classList.remove('active');
              this.textContent = 'Learn More';
          } else {
              card.classList.add('active');
              this.textContent = 'Show Less';
          }
      });
  });
  
  // Form Submission
  const contactForm = document.getElementById('contactForm');
  const formSuccess = document.getElementById('formSuccess');
  
  if (contactForm) {
      contactForm.addEventListener('submit', function(e) {
          e.preventDefault();
          
          // Simple form validation
          const name = document.getElementById('name').value;
          const email = document.getElementById('email').value;
          const message = document.getElementById('message').value;
          
          if (!name || !email || !message) {
              alert('Please fill in all required fields');
              return;
          }
          
          // Simulate form submission delay
          setTimeout(() => {
              // Show success message
              formSuccess.classList.remove('hidden');
              
              // Reset form
              contactForm.reset();
              
              // Hide success message after 5 seconds
              setTimeout(() => {
                  formSuccess.classList.add('hidden');
              }, 5000);
          }, 1000);
      });
  }
  
  // Smooth scroll for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
          e.preventDefault();
          
          const targetId = this.getAttribute('href');
          const targetSection = document.querySelector(targetId);
          
          if (targetSection) {
              const headerHeight = document.querySelector('.navbar').offsetHeight;
              const targetPosition = targetSection.offsetTop - headerHeight;
              
              window.scrollTo({
                  top: targetPosition,
                  behavior: 'smooth'
              });
          }
      });
  });
  
  // Intersection Observer for Scroll Animations
  const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('animate-fade-in');
              observer.unobserve(entry.target);
          }
      });
  }, observerOptions);
  
  // Add animation class and observe elements
  const animateElements = document.querySelectorAll('.service-card, .benefit-card, .info-card');
  
  animateElements.forEach((element, index) => {
      element.style.opacity = '0';
      element.style.transform = 'translateY(20px)';
      element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      element.style.transitionDelay = `${index * 0.1}s`;
      
      observer.observe(element);
  });
  
  // Add animation class to observed elements
  document.addEventListener('scroll', () => {
      document.querySelectorAll('.animate-fade-in').forEach(element => {
          element.style.opacity = '1';
          element.style.transform = 'translateY(0)';
      });
  }, { passive: true });
  
  // Set active class for navigation based on scroll position
  const sections = document.querySelectorAll('section[id]');
  
  function setActiveNav() {
      const scrollPosition = window.scrollY;
      
      sections.forEach(section => {
          const sectionTop = section.offsetTop - 100;
          const sectionHeight = section.offsetHeight;
          const sectionId = section.getAttribute('id');
          
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
              document.querySelector(`.nav-link[href="#${sectionId}"]`)?.classList.add('active');
          } else {
              document.querySelector(`.nav-link[href="#${sectionId}"]`)?.classList.remove('active');
          }
      });
  }
  
  window.addEventListener('scroll', setActiveNav);
  
  // Add CSS class for active nav link
  const style = document.createElement('style');
  style.textContent = `
      .nav-link.active::after {
          width: 100%;
      }
      .nav-link.active {
          color: var(--primary-color);
      }
  `;
  document.head.appendChild(style);
});
