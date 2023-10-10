document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector(".carousel");
    const slides = document.querySelectorAll(".slide");
    const imageElement = document.querySelector(".carousel-image");
    const buttons = document.querySelectorAll(".carousel-button");
    const slideWidth = slides[0].clientWidth; // Largura de um slide
    let currentIndex = 0;
    let interval;

    function showSlide(index) {
        carousel.style.transform = `translateX(-${index * slideWidth}px)`;
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    function startAutoSlide() {
        interval = setInterval(nextSlide, 5000);
    }

    function stopAutoSlide() {
        clearInterval(interval);
    }

    startAutoSlide();

    buttons.forEach((button) => {
        button.addEventListener("click", function () {
            stopAutoSlide();
            nextSlide();
            startAutoSlide();
        });
    });

    showSlide(currentIndex);
});
