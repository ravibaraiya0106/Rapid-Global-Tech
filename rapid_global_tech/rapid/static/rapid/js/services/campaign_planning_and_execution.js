document.addEventListener('DOMContentLoaded', function() {
    // Animate elements on scroll
    const animateElements = (elements, animation) => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = 1;
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.1 });

        elements.forEach(el => {
            el.style.opacity = 0;
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'all 0.6s ease-out';
            observer.observe(el);
        });
    };

    // Animate feature cards
    const features = document.querySelectorAll('.feature-card');
    animateElements(features);

    // Animate use cases
    const cases = document.querySelectorAll('.case-card');
    animateElements(cases);

    // Add hover effect to cards
    document.querySelectorAll('.feature-card, .case-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });
});