export function Menu(Icono, Enlaces) {

    let Opcion = document.querySelector(`.header__enlace`)
    let Boton = document.querySelector(`.header__switchbutton-label`)

    document.addEventListener(`click`, evento => {

        if (evento.target.matches(Icono)) {
            Opcion.classList.toggle(`active`)

            if (Opcion.classList.contains(`active`)) {
                if (Boton.classList.contains(`active`)) {
                    document.querySelector(Icono).setAttribute(`src`, `./media/images/close_dark.png`)
                } else {
                    document.querySelector(Icono).setAttribute(`src`, `./media/images/close_light.png`)
                }
               
            } else {
                if (Boton.classList.contains(`active`)) {
                    document.querySelector(Icono).setAttribute(`src`, `./media/images/menu_dark.png`)
                } else {
                    document.querySelector(Icono).setAttribute(`src`, `./media/images/menu_light.png`)
                }
            }
        }

        if (evento.target.matches(Enlaces)) {
            Opcion.classList.remove(`active`)
            if (Boton.classList.contains(`active`)) {
                document.querySelector(Icono).setAttribute(`src`, `./media/images/menu_dark.png`)
            } else {
                document.querySelector(Icono).setAttribute(`src`, `./media/images/menu_light.png`)
            }
        }
    })
}