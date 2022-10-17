
function addHorizontalSlider(id, mediaQuery) {

    if (mediaQuery.matches) { // If media query matches
        $(id).slick({
            dots: false,
            infinite: true,
            speed: 1000,
            slidesToShow: 5,
            slidesToScroll: 5,
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
            $("#slidermainimage").attr("src", $(".slick-current img").attr("src"))
        })

        next.addEventListener("click", (e) => {
            $(id).slick('slickNext');
            $("#slidermainimage").attr("src", $(".slick-current img").attr("src"))
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

    const elem = document.getElementById("muujvideo");

    elem.addEventListener("canplaythrough", () => {
        if (elem.style.visibility == "hidden") {
            elem.style.visibility = "visible"
            elem.play();
        }

    })

})

window.addEventListener("load", (e) => {
    const imageSwapSpeed = 2 // segundos
    const divimgs = [document.getElementById("swapimg1"), document.getElementById("swapimg2")];


    setInterval(() => {
        if (divimgs[0].style.display == "none") {
            divimgs[1].style.display = "none";
            divimgs[0].style.display = "block";

        }
        else {
            divimgs[0].style.display = "none";
            divimgs[1].style.display = "block";
        }


    }, imageSwapSpeed * 1000)


    $(".slide").on("click", function (element) {
        $("#slidermainimage").attr("src", $(element.target).attr("src"));
    })
})

