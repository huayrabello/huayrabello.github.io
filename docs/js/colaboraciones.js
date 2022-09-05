

function addHorizontalSlider(id, mediaQuery) {

    if (mediaQuery.matches) { // If media query matches
        $(id).slick({
            dots: false,
            infinite: true,
            speed: 1000,
            slidesToShow: 1,
            centerMode: false,
            variableWidth: true,
            appendArrows: false,
            appendDots: false,
            draggable: true,
            swipeToSlide: false,
            responsive: false
        });

        //Carrusel
        var prev = document.getElementById("slider_prev");
        var next = document.getElementById("slider_next");

        prev.addEventListener("click", (e) => {
            $(id).slick('slickPrev');

        })

        next.addEventListener("click", (e) => {
            $(id).slick('slickNext');
        })
    } else {
        try {
            $(id).slick('unslick');
        } catch (error) {
            console.log("no existe instancia de slick..,")
        }

    }
}


window.addEventListener("DOMContentLoaded", (e) => {

    const mediaQuery = window.matchMedia("(min-width: 992px)")

    addHorizontalSlider("#full_slider", mediaQuery)

    mediaQuery.addEventListener("change", () => {

        addHorizontalSlider("#full_slider", mediaQuery);

    })

})



