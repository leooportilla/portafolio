const Opcion = document.querySelector(`.header__enlace`)
const Icono = document.querySelector(`.header__icon-image`)
const Boton = document.querySelector(`.header__switchbutton-label`)
const Main = document.querySelector(`main`)
const Redes = document.querySelector(`.headline`)

export function Menu() {

    //* Cuando se de un click al icono de hamburguesa
    document.addEventListener(`click`, evento => {

        //! Evalua si el click proviene del icono, si lo es le agrego la clase .active para abrir el menu
        if (evento.target.matches(`.header__icon-image`)) {
            Opcion.classList.toggle(`open`)

            //! If para poder cambiar los iconos en torno al modo oscuro
            if (Opcion.classList.contains(`open`)) {
                Boton.classList.contains(`active`) ? Icono.setAttribute(`src`, `./media/images/close_dark.png`) : Icono.setAttribute(`src`, `./media/images/close_light.png`)
                Main.style.height = `90vh` 

            } else {
                Boton.classList.contains(`active`) ? Icono.setAttribute(`src`, `./media/images/menu_dark.png`) : Icono.setAttribute(`src`, `./media/images/menu_light.png`)
                Main.style.height = ``
            }
        }

        //! Si se selecciona una opcion, cerrar el menu inmediato
        if (evento.target.matches(`.links`)) {
            Main.style.height = ``
            Opcion.classList.remove(`open`)
            Boton.classList.contains(`open`) ? Icono.setAttribute(`src`, `./media/images/menu_dark.png`) : Icono.setAttribute(`src`, `./media/images/menu_light.png`)
        }
    })
}