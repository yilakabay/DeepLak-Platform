document.addEventListener('DOMContentLoaded', function() {
  const toggleOptions = document.querySelectorAll('.toggle-option');
  const teachingContent = document.querySelector('.teaching-content');
  const learningContent = document.querySelector('.learning-content');
  
  // Initialize with teaching content visible
  teachingContent.style.display = 'flex';
  
  // Toggle functionality
  toggleOptions.forEach(option => {
    option.addEventListener('click', function() {
      // Remove active class from all
      toggleOptions.forEach(opt => opt.classList.remove('active'));
      
      // Add active to clicked
      this.classList.add('active');
      
      // Toggle content visibility
      if (this.dataset.target === 'teaching') {
        teachingContent.style.display = 'flex';
        learningContent.style.display = 'none';
      } else {
        teachingContent.style.display = 'none';
        learningContent.style.display = 'flex';
      }
    });
  });
});
