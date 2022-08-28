




window.addEventListener("load", (e) => {
    $('.inner_slider').slick({
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        centerMode: false,
        variableWidth: true,
        appendArrows: false,
        appendDots: false,
        centerMode: false,
        draggable: true,
        swipeToSlide: false,
        responsive: true
    });

    //Carrusel
    var prev = document.getElementById("slider_prev");
    var next = document.getElementById("slider_next");

    prev.addEventListener("click", (e) => {
        $('.inner_slider').slick('slickPrev');

    })

    next.addEventListener("click", (e) => {
        $('.inner_slider').slick('slickNext');
    })

})



