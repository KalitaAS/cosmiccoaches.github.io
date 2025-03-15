// Анимация появления секций при скролле
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');

    const revealSection = () => {
        const windowHeight = window.innerHeight;
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < windowHeight * 0.9) {
                section.classList.add('visible');
            }
        });
    };

    window.addEventListener('scroll', revealSection);
    revealSection(); // Проверка при загрузке страницы
});
