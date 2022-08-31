
window.addEventListener("load", (e) => {

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