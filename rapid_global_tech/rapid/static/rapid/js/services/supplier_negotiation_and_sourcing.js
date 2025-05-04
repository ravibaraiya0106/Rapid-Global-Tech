document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide icons if available
  if (typeof lucide !== 'undefined') {
      lucide.createIcons();
  }

  // Header scroll effect
  const header = document.getElementById('header');
  if (header) {
      window.addEventListener('scroll', () => {
          if (window.scrollY > 50) {
              header.classList.add('scrolled');
          } else {
              header.classList.remove('scrolled');
          }
      });
  }

  // Mobile menu toggle
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const navLinks = document.getElementById('navLinks');

  if (mobileMenuBtn && navLinks) {
      mobileMenuBtn.addEventListener('click', () => {
          navLinks.classList.toggle('active');
          const icon = mobileMenuBtn.querySelector('i');
          if (icon) {
              if (navLinks.classList.contains('active')) {
                  icon.setAttribute('data-lucide', 'x');
              } else {
                  icon.setAttribute('data-lucide', 'menu');
              }
              if (typeof lucide !== 'undefined') {
                  lucide.createIcons();
              }
          }
      });
  }

  // Tabs functionality
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabPanes = document.querySelectorAll('.tab-pane');

  tabButtons.forEach(button => {
      button.addEventListener('click', () => {
          const tabId = button.getAttribute('data-tab');

          // Remove active class from all buttons and panes
          tabButtons.forEach(btn => btn.classList.remove('active'));
          tabPanes.forEach(pane => pane.classList.remove('active'));

          // Add active class to clicked button and corresponding pane
          button.classList.add('active');
          const activePane = document.getElementById(tabId);
          if (activePane) {
              activePane.classList.add('active');
          }
      });
  });

  // Dropdown functionality for mobile
  const dropdowns = document.querySelectorAll('.dropdown');

  dropdowns.forEach(dropdown => {
      const button = dropdown.querySelector('.dropdown-btn');

      if (button) {
          button.addEventListener('click', (e) => {
              if (window.innerWidth <= 1024) {
                  e.preventDefault();
                  dropdown.classList.toggle('active');
              }
          });
      }
  });

  // Intersection Observer for animations
  const animateOnScroll = (entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('slide-up');
              observer.unobserve(entry.target);
          }
      });
  };

  const observer = new IntersectionObserver(animateOnScroll, {
      threshold: 0.1
  });

  document.querySelectorAll('section').forEach(section => {
      observer.observe(section);
  });

  // Initialize WOW.js if available
  if (typeof WOW !== 'undefined') {
      new WOW().init();
  }
});
