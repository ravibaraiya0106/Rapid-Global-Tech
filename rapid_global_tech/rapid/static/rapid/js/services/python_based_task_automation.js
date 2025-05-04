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
    
    // Process steps animation
    const processSteps = document.querySelectorAll('.process-step');
    processSteps.forEach((step, index) => {
        step.style.opacity = '0';
        step.style.transform = 'translateY(20px)';
        step.style.transition = `all 0.5s ease ${index * 0.1}s`;
    });
    animateOnScroll(processSteps, 'visible');
    
    // Case studies animation
    const caseStudies = document.querySelectorAll('.case-study');
    animateOnScroll(caseStudies, 'animate__animated animate__fadeIn');
    
    // Add visible class with animation properties
    const style = document.createElement('style');
    style.textContent = `
        .visible {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
        
        .feature-card:hover h3 .icon {
            transform: rotate(360deg);
            transition: transform 0.5s ease;
        }
        
        .process-step:hover .step-number {
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