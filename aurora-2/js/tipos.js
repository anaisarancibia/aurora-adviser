$(document).ready(function() {
    var swiper = new Swiper("#tole-carousel-container .slider-container", {
        slidesPerView: 1,
        spaceBetween: 25,
        loop: true,
        centerSlide: true,
        fade: true,
        grabCursor: true,
        autoplay: {
            delay: 10000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            dynamicBullets: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints:{
            0:{
                slidesPerView: 1,
            },
            520:{
                slidesPerView: 2,
            },
            950:{
                slidesPerView: 3,
            },
        },
        // Habilita la función de arrastrar para el carrusel
        allowTouchMove: true
    });
});
