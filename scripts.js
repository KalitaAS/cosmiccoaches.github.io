// Анимация видео при скролле
document.addEventListener('scroll', () => {
    const videos = document.querySelectorAll('video');
    videos.forEach(video => {
        const rect = video.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            video.play();
        } else {
            video.pause();
        }
    });
});

// Параллакс-эффект для фото
document.addEventListener('scroll', () => {
    const photos = document.querySelectorAll('.photo-gallery img');
    photos.forEach(photo => {
        const speed = 0.3;
        const yPos = -(window.pageYOffset * speed);
        photo.style.transform = `translateY(${yPos}px)`;
    });
});
