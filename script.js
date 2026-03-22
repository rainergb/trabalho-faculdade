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