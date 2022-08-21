

window.addEventListener("load", (e) => {
    var myCarousel = document.getElementById("carouselhuay")

    var carPrev = document.getElementById("carousel_prev")
    var carNext = document.getElementById("carousel_next")

    var carousel = new bootstrap.Carousel(myCarousel, {
        interval: 2000,
        wrap: true,
        touch: true,
        pause: 'hover',
        ride: 'carousel'
    })

    carousel.cycle();

    // myCarousel.addEventListener("click", (e) => {
    //     let halfCarouselWidth = myCarousel.clientWidth / 2
    //     console.log(halfCarouselWidth + " - " + e.offsetX)
    //     if (e.offsetX < halfCarouselWidth) carousel.prev();
    //     else carousel.next()
    // })

    carPrev.addEventListener("click", (e) => {
        carousel.prev();

    })

    carNext.addEventListener("click", (e) => {
        carousel.next()
    })


})