export function Menu() {

    let Icono = document.querySelector(`.header__icon-image`)
    let Opcion = document.querySelector(`.header__enlace`)
    let Boton = document.querySelector(`.header__switchbutton-label`)

    document.addEventListener(`click`, evento => {

        if (evento.target.matches(`.header__icon-image`)) {
            Opcion.classList.toggle(`active`)

            if (Opcion.classList.contains(`active`)) {
                if (Boton.classList.contains(`active`)) {
                    Icono.setAttribute(`src`, `./media/images/close_dark.png`)
                } else {
                    Icono.setAttribute(`src`, `./media/images/close_light.png`)
                }
               
            } else {
                if (Boton.classList.contains(`active`)) {
                    Icono.setAttribute(`src`, `./media/images/menu_dark.png`)
                } else {
                    Icono.setAttribute(`src`, `./media/images/menu_light.png`)
                }
            }
        }

        if (evento.target.matches(`.header__enlace-a`)) {
            Opcion.classList.remove(`active`)
            if (Boton.classList.contains(`active`)) {
                Icono.setAttribute(`src`, `./media/images/menu_dark.png`)
            } else {
                Icono.setAttribute(`src`, `./media/images/menu_light.png`)
            }
        }
    })
}