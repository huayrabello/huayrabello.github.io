
function setupProyecto() {
    var myCarousel = document.getElementById("carouselProyectos")

    if (myCarousel) {
        var carousel = new bootstrap.Carousel(myCarousel, {
            interval: 2000,
            wrap: true,
            touch: true,
            pause: 'hover',
            ride: 'carousel'
        })

        carousel.cycle();

        myCarousel.addEventListener("click", (e) => {

            let halfCarouselWidth = myCarousel.clientWidth / 2
            console.log(halfCarouselWidth + " - " + e.offsetX)
            if (e.offsetX < halfCarouselWidth) carousel.prev();
            else carousel.next()
        })



        var divmodal = document.getElementById('proyectoModal')
        const myModal = new bootstrap.Modal(divmodal, { keyboard: true, backdrop: true })

        var imagesproyecto = document.getElementsByClassName("default-overlay");

        for (let index = 0; index < imagesproyecto.length; index++) {
            const element = imagesproyecto[index];
            element.addEventListener("click", () => {
                carousel.to(index);
                myModal.toggle();
                preloadImages("cuandoelfuego_hd");
            })
        }


        var divmodalbody = document.getElementById('modalbody')

        //divmodal.addEventListener("click", () => { myModal.hide() })

        divmodalbody.addEventListener("click", (e) => { e.stopPropagation() })

        //Carrusel
        var carPrev = document.getElementById("carousel_prev")
        var carNext = document.getElementById("carousel_next")

        carPrev.addEventListener("click", (e) => {
            carousel.prev();

        })

        carNext.addEventListener("click", (e) => {
            carousel.next()
        })

    }
}


window.addEventListener("DOMContentLoaded", (e) => {
    setupProyecto();

})
