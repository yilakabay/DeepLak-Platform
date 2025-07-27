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
  
// Fixed Footer JavaScript
document.addEventListener('DOMContentLoaded', function() {
  // Footer toggle functionality
  document.querySelectorAll('.section-header').forEach(header => {
    header.addEventListener('click', function() {
      const chevron = this.querySelector('.chevron');
      const subsection = this.nextElementSibling;
      
      // Toggle chevron direction
      chevron.textContent = chevron.textContent === '▼' ? '▲' : '▼';
      
      // Toggle subsection visibility
      subsection.classList.toggle('expanded');
      
      // Update last item border
      const lastItem = subsection.querySelector('li:last-child');
      if (subsection.classList.contains('expanded')) {
        lastItem.style.borderBottom = '1px solid #333';
      } else {
        lastItem.style.borderBottom = 'none';
      }
    });
  });
});