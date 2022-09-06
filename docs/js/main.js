

function preloadImages(seccion) {
    const spinner = document.querySelector(".loadingspinner");
    spinner.classList.remove("d-none")
    //const seccionToHide = document.querySelector(".colaboraciones_slider");
    // seccionToHide.classList.add("visually-hidden");
    fetch("data/fotos.json").then(r => r.json()).then(
        data => {
            if (data[seccion] !== undefined && data[seccion].preload) {

                const seccionFotos = data[seccion];
                const totalToPreload = seccionFotos.preloadfiles.length
                let totalPreloaded = 0

                seccionFotos.preloadfiles.forEach(file => {
                    const tmp = new Image();

                    tmp.addEventListener("load", () => {
                        totalPreloaded++;
                        if (totalPreloaded >= totalToPreload) spinner.classList.add("d-none")
                    })

                    tmp.addEventListener("error", () => {
                        console.error("No se pudo cargar imagen " + seccionFotos.path + file);
                        totalPreloaded++;
                        if (totalPreloaded >= totalToPreload) spinner.classList.add("d-none")
                    })

                    tmp.src = seccionFotos.path + file

                });


            }

            else console.error("No existe seccion en data.json")
        })

}


window.addEventListener("DOMContentLoaded", (e) => {
    const closemenu = document.getElementById("closemenu")
    const openmenu = document.getElementById("openmenu")
    const menu = document.getElementById("mainmenu")
    const mmbody = document.getElementById("mm-body")

    openmenu.addEventListener("click", () => {
        mmbody.classList.remove('d-none')
        mmbody.style.height = ' 100vh'
        closemenu.classList.remove('d-none')
        openmenu.classList.add('d-none')
    }
    )


    closemenu.addEventListener("click", () => {
        mmbody.style.height = 'auto'
        closemenu.classList.add('d-none')
        openmenu.classList.remove('d-none')
        mmbody.classList.add('d-none')

    })


})


window.addEventListener("load", () => {
    const spinner = document.querySelector(".loadingspinner");
    if (spinner) spinner.classList.add("d-none")
})