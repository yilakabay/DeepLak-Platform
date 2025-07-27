// Toggle functionality
document.querySelectorAll('.toggle-option').forEach(option => {
  option.addEventListener('click', function() {
    // Remove active class from all options
    document.querySelectorAll('.toggle-option').forEach(opt => {
      opt.classList.remove('active');
    });
    
    // Add active class to clicked option
    this.classList.add('active');
    
    // Show loading indicator
    console.log(`Switched to: ${this.textContent}`);
  });
});

// Menu placeholder
document.querySelector('.menu-icon').addEventListener('click', () => {
  alert('Mobile menu coming in S6!');
});
