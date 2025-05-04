document.addEventListener('DOMContentLoaded', function() {
    // Animate elements when they come into view
    const animateOnScroll = (elements, animationClass) => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(animationClass);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        
        elements.forEach(el => observer.observe(el));
    };
    
    // Feature cards animation
    const featureCards = document.querySelectorAll('.feature-card');
    animateOnScroll(featureCards, 'animate__animated animate__fadeInUp');
    
    // Benefits animation
    const benefits = document.querySelectorAll('.benefit');
    animateOnScroll(benefits, 'animate__animated animate__fadeIn');
    
    // Why choose items animation
    const whyChooseItems = document.querySelectorAll('.why-choose-item');
    animateOnScroll(whyChooseItems, 'animate__animated animate__fadeIn');
    
    // Add visible class with animation properties
    const style = document.createElement('style');
    style.textContent = `
        .feature-card:hover h3 .icon {
            transform: rotate(360deg);
            transition: transform 0.5s ease;
        }
    `;
    document.head.appendChild(style);
    
    // Floating animation for hero elements
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.classList.add('floating');
    }
    
    // Button hover effect
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('mouseenter', () => {
            ctaButton.style.background = 'rgba(255,255,255,0.9)';
        });
        ctaButton.addEventListener('mouseleave', () => {
            ctaButton.style.background = 'white';
        });
    }
});