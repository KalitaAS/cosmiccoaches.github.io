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

