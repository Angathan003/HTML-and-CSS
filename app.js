window.addEventListener('scroll', function() {
    var scrollPosition = window.pageYOffset;
    var landingSection = document.querySelector('.landing');
    landingSection.style.backgroundPosition = 'center ' + (-scrollPosition * 0.5) + 'px';
});
