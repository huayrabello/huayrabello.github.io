

window.addEventListener("load", (e) => {
    // var myCarousel = document.getElementById("carouselhuay")

    // var carousel = new bootstrap.Carousel(myCarousel,
    //     //     {
    //     //     interval: 2000,
    //     //     wrap: true,
    //     //     touch: true,
    //     //     pause: 'hover',
    //     //     ride: 'carousel'
    //     // }
    // )

    // carousel.cycle();

    // myCarousel.addEventListener("click", (e) => {
    //     let halfCarouselWidth = myCarousel.clientWidth / 2
    //     console.log(halfCarouselWidth + " - " + e.offsetX)
    //     if (e.offsetX < halfCarouselWidth) carousel.prev();
    //     else carousel.next()
    // })

    const closemenu = document.getElementById("closemenu")
    const menu = document.getElementById("mainmenu")

    closemenu.addEventListener("click", () => {

        menu.classList.add('d-none')
    })


})