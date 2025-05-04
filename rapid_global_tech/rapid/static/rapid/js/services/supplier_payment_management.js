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
    
    // Why choose items animation
    const whyChooseItems = document.querySelectorAll('.why-choose-item');
    whyChooseItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = `all 0.5s ease ${index * 0.1}s`;
    });
    animateOnScroll(whyChooseItems, 'visible');
    
    // Comparison columns animation
    const comparisonCols = document.querySelectorAll('.comparison-col');
    animateOnScroll(comparisonCols, 'animate__animated animate__fadeIn');
    
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
            ctaButton.style.background = 'linear-gradient(135deg, var(--primary-dark) 0%, var(--secondary) 100%)';
        });
        ctaButton.addEventListener('mouseleave', () => {
            ctaButton.style.background = 'var(--gradient)';
        });
    }
    
    // Feature card icon animation on hover
    featureCards.forEach(card => {
        const icon = card.querySelector('.icon');
        if (icon) {
            card.addEventListener('mouseenter', () => {
                icon.style.transform = 'scale(1.1)';
            });
            card.addEventListener('mouseleave', () => {
                icon.style.transform = 'scale(1)';
            });
        }
    });
});