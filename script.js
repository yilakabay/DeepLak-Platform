document.addEventListener('DOMContentLoaded', function() {
    // Sidebar functionality
    const menuIcon = document.querySelector('.menu-icon');
    const closeIcon = document.querySelector('.close-icon');
    const sidebarOverlay = document.querySelector('.sidebar-overlay');
    
    menuIcon.addEventListener('click', function() {
        sidebarOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
    
    closeIcon.addEventListener('click', function() {
        sidebarOverlay.classList.remove('active');
        document.body.style.overflow = '';
    });
    
    // Close sidebar when clicking outside
    sidebarOverlay.addEventListener('click', function(e) {
        if (e.target === sidebarOverlay) {
            sidebarOverlay.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
    
    // Language submenu toggle functionality
    document.querySelectorAll('.submenu-header').forEach(header => {
        const chevron = header.querySelector('.chevron');
        const submenuContent = header.nextElementSibling;
        
        header.addEventListener('click', function(e) {
            e.stopPropagation(); // Prevent triggering parent click events
            
            // Toggle expanded class
            if (submenuContent.classList.contains('expanded')) {
                submenuContent.classList.remove('expanded');
                chevron.textContent = '▼';
            } else {
                submenuContent.classList.add('expanded');
                chevron.textContent = '▲';
            }
        });
    });
    
    // Language selection functionality - NEW ADDITION
    const langItems = document.querySelectorAll('.submenu-item');
    let currentLang = 'en'; // Default language
    
    // Set active language
    function setActiveLanguage(lang) {
        langItems.forEach(item => {
            item.classList.remove('active-lang');
            if (item.dataset.lang === lang) {
                item.classList.add('active-lang');
            }
        });
        currentLang = lang;
    }
    
    // Initialize language
    langItems.forEach(item => {
        // Set default language
        if (item.dataset.lang === 'en') {
            item.classList.add('active-lang');
        }
        
        // Add click handler
        item.addEventListener('click', function() {
            setActiveLanguage(this.dataset.lang);
            // For future translation implementation:
            // translatePage(this.dataset.lang);
        });
    });
    
    // Dark mode toggle functionality
    const darkModeToggle = document.querySelector('.dark-mode-toggle');
    const body = document.body;
    
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
    }
    
    darkModeToggle.addEventListener('click', function() {
        body.classList.toggle('dark-mode');
        
        // Save preference
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    });
    
    // Initialize carousel position to show partial next item
    const carousel = document.querySelector('.carousel-content');
    if (carousel) {
        carousel.scrollLeft = 20;
    }

    // Initialize pricing position to show partial next plan
    const pricingContainer = document.querySelector('.pricing-container');
    if (pricingContainer) {
        pricingContainer.scrollLeft = 20;
    }    
    
    // Initialize elements
    const toggleOptions = document.querySelectorAll('.toggle-option');
    const teachingContent = document.querySelector('.teaching-content');
    const learningContent = document.querySelector('.learning-content');
    
    // Set initial state
    teachingContent.style.display = 'flex';
    learningContent.style.display = 'none';
    
    // Toggle functionality
    toggleOptions.forEach(option => {
        option.addEventListener('click', function() {
            // Remove active class from all
            toggleOptions.forEach(opt => {
                opt.classList.remove('active');
            });
            
            // Add active to clicked
            this.classList.add('active');
            
            // Toggle content
            if (this.dataset.target == 'teaching') {
                teachingContent.style.display = 'flex';
                learningContent.style.display = 'none';
            } else {
                teachingContent.style.display = 'none';
                learningContent.style.display = 'flex';
            }
        });
    });
    
    // Footer toggle functionality
    document.querySelectorAll('.section-header').forEach(header => {
        const chevron = header.querySelector('.chevron');
        const subsection = header.nextElementSibling;
        
        // Initially hide all subsections
        subsection.style.display = 'none';
        chevron.textContent = '▼';
        
        header.addEventListener('click', function() {
            // Toggle current section
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
    
    // Add hover effect to pricing cards
    const pricingCards = document.querySelectorAll('.pricing-card');
    pricingCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });
});
// ======== EXISTING CODE ABOVE ========
// ... previous JS code ...

// SIGN UP MODAL FUNCTIONALITY (ADD BELOW ALL EXISTING JS)
const signupModalOverlay = document.querySelector('.signup-modal-overlay');
const signupButtons = document.querySelectorAll('.signup-btn');
const accountTypeCards = document.querySelectorAll('.account-type-card');
const createAccountBtn = document.querySelector('.create-account-btn');
const loginLink = document.getElementById('login-link');

// Open modal when sign up buttons are clicked
signupButtons.forEach(button => {
    button.addEventListener('click', function() {
        signupModalOverlay.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    });
});

// Account type selection
accountTypeCards.forEach(card => {
    card.addEventListener('click', function() {
        // Remove selection from all cards
        accountTypeCards.forEach(c => c.classList.remove('selected'));
        
        // Select clicked card
        this.classList.add('selected');
        
        // Enable create account button
        createAccountBtn.disabled = false;
        createAccountBtn.classList.add('active');
        
        // Update button text and color based on selection
        if (this.dataset.accountType === 'instructor') {
            createAccountBtn.textContent = 'Join as an Instructor';
            createAccountBtn.classList.add('instructor');
        } else {
            createAccountBtn.textContent = 'Join as a Learner';
            createAccountBtn.classList.remove('instructor');
        }
    });
});

// Create account button handler
createAccountBtn.addEventListener('click', function() {
    if (!this.disabled) {
        signupModalOverlay.style.display = 'none';
        document.body.style.overflow = '';
        // Add your sign-up logic here
    }
});

// Login link handler
loginLink.addEventListener('click', function(e) {
    e.preventDefault();
    signupModalOverlay.style.display = 'none';
    document.body.style.overflow = '';
    // Add login modal opening logic here
});

// Close modal when clicking outside content
signupModalOverlay.addEventListener('click', function(e) {
    if (e.target === signupModalOverlay) {
        signupModalOverlay.style.display = 'none';
        document.body.style.overflow = '';
    }
});