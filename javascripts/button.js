export function Button(Boton, Sol, Luna) {

    let Buttoon = document.querySelector(Boton)
    let Sun = document.querySelector(Sol)
    let Moon = document.querySelector(Luna)

    document.addEventListener(`click`, evento => {
        if (evento.target.matches(Boton)) {
            console.log(`hola`)
            Buttoon.classList.toggle(`active`)

            if (Buttoon.classList.contains(`active`)) {
                Sun.setAttribute("src", `./media/images/sun_dark.png`)
            } else {
                Sun.setAttribute("src", `./media/images/sun_light.png`)
            }

            if (Buttoon.classList.contains(`active`)) {
                Moon.setAttribute("src", `./media/images/moon_dark.png`)
            } else {
                Moon.setAttribute("src", `./media/images/moon_light.png`)
            }
        }
    })
}