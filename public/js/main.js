

window.addEventListener("load", (e) => {
    var myCarousel = document.getElementById("carouselhuay")
    var carousel = new bootstrap.Carousel(myCarousel, {
        interval: 2000,
        wrap: true,
        touch: true,
        pause: 'hover',
        ride: 'carousel'
    })

    carousel.cycle();

    myCarousel.addEventListener("click", () => {
        carousel.next();
    })


})