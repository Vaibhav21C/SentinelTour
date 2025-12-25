// Mobile menu toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            // Toggle the 'open' class on the mobile menu
            mobileMenu.classList.toggle('open');
            
            // Toggle the 'active' class on the button for rotation animation
            this.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (mobileMenu && mobileMenu.classList.contains('open') && 
            !mobileMenu.contains(event.target) && 
            !mobileMenuButton.contains(event.target)) {
            mobileMenu.classList.remove('open');
            mobileMenuButton.classList.remove('active');
        }
    });
    
    // Handle window resize - close mobile menu when switching to desktop view
    window.addEventListener('resize', function() {
        if (mobileMenu && window.innerWidth >= 768 && mobileMenu.classList.contains('open')) {
            mobileMenu.classList.remove('open');
            mobileMenuButton.classList.remove('active');
        }
    });
});