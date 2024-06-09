document.addEventListener('DOMContentLoaded', () => {
    const textContainer = document.querySelector('.animated-text');
    const goToSecondPartButton = document.getElementById('go-to-second-part');

    // Animação de subida do texto
    textContainer.style.animationDuration = '95s';

    // Animação de aparecimento do botão
    setTimeout(() => {
        goToSecondPartButton.style.opacity = '1';
    }, 40000);

    // Evento ao clicar no botão para ir para a segunda parte
    goToSecondPartButton.addEventListener('click', () => {
        window.location.href = 'https://t0m14.github.io/amor-da-minha-vida/';
    });
});