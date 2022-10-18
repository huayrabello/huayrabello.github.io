
function addHorizontalSlider(id, mediaQuery) {

    if (mediaQuery.matches) { // If media query matches
        $(id).slick({
            dots: false,
            infinite: true,
            speed: 1000,
            slidesToShow: 5,
            slidesToScroll: 5,
            centerMode: true,
            variableWidth: true,
            appendArrows: false,
            appendDots: false,
            draggable: false,
            swipeToSlide: false,
            responsive: false
        });

        //Carrusel
        var prev = document.getElementById("slider_prev");
        var next = document.getElementById("slider_next");

        prev.addEventListener("click", (e) => {
            $(id).slick('slickPrev');
            //$("#slidermainimage").attr("src", $(".slick-current img").attr("src"))
        })

        next.addEventListener("click", (e) => {
            $(id).slick('slickNext');
            //$("#slidermainimage").attr("src", $(".slick-current img").attr("src"))
        })

        $(id).on('beforeChange', function (event, slick, currentSlide, nextSlide) {
            $("#slidermainimage").attr("src", $(slick.$slides[currentSlide]).children()[0].src)
        });
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

    const video = document.getElementById("muujvideo");
    const spinner = document.querySelector(".videospinner");

    video.addEventListener("waiting", () => {
        if (spinner.classList.contains("invisible")) {
            spinner.classList.remove("invisible")
            spinner.classList.add("visible")
        }
    })

    video.addEventListener("playing", () => {
        if (spinner.classList.contains("visible")) {
            spinner.classList.remove("visible")
            spinner.classList.add("invisible")
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

