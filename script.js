document.addEventListener('DOMContentLoaded', function() {
    // Sidebar functionality
    const menuIcon = document.querySelector('.menu-icon');
    const closeIcon = document.querySelector('.close-icon');
    const sidebarOverlay = document.querySelector('.sidebar-overlay');

    if (menuIcon && closeIcon && sidebarOverlay) {
        menuIcon.addEventListener('click', function() {
            sidebarOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        });

        closeIcon.addEventListener('click', function() {
            sidebarOverlay.classList.remove('active');
            document.body.style.overflow = '';
        });

        sidebarOverlay.addEventListener('click', function(e) {
            if (e.target === sidebarOverlay) {
                sidebarOverlay.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }

    // Language submenu toggle
    document.querySelectorAll('.submenu-header').forEach(header => {
        const chevron = header.querySelector('.chevron');
        const submenuContent = header.nextElementSibling;

        header.addEventListener('click', function(e) {
            e.stopPropagation();
            if (submenuContent.classList.contains('expanded')) {
                submenuContent.classList.remove('expanded');
                chevron.textContent = '▼';
            } else {
                submenuContent.classList.add('expanded');
                chevron.textContent = '▲';
            }
        });
    });

    // Language selection
    const langItems = document.querySelectorAll('.submenu-item');
    let currentLang = 'en';

    function setActiveLanguage(lang) {
        langItems.forEach(item => {
            item.classList.remove('active-lang');
            if (item.dataset.lang === lang) {
                item.classList.add('active-lang');
            }
        });
        currentLang = lang;
    }

    langItems.forEach(item => {
        if (item.dataset.lang === 'en') {
            item.classList.add('active-lang');
        }

        item.addEventListener('click', function() {
            setActiveLanguage(this.dataset.lang);
        });
    });

    // Initialize carousel position
    const carousel = document.querySelector('.carousel-content');
    if (carousel) {
        carousel.scrollLeft = 20;
    }

    // Initialize pricing position
    const pricingContainer = document.querySelector('.pricing-container');
    if (pricingContainer) {
        pricingContainer.scrollLeft = 20;
    }

    // Teaching/Learning toggle
    const toggleOptions = document.querySelectorAll('.toggle-option');
    const teachingContent = document.querySelector('.teaching-content');
    const learningContent = document.querySelector('.learning-content');

    if (toggleOptions.length && teachingContent && learningContent) {
        teachingContent.style.display = 'flex';
        learningContent.style.display = 'none';

        toggleOptions.forEach(option => {
            option.addEventListener('click', function() {
                toggleOptions.forEach(opt => opt.classList.remove('active'));
                this.classList.add('active');

                if (this.dataset.target == 'teaching') {
                    teachingContent.style.display = 'flex';
                    learningContent.style.display = 'none';
                } else {
                    teachingContent.style.display = 'none';
                    learningContent.style.display = 'flex';
                }
            });
        });
    }

    // Footer toggle
    document.querySelectorAll('.section-header').forEach(header => {
        const chevron = header.querySelector('.chevron');
        const subsection = header.nextElementSibling;

        subsection.style.display = 'none';
        chevron.textContent = '▼';

        header.addEventListener('click', function() {
            if (subsection.style.display == 'none') {
                subsection.style.display = 'block';
                chevron.textContent = '▲';
                subsection.classList.add('expanded');
            } else {
                subsection.style.display = 'none';
                chevron.textContent = '▼';
                subsection.classList.remove('expanded');
            }
        });
    });

    // Pricing card hover effect
    const pricingCards = document.querySelectorAll('.pricing-card');
    pricingCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });

    // Sign up functionality
    const accountTypeCards = document.querySelectorAll('.account-type-card');
    const createAccountBtn = document.querySelector('.create-account-btn');

    if (accountTypeCards.length && createAccountBtn) {
        accountTypeCards.forEach(card => {
            card.addEventListener('click', function() {
                accountTypeCards.forEach(c => c.classList.remove('selected'));
                this.classList.add('selected');

                createAccountBtn.disabled = false;
                createAccountBtn.classList.add('active');

                if (this.dataset.accountType === 'instructor') {
                    createAccountBtn.textContent = 'Join as an Instructor';
                    createAccountBtn.classList.add('instructor');
                } else {
                    createAccountBtn.textContent = 'Join as a Learner';
                    createAccountBtn.classList.remove('instructor');
                }
            });
        });

        createAccountBtn.addEventListener('click', function() {
            if (!this.disabled) {
                const accountType = document.querySelector('.account-type-card.selected').dataset.accountType;
                window.location.href = 'account-created.html';
            }
        });
    }

    // Apply system preference on page load
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (systemPrefersDark) {
        document.body.classList.add('dark-mode');
    }
});