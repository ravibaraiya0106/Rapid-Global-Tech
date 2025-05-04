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
    
    // Work steps animation
    const workSteps = document.querySelectorAll('.work-step');
    animateOnScroll(workSteps, 'animate__animated animate__fadeIn');
    
    // Benefit cards animation
    const benefitCards = document.querySelectorAll('.benefit-card');
    animateOnScroll(benefitCards, 'animate__animated animate__fadeIn');
    
    // Why us items animation
    const whyUsItems = document.querySelectorAll('.why-us-item');
    animateOnScroll(whyUsItems, 'animate__animated animate__fadeIn');
    
    // Add visible class with animation properties
    const style = document.createElement('style');
    style.textContent = `
        .feature-card:hover h3 .icon {
            transform: rotate(360deg);
            transition: transform 0.5s ease;
        }
        
        .work-step:hover .work-step-icon {
            transform: scale(1.1);
            transition: transform 0.3s ease;
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