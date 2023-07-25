//! Declaracion de variable para el boton de subir al inicio
const headerTop    = document.querySelector(`.header`)
const buttonHome   = document.querySelector(`.buttonhome`)
const sectionGuide = document.querySelector(`.home__container`)

//! Estaremos al pendiente al momento que el scroll pase una seccion de la pagina para que el boton pueda aparecer
export const buttonTop = () => {

    //! Evento del scroll para que el navegador este pendiente
    document.addEventListener(`scroll`, () =>   {

        //! Condicion si llega a pasar la  seccion agregamos la clase al boton
        if (window.scrollY > sectionGuide.getBoundingClientRect().top + window.scrollY) buttonHome.classList.add(`active-button`)
        
        //! Condicion por si llega a subir de nuevo el usuario al inicio, aqui quitamos la clase al boton
        if (window.scrollY <= headerTop.getBoundingClientRect().top + window.scrollY) buttonHome.classList.remove(`active-button`)
    
    })

    //! Evento click al boton para que pueda mandar al incio al usuario
    buttonHome.addEventListener(`click`, () => window.scrollTo({behavior: `smooth`, top: 0}))
} 



