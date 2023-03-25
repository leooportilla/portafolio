let Opcion = document.querySelector(`.header__enlace`)
let Icono  = document.querySelector(`.header__icon-image`)
let Boton  = document.querySelector(`.header__switchbutton-label`)

export function Menu() {

    document.addEventListener(`click`, evento => {

        if (evento.target.matches(`.header__icon-image`)) {
            Opcion.classList.toggle(`active`)

            if (Opcion.classList.contains(`active`)) {
                Boton.classList.contains(`active`) ? Icono.setAttribute(`src`, `./media/images/close_dark.png`) : Icono.setAttribute(`src`, `./media/images/close_light.png`)
               
            } else {
                Boton.classList.contains(`active`) ? Icono.setAttribute(`src`, `./media/images/menu_dark.png`) : Icono.setAttribute(`src`, `./media/images/menu_light.png`)
            }
        }

        if (evento.target.matches(`.header__enlace-a`)) {
            Opcion.classList.remove(`active`)
            Boton.classList.contains(`active`) ? Icono.setAttribute(`src`, `./media/images/menu_dark.png`) : Icono.setAttribute(`src`, `./media/images/menu_light.png`)
        }
    })
}