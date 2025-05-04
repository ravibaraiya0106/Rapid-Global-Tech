// Add smooth scrolling for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Add hover effect for service cards
document.querySelectorAll('.service-card').forEach(card => {
  card.addEventListener('mouseenter', function () {
    this.style.transform = 'translateY(-5px)';
  });

  card.addEventListener('mouseleave', function () {
    this.style.transform = 'translateY(0)';
  });
});

// Add click handlers for buttons
document.querySelectorAll('.btn').forEach(button => {
  button.addEventListener('click', function () {
    // Add your custom click handling here
    console.log('Button clicked:', this.textContent.trim());
  });
});

// Add learn more button handlers
document.querySelectorAll('.learn-more').forEach(button => {
  button.addEventListener('click', function () {
    const service = this.parentElement.querySelector('h3').textContent;
    console.log('Learn more about:', service);
    // Add your custom handling here
  });
});