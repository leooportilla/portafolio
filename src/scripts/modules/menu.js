//! Delcaracion de variable para la funcion Menu
const section      = document.querySelectorAll(`.nav__section`)
const mediaQuery   = window.matchMedia(`(max-width: 960px)`)
const buttonMenu   = document.querySelector(`.menu`)
const menuComplet  = document.querySelector(`.nav`)
const buttonClose  = document.querySelector(`.nav__close`)
const mainDocument = document.querySelector(`main`)

//! Funcion para el menu (Cerrarlo y abrirlo)
export const menu = () => {

    //! Quitamos la clase hover al primer enlace para que todos se vean iguales en el menu  
    if (mediaQuery.matches) {
        section[0].classList.remove(`hover`)
    }

    //! Todo partira desde que se abre el menu, hacer click en el boton se abrira el menu, colocando la clase y ademas bloqueamos que el usuario pueda seguir bajando con el menu abierto
    buttonMenu.addEventListener(`click`, () => {
        menuComplet.classList.add(`active-menu`)
        mainDocument.style.height = `100vh`

        //! Comprobamos si el menu esta abierto
        if (menuComplet.classList.contains(`active-menu`)) {

            //! Si hacemos click en la X se cerrara el menu y la persona podra seguir navegandi en la pagina
            buttonClose.addEventListener(`click`, () => {
                mainDocument.style.height = ``
                menuComplet.classList.remove(`active-menu`)
            })

            //! Si hacemos click en algunos de las secciones con el evento por defecto de los enlace ira automaticamente a la seccion que le dio click asi que quitamos el bloqueo y escondemos el menu
            section.forEach(section => {
                section.addEventListener(`click`, () => {
                    mainDocument.style.height = ``
                    menuComplet.classList.remove(`active-menu`)    
                })
            })
        }
    })
}