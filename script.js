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
  
  // Footer toggle functionality
document.querySelectorAll('.section-header').forEach(header => {
  header.addEventListener('click', function() {
    const chevron = this.querySelector('.chevron');
    const subsection = this.nextElementSibling;
    
    // Toggle chevron direction
    if (chevron.textContent === '▾') {
      chevron.textContent = '▴';
    } else {
      chevron.textContent = '▾';
    }
    
    // Toggle subsection visibility
    subsection.classList.toggle('expanded');
    
    // Update underline position
    const lastItem = subsection.querySelector('li:last-child');
    if (lastItem && subsection.classList.contains('expanded')) {
      this.style.borderBottom = 'none';
      lastItem.style.borderBottom = '1px solid #333';
    } else {
      this.style.borderBottom = '1px solid #333';
      subsection.querySelectorAll('li').forEach(li => {
        li.style.borderBottom = 'none';
      });
    }
  });
});