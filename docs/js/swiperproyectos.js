

function addHorizontalSlider() {
    var swiper = new Swiper(".mySwiper", {
        spaceBetween: 1,
        slidesPerView: 5,
        freeMode: true,
        watchSlidesProgress: true,

    });
    var swiper2 = new Swiper(".mySwiper2", {
        slidesPerView: 1,
        spaceBetween: 1,
        centeredSlides: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        thumbs: {
            swiper: swiper,
        },
        effect: 'fade'
    });

}


window.addEventListener("load", (e) => {
    addHorizontalSlider();
})



