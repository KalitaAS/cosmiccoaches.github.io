// Обработчик для гамбургер-меню
document.querySelector('.menu-toggle').addEventListener('click', () => {
    document.querySelector('.nav-menu').classList.toggle('active');
    const toggleBtn = document.querySelector('.menu-toggle');
    toggleBtn.textContent = toggleBtn.textContent === '☰' ? '✕' : '☰';
});
