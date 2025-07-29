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
    
    // Language submenu toggle functionality - ADDED HERE
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
    
    // ... rest of your existing JavaScript code ...
    // (The rest of your file remains unchanged)
});