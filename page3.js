let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');

function showSlide(index) {
    if (index >= items.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = items.length - 1;
    } else {
        currentIndex = index;
    }

    const newTransformValue = `translateX(${-currentIndex * 100}%)`; // Исправлено
    document.querySelector('.carousel-inner').style.transform = newTransformValue;
}


function moveSlide(direction) {
    showSlide(currentIndex + direction);
}

// Автоматическое переключение слайдов каждые 5 секунд
setInterval(() => {
    showSlide(currentIndex + 1);
}, 3000);
