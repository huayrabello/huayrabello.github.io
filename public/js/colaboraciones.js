

window.addEventListener("load", (e) => {
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: false,
        rewind: true,
        slidesPerView: 1,
        freeMode: true,
        spaceBetween: 10,
        centeredSlides: true,
        //effect: "coverflow",
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },


    });

    swiper.on('slideChange', function () {
        console.log('slide cambio');
    })

    swiper.on('slideChange', function () {
        console.log('final');
    })

})