function updateBackgroundPosition() {
    var scrollPosition = window.pageYOffset;
    var landingSection = document.querySelector('.landing');
    landingSection.style.backgroundPosition = 'center ' + (-scrollPosition * 0.5) + 'px';
    requestAnimationFrame(updateBackgroundPosition);
  }
  
  window.addEventListener('scroll', function() {
    requestAnimationFrame(updateBackgroundPosition);
  });
  