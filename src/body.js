import './components/nav.js';
import './components/main.js';
import './components/footer.js'

const arrow = document.querySelector('.arrow');
window.addEventListener('scroll', () => {
    if (window.scrollY > 150) {
        arrow.style.display = 'block';
    } else {
        arrow.style.display = 'none';
    }
});

document.querySelectorAll('img').loading = 'lazy';