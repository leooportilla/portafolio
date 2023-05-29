// TODOS: Declaracion de variable para funcion menu
const icono            = document.querySelector(`.header__icon`)
const opciones         = document.querySelector(`.header__enlace`)
const linksMenu        = document.querySelectorAll(`.links`)
const iconoClose       = `<svg class="header__icon-image" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 217.95 217.95"><title>Close</title><path class="header__icon-image" d="M-773-1916.66a18.6,18.6,0,0,0-5.47-13.25l-10.62-10.62a18.76,18.76,0,0,0-26.5,0L-882-1874.15l-66.38-66.38a18.6,18.6,0,0,0-13.25-5.47,18.6,18.6,0,0,0-13.25,5.47l-10.62,10.63a18.6,18.6,0,0,0-5.47,13.25,18.6,18.6,0,0,0,5.47,13.25l66.38,66.38-66.38,66.38a18.76,18.76,0,0,0,0,26.5l10.63,10.62a18.6,18.6,0,0,0,13.25,5.47,18.6,18.6,0,0,0,13.25-5.47l66.38-66.38,66.38,66.38a18.6,18.6,0,0,0,13.25,5.47,18.6,18.6,0,0,0,13.25-5.47l10.62-10.62A18.6,18.6,0,0,0-773-1757.4a18.6,18.6,0,0,0-5.47-13.25L-844.88-1837l66.38-66.38A18.6,18.6,0,0,0-773-1916.66Z" transform="translate(990.98 1946.01)"/></svg>`
const mainDocument     = document.querySelector(`main`)
const iconoHamburguesa = `<svg data-dark class="header__icon-image" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 276.41 195"><title>Icono de Menu</title><rect x="69.54" width="206.87" height="28" rx="14" ry="14"/><rect y="83.5" width="276.41" height="28" rx="14" ry="14"/><rect x="125.78" y="167" width="150.63" height="28" rx="14" ry="14"/></svg>`

//! Abrir y cerrar el menu en modo mobile
export const menu = () => {

    //* Evento al preciosar el icono del menu
    icono.addEventListener(`click`, evento => {

        //? Si el menu esta cerrado, agregarle la clase Open asi poder desplegarlo
        if (!opciones.classList.contains(`open`)) {
            opciones.classList.add(`open`)
            icono.innerHTML = iconoClose

            // El usuario no podrar scrolear al momento que se abra el menu despue de 0.5s al preciosar el icono del menu
            setTimeout(() => {
                mainDocument.style.height = `90vh`
            }, 500)

        //? Si el menu esta abierto le quitamos la clase 
        } else {
            opciones.classList.remove(`open`)
            icono.innerHTML = iconoHamburguesa
            mainDocument.style.height = ``
        }
    })
    
    //* Evento si al preciosar en cualqueir links se cierra el menu
    linksMenu.forEach( links => {
        links.addEventListener(`click`, () => {           
            opciones.classList.remove(`open`)
            icono.innerHTML = iconoHamburguesa
            mainDocument.style.height = ``
        })
    })
}