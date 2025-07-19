const nav = document.getElementById('mainNav');
window.addEventListener('scroll', function() {
    if (window.scrollY > 40) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});
