// testimonials.js
document.addEventListener('DOMContentLoaded', function() {
    let testimonialIndex = 1;
    
    // Initialize the testimonial slideshow
    showTestimonials(testimonialIndex);
    
    // Auto-advance testimonials every 7 seconds
    let testimonialInterval = setInterval(() => {
      plusTestimonials(1);
    }, 7000);
    
    // Next/previous controls
    window.plusTestimonials = function(n) {
      showTestimonials(testimonialIndex += n);
      // Reset the timer when user manually changes slides
      clearInterval(testimonialInterval);
      testimonialInterval = setInterval(() => {
        plusTestimonials(1);
      }, 7000);
    };
    
    // Thumbnail image controls
    window.currentTestimonial = function(n) {
      showTestimonials(testimonialIndex = n);
      // Reset the timer when user manually changes slides
      clearInterval(testimonialInterval);
      testimonialInterval = setInterval(() => {
        plusTestimonials(1);
      }, 7000);
    };
    
    function showTestimonials(n) {
      let i;
      let testimonials = document.getElementsByClassName("testimonial-slide");
      let dots = document.getElementsByClassName("testimonial-dot");
      
      if (n > testimonials.length) {testimonialIndex = 1}
      if (n < 1) {testimonialIndex = testimonials.length}
      
      for (i = 0; i < testimonials.length; i++) {
        testimonials[i].style.display = "none";
      }
      
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      
      testimonials[testimonialIndex-1].style.display = "block";
      dots[testimonialIndex-1].className += " active";
    }
  });