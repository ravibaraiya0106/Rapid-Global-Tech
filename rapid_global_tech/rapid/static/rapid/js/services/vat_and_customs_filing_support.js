 // Wait for DOM to be fully loaded
 document.addEventListener('DOMContentLoaded', function() {
    // Navigation
    const navbar = document.querySelector('.navbar');
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    // Smooth scrolling function (now properly exposed)
    window.scrollToSection = function(id) {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            // Close mobile menu if open
            if (mobileMenuBtn && navLinks) {
                mobileMenuBtn.classList.remove('active');
                navLinks.classList.remove('show');
            }
        }
    };

    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 60) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenuBtn.classList.toggle('active');
            navLinks.classList.toggle('show');
        });
    }

    // Services Section
    const servicesData = [
        {
            id: 1,
            title: "Country-Specific VAT Preparation and Filing",
            description: "Tailored VAT preparation and filing services across major jurisdictions including the UK, EU, and India.",
            icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/><path d="M2 12h20"/></svg>`,
            details: "Whether you need monthly, quarterly, or annual filings, we keep your records aligned with local regulations and deadlines across the UK (post-Brexit VAT rules), EU (including OSS requirements), and India (GST compliance)."
        },
        {
        id: 2,
        title: "Input-Output GST Calculation",
        description: "Complete GST calculation and reconciliation to optimize your tax credits and ensure accurate reporting.",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>`,
        details: "We manage capturing purchase and sales data, calculating tax liability, matching transactions with supplier returns, identifying discrepancies, and preparing summary reports."
    },
    {
        id: 3,
        title: "EU OSS Reporting",
        description: "Specialized reporting services for businesses trading within the EU or between the EU and UK.",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/></svg>`,
        details: "We handle Intrastat reporting, EC Sales List for VAT-exempt intra-community supplies, and EU One Stop Shop for simplified VAT filings for cross-border B2C sales."
    },
    {
        id: 4,
        title: "Customs Documentation",
        description: "Comprehensive support for import/export declarations and all related customs documentation.",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`,
        details: "We offer full support for import and export declarations, HS code classification, certificates of origin, commercial invoices, customs duty calculations, and proof of export compliance."
    },
    {
        id: 5,
        title: "Digital Document Archiving",
        description: "Secure cloud storage of all tax filings, invoices, and customs documents for audit readiness.",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>`,
        details: "Our archiving system includes secure cloud storage, document tagging for easy retrieval, indexed reports for audits, and retention schedules aligned with local tax laws."
    },
    {
        id: 6,
        title: "Partner Coordination",
        description: "Seamless coordination with local accountants, tax agents, customs brokers, and auditors.",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
        details: "We bridge the gap by collaborating with your existing accountants, acting as liaison with customs brokers, responding to auditor queries, and ensuring consistency in reporting."
    }
    ];

    const servicesGrid = document.querySelector('.services-grid');
    if (servicesGrid) {
        servicesData.forEach(service => {
            const serviceCard = document.createElement('div');
            serviceCard.className = 'service-card';
            serviceCard.innerHTML = `
                <div class="icon">${service.icon}</div>
                <h3>${service.title}</h3>
                <p>${service.description}</p>
                <div class="details">${service.details}</div>
                <button class="learn-more">
                    Learn more
                    <svg class="arrow-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M19 9l-7 7-7-7"/>
                    </svg>
                </button>
            `;
            servicesGrid.appendChild(serviceCard);

            const learnMoreBtn = serviceCard.querySelector('.learn-more');
            const arrowIcon = serviceCard.querySelector('.arrow-icon');
            learnMoreBtn.addEventListener('click', () => {
                serviceCard.classList.toggle('active');
                if (serviceCard.classList.contains('active')) {
                    learnMoreBtn.innerHTML = 'Show less <svg class="arrow-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12l7-7 7 7"/></svg>';
                } else {
                    learnMoreBtn.innerHTML = 'Learn more <svg class="arrow-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 9l-7 7-7-7"/></svg>';
                }
            });
        });
    }

    // How It Works Section
    const steps = [
    {
        id: 1,
        title: 'Onboarding',
        description: 'We start with a discovery session to understand your business structure, markets, and current tax setup.',
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/></svg>`
    },
    {
        id: 2,
        title: 'Data Collection',
        description: 'You share relevant documents (sales records, invoices, shipping docs). We can also integrate with your accounting or ERP systems for real-time data pulls.',
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M12 18v-6"/><path d="M8 18v-1"/><path d="M16 18v-3"/></svg>`
    },
    {
        id: 3,
        title: 'Compliance Roadmap',
        description: 'We map out the countries, taxes, and documents applicable to you, along with timelines and responsibilities.',
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="3 11 22 2 13 21 11 13 3 11"/></svg>`
    },
    {
        id: 4,
        title: 'Execution',
        description: 'Our team prepares, files, and submits all relevant VAT, GST, OSS, and customs documents — in time, every time.',
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`
    },
    {
        id: 5,
        title: 'Ongoing Support',
        description: 'We provide continuous monitoring, flag compliance risks, and prepare your team for audits. We also keep you updated on regulatory changes that affect your filings.',
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg>`
    }
    ];

    let currentStep = 1;
    const timeline = document.querySelector('.timeline');
    const stepDetails = document.querySelector('.step-details');

    // Expose changeStep to global scope
    window.changeStep = function(newStep) {
        if (newStep >= 1 && newStep <= steps.length) {
            currentStep = newStep;
            updateTimeline();
        }
    };

    if (timeline && stepDetails) {
        // Create timeline steps
        steps.forEach(step => {
            const stepElement = document.createElement('div');
            stepElement.className = `timeline-step ${step.id === 1 ? 'active' : ''}`;
            stepElement.innerHTML = `
                <div class="step-icon">${step.icon}</div>
                <p>${step.title}</p>
            `;
            timeline.appendChild(stepElement);
        });

        function updateTimeline() {
            // Update progress bar
            timeline.style.setProperty('--progress', `${((currentStep - 1) / (steps.length - 1)) * 100}%`);
            
            // Update step styles
            document.querySelectorAll('.timeline-step').forEach((step, index) => {
                if (index + 1 <= currentStep) {
                    step.classList.add('active');
                } else {
                    step.classList.remove('active');
                }
            });

            // Update step details
            const step = steps[currentStep - 1];
            stepDetails.innerHTML = `
                <h3>
                    <div class="step-icon">${step.icon}</div>
                    ${currentStep}. ${step.title}
                </h3>
                <p>${step.description}</p>
                <div class="step-navigation">
                    <button class="step-button prev" ${currentStep === 1 ? 'disabled' : ''} 
                        onclick="changeStep(${currentStep - 1})">Previous</button>
                    <button class="step-button next" ${currentStep === steps.length ? 'disabled' : ''} 
                        onclick="changeStep(${currentStep + 1})">Next</button>
                </div>
            `;
        }

        // Initialize timeline
        updateTimeline();
    }

    // Contact Form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        const successMessage = document.querySelector('.success-message');
        const formGroups = contactForm.querySelectorAll('.form-group');
        const checkboxGrid = document.querySelector('.checkbox-grid');

        // Add country checkboxes if checkbox grid exists
        if (checkboxGrid) {
            const countries = [
                'United Kingdom',
                'European Union',
                'United States',
                'India',
                'China',
                'Australia',
                'Other'
            ];

            countries.forEach(country => {
                const checkbox = document.createElement('div');
                checkbox.className = 'checkbox-item';
                checkbox.innerHTML = `
                    <input type="checkbox" id="country-${country.toLowerCase().replace(' ', '-')}" name="countries" value="${country}">
                    <label for="country-${country.toLowerCase().replace(' ', '-')}">${country}</label>
                `;
                checkboxGrid.appendChild(checkbox);
            });
        }

        // Form validation and submission
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            let isValid = true;
            const formData = new FormData(contactForm);
            
            // Clear previous errors
            formGroups.forEach(group => {
                group.classList.remove('error');
                const errorMessage = group.querySelector('.error-message');
                if (errorMessage) errorMessage.textContent = '';
            });
            
            // Validate required fields
            if (!formData.get('name')) {
                showError('name', 'Name is required');
                isValid = false;
            }
            
            if (!formData.get('email')) {
                showError('email', 'Email is required');
                isValid = false;
            } else if (!/^\S+@\S+\.\S+$/.test(formData.get('email'))) {
                showError('email', 'Please enter a valid email address');
                isValid = false;
            }
            
            if (!formData.get('message')) {
                showError('message', 'Message is required');
                isValid = false;
            }
            
            if (isValid && successMessage) {
                const submitButton = contactForm.querySelector('.submit-button');
                const buttonContent = submitButton.querySelector('.button-content');
                const loadingSpinner = submitButton.querySelector('.loading-spinner');
                
                // Show loading state
                buttonContent.classList.add('hidden');
                loadingSpinner.classList.remove('hidden');
                
                // Simulate form submission
                await new Promise(resolve => setTimeout(resolve, 1500));
                
                // Show success message
                contactForm.reset();
                contactForm.classList.add('hidden');
                successMessage.classList.remove('hidden');
                
                // Reset form after 5 seconds
                setTimeout(() => {
                    successMessage.classList.add('hidden');
                    contactForm.classList.remove('hidden');
                    buttonContent.classList.remove('hidden');
                    loadingSpinner.classList.add('hidden');
                }, 5000);
            }
        });

        function showError(fieldName, message) {
            const inputElement = contactForm.querySelector(`[name="${fieldName}"]`);
            if (inputElement) {
                const formGroup = inputElement.closest('.form-group');
                if (formGroup) {
                    formGroup.classList.add('error');
                    const errorMessage = formGroup.querySelector('.error-message');
                    if (errorMessage) {
                        errorMessage.textContent = message;
                    }
                }
            }
        }

        // Clear errors on input
        formGroups.forEach(group => {
            const input = group.querySelector('input, textarea');
            if (input) {
                input.addEventListener('input', () => {
                    group.classList.remove('error');
                    const errorMessage = group.querySelector('.error-message');
                    if (errorMessage) errorMessage.textContent = '';
                });
            }
        });
    }
});