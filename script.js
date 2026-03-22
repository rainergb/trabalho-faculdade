// script.js - Funcionalidades JavaScript para o portfólio

// Carousel simples
const carousel = document.querySelector('#carousel .flex');
if (carousel) {
    let scrollAmount = 0;
    const scrollStep = 320; // Largura do card + margem

    // Função para rolar para a direita
    function scrollRight() {
        scrollAmount += scrollStep;
        if (scrollAmount > carousel.scrollWidth - carousel.clientWidth) {
            scrollAmount = 0;
        }
        carousel.scrollTo({
            left: scrollAmount,
            behavior: 'smooth'
        });
    }

    // Auto-scroll a cada 3 segundos
    setInterval(scrollRight, 3000);
}

// Formulário de contato - simulação
const contactForm = document.querySelector('#contact form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Mensagem enviada! (Simulação)');
    });
}

// Animações de fade-in
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Mobile menu toggle
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

if (menuToggle && menu) {
    menuToggle.addEventListener('click', function() {
        menu.classList.toggle('open');
        // Change icon
        const icon = menuToggle.querySelector('i');
        if (menu.classList.contains('open')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
}