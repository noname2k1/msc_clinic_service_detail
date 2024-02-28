import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs';

const swiper = new Swiper('.swiper-1', {
    loop: true,
    // // If we need pagination
    // pagination: {
    //     el: '.swiper-pagination'
    // },
    // autoplay: {
    //     delay: 2000
    // },

    speed: 1000,
    // Navigation arrows
    navigation: {
        prevEl: '.prev-btn-1',
        nextEl: '.next-btn-1'
    },
    slidesPerView: 1

    // And if we need scrollbar
    // scrollbar: {
    //     el: '.swiper-scrollbar'
    // }
});

const swiper2 = new Swiper('.mySwiper', {
    slidesPerView: 4,
    spaceBetween: 16,
    loop: true,
    autoplay: {
        delay: 2000
    },
    speed: 1000,
    // Navigation arrows
    navigation: {
        prevEl: '.prev-btn-2',
        nextEl: '.next-btn-2'
    },
    breakpoints: {
        0: {
            slidesPerView: 1.75,
            spaceBetween: 10
        },
        767: {
            slidesPerView: 3,
            spaceBetween: 10
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 10
        }
    }
});
