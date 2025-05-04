document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navList = document.querySelector('.nav-list');
    
    menuToggle?.addEventListener('click', () => {
      navList?.classList.toggle('active');
    });
  
    // Intersection Observer for animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, observerOptions);
  
    // Observe all sections and cards
    document.querySelectorAll('section, .benefit-card, .service-card, .research-card').forEach(element => {
      observer.observe(element);
    });
  
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (!targetId) return;
        
        const targetElement = document.querySelector(targetId);
        if (!targetElement) return;
  
        const headerHeight = document.querySelector('.header')?.offsetHeight || 0;
        const targetPosition = targetElement.offsetTop - headerHeight;
  
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
  
        // Close mobile menu if open
        if (navList?.classList.contains('active')) {
          navList.classList.remove('active');
        }
      });
    });
  
    // Update copyright year
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
      yearSpan.textContent = new Date().getFullYear().toString();
    }
  
    // Add scroll-based header styling
    const header = document.querySelector('.header');
    let lastScroll = 0;
  
    window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset;
      
      if (currentScroll > lastScroll && currentScroll > 100) {
        header?.classList.add('header-hidden');
      } else {
        header?.classList.remove('header-hidden');
      }
      
      if (currentScroll > 50) {
        header?.classList.add('header-scrolled');
      } else {
        header?.classList.remove('header-scrolled');
      }
      
      lastScroll = currentScroll;
    });
  });