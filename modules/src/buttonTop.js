//! Declaracion de variable para el boton de subir al inicio
const sectionY = document.querySelector(`.principal__container`)
const buttonY = document.querySelector(`.button`)
const headerY = document.querySelector(`.header`)

//! Estaremos al pendiente al momento que el scroll pase una seccion de la pagina para que el boton pueda aparecer
export const buttonTop = () => {

    //! Evento del scroll para que el navegador este pendiente
    document.addEventListener(`scroll`, evento => {

        //! Condicion si llega a pasar la seccion agregamos la clase al boton
        if (window.scrollY > sectionY.getBoundingClientRect().top + window.scrollY) buttonY.classList.add(`button-active`)
        
        //! Condicion por si llega a subir de nuevo el usuario al inicio, aqui quitamos la clase al boton
        if (window.scrollY <= headerY.getBoundingClientRect().top + window.scrollY) buttonY.classList.remove(`button-active`)
    
    })

    //! Evento click al boton para que pueda mandar al incio al usuario
    buttonY.addEventListener(`click`, evento => window.scrollTo({behavior: `smooth`, top: 0}))
} 



