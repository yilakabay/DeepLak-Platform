document.addEventListener('DOMContentLoaded', function() {
  // Initialize elements
  const toggleOptions = document.querySelectorAll('.toggle-option');
  const teachingContent = document.querySelector('.teaching-content');
  const learningContent = document.querySelector('.learning-content');
  
  // Set initial state
  teachingContent.style.display = 'flex';
  
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
      if (this.dataset.target === 'teaching') {
        teachingContent.style.display = 'flex';
        learningContent.style.display = 'none';
      } else {
        teachingContent.style.display = 'none';
        learningContent.style.display = 'flex';
      }
    });
  });
  
// Replace your footer JavaScript with this
document.addEventListener('DOMContentLoaded', function() {
  // Footer toggle functionality
  document.querySelectorAll('.section-header').forEach(header => {
    const chevron = header.querySelector('.chevron');
    const subsection = header.nextElementSibling;
    
    // Hide all subsections by default
    subsection.style.display = 'none';
    
    header.addEventListener('click', function() {
      // Toggle current section
      if (subsection.style.display === 'none') {
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
  
  // ... keep your existing toggle functionality for other elements
});