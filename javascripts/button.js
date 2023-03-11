export function Button(Boton, Sol, Luna) {

    let Buttoon = document.querySelector(Boton)
    let Sun = document.querySelector(Sol)
    let Moon = document.querySelector(Luna)
    let Enlace = document.querySelector(`.header__enlace`)
    let Icono = document.querySelector(`.header__icon-image`)

    document.addEventListener(`click`, evento => {
        if (evento.target.matches(Boton)) {
            Buttoon.classList.toggle(`active`)

            if (Buttoon.classList.contains(`active`)) {
                Sun.setAttribute("src", `./media/images/sun_dark.png`)
                Moon.setAttribute("src", `./media/images/moon_dark.png`)

                if (Enlace.classList.contains(`active`)) {
                    Icono.setAttribute(`src`, `./media/images/close_dark.png`)
                } else {
                    Icono.setAttribute(`src`, `./media/images/menu_dark.png`)
                }
            } else {
                Sun.setAttribute("src", `./media/images/sun_light.png`)
                Moon.setAttribute("src", `./media/images/moon_light.png`)

                if (Enlace.classList.contains(`active`)) {
                    Icono.setAttribute(`src`, `./media/images/close_light.png`)
                } else {
                    Icono.setAttribute(`src`, `./media/images/menu_light.png`)
                }
            }
        }
    })

}