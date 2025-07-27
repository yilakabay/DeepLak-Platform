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
  
  // Add horizontal scroll indicators
  const carousels = document.querySelectorAll('.carousel-content');
  carousels.forEach(carousel => {
    carousel.addEventListener('scroll', function() {
      const maxScroll = this.scrollWidth - this.clientWidth;
      if (this.scrollLeft < maxScroll) {
        this.classList.add('can-scroll');
      } else {
        this.classList.remove('can-scroll');
      }
    });
  });
});

/* ===== S5: Footer ===== */
.footer {
  background: #000;
  color: white;
  padding: 40px 20px;
  width: 100vw;
}

.footer-container {
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  max-width: 1200px;
  margin: 0 auto;
}

.footer-section {
  flex: 1;
  min-width: 250px;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 12px;
  border-bottom: 1px solid #333;
  margin-bottom: 15px;
  cursor: pointer;
  font-weight: bold;
  font-size: 18px;
}

.chevron {
  font-size: 14px;
  transition: transform 0.3s;
}

.subsection {
  list-style: none;
  padding-left: 25px;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.5s ease;
}

.subsection.expanded {
  max-height: 1000px;
}

.subsection li {
  padding: 8px 0;
  color: #aaa;
  position: relative;
  cursor: pointer;
  transition: color 0.3s;
}

.subsection li:hover {
  color: white;
}

.subsection li::before {
  content: "•";
  position: absolute;
  left: -15px;
  color: #6a11cb;
}