// Utility Functions
function debounce(func, wait = 100) {
    let timeout;
    return function(...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        func.apply(this, args);
      }, wait);
    };
  }
  
  function throttle(func, limit = 100) {
    let inThrottle;
    return function(...args) {
      if (!inThrottle) {
        func.apply(this, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  }
  
  function formatCurrency(amount, currency = 'USD') {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency
    }).format(amount);
  }
  
  function getViewportDimensions() {
    return {
      width: window.innerWidth || document.documentElement.clientWidth,
      height: window.innerHeight || document.documentElement.clientHeight
    };
  }
  
  function isMobileDevice() {
    return window.innerWidth < 768;
  }
  
  // Navigation Functions
  function setupNavigation() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuToggle && navLinks) {
      menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
      });
    }
  
    // Close mobile menu when clicking on a link
    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(item => {
      item.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navLinks.classList.remove('active');
      });
    });
  
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          const headerHeight = document.querySelector('.header').offsetHeight;
          const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      });
    });
  
    // Scroll to top button
    const scrollToTopBtn = document.querySelector('.scroll-to-top');
    
    if (scrollToTopBtn) {
      window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
          scrollToTopBtn.classList.add('active');
        } else {
          scrollToTopBtn.classList.remove('active');
        }
      });
  
      scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      });
    }
  
    // Header background change on scroll
    const header = document.querySelector('.header');
    
    if (header) {
      window.addEventListener('scroll', () => {
        if (window.pageYOffset > 50) {
          header.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
          header.style.boxShadow = 'var(--shadow-md)';
        } else {
          header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
          header.style.boxShadow = 'none';
        }
      });
    }
  }
  
  // Animation Functions
  function setupAnimations() {
    // Initialize scroll animations
    const animatedElements = document.querySelectorAll('[data-aos]');
    
    // Initial check for elements in viewport on page load
    checkAnimatedElements(animatedElements);
    
    // Check elements on scroll
    window.addEventListener('scroll', () => {
      checkAnimatedElements(animatedElements);
    });
  
    // Testimonial slider
    setupTestimonialSlider();
  }
  
  function checkAnimatedElements(elements) {
    elements.forEach(element => {
      if (isElementInViewport(element)) {
        element.classList.add('aos-animate');
      }
    });
  }
  
  function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    
    return (
      rect.top <= windowHeight * 0.85 && 
      rect.bottom >= 0
    );
  }
  
  function setupTestimonialSlider() {
    const track = document.querySelector('.testimonial-track');
    const dots = document.querySelectorAll('.testimonial-dots .dot');
    
    if (!track || dots.length === 0) return;
  
    let currentSlide = 0;
    const cardWidth = track.querySelector('.testimonial-card').offsetWidth;
    const maxSlides = dots.length;
  
    function updateDots() {
      dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
      });
    }
  
    function goToSlide(slideIndex) {
      currentSlide = slideIndex;
      track.style.transform = `translateX(-${cardWidth * currentSlide}px)`;
      updateDots();
    }
  
    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        goToSlide(index);
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, 5000);
      });
    });
  
    function nextSlide() {
      currentSlide = (currentSlide + 1) % maxSlides;
      goToSlide(currentSlide);
    }
  
    let slideInterval = setInterval(nextSlide, 5000);
  
    track.addEventListener('mouseenter', () => {
      clearInterval(slideInterval);
    });
  
    track.addEventListener('mouseleave', () => {
      slideInterval = setInterval(nextSlide, 5000);
    });
  
    window.addEventListener('resize', () => {
      const newCardWidth = track.querySelector('.testimonial-card').offsetWidth;
      goToSlide(currentSlide);
    });
  }
  
  // Contact Form Functions
  function setupContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
      contactForm.addEventListener('submit', handleFormSubmit);
    }
  }
  
  function handleFormSubmit(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const company = document.getElementById('company').value;
    const message = document.getElementById('message').value;
    
    if (!name || !email || !message) {
      showFormMessage('Please fill in all required fields.', 'error');
      return;
    }
    
    if (!isValidEmail(email)) {
      showFormMessage('Please enter a valid email address.', 'error');
      return;
    }
    
    const form = e.target;
    form.classList.add('processing');
    
    showFormMessage('Sending your message...', 'info');
    
    setTimeout(() => {
      showFormMessage('Thank you! Your message has been sent successfully. We will contact you soon.', 'success');
      form.reset();
      form.classList.remove('processing');
    }, 1500);
  }
  
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  function showFormMessage(message, type = 'info') {
    const existingMessage = document.querySelector('.form-message');
    if (existingMessage) {
      existingMessage.remove();
    }
    
    const messageElement = document.createElement('div');
    messageElement.className = `form-message message-${type}`;
    messageElement.textContent = message;
    
    const form = document.getElementById('contactForm');
    form.appendChild(messageElement);
    
    if (type !== 'error') {
      setTimeout(() => {
        messageElement.classList.add('fade-out');
        setTimeout(() => messageElement.remove(), 500);
      }, 5000);
    }
  }
  
  // Initialize everything when DOM is loaded
  document.addEventListener('DOMContentLoaded', () => {
    setupNavigation();
    setupAnimations();
    setupContactForm();
  });