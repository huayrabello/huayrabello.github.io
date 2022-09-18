
function setupProyecto() {


    var divmodal = document.getElementById('proyectoModal')
    const myModal = new bootstrap.Modal(divmodal, { keyboard: true, backdrop: true })

    var imagesproyecto = document.getElementsByClassName("default-overlay");

    for (let index = 0; index < imagesproyecto.length; index++) {
        const element = imagesproyecto[index];
        element.addEventListener("click", () => {
            myModal.toggle();
            preloadImages("cuandoelfuego_hd");
        })
    }


    var divmodalbody = document.getElementById('modalbody')

    //divmodal.addEventListener("click", () => { myModal.hide() })

    divmodalbody.addEventListener("click", (e) => { e.stopPropagation() })



}


window.addEventListener("DOMContentLoaded", (e) => {
    setupProyecto();

})
