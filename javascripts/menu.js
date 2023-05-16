const Opcion = document.querySelector(`.header__enlace`)
const Icono = document.querySelector(`.header__icon`)
const Main = document.querySelector(`main`)
const Hamburguesa = `<svg data-dark class="header__icon-image" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 276.41 195"><title>Icono de Menu</title><rect x="69.54" width="206.87" height="28" rx="14" ry="14"/><rect y="83.5" width="276.41" height="28" rx="14" ry="14"/><rect x="125.78" y="167" width="150.63" height="28" rx="14" ry="14"/></svg>`
const Close = `<svg class="header__icon-image" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 217.95 217.95"><title>Close</title><path class="header__icon-image" d="M-773-1916.66a18.6,18.6,0,0,0-5.47-13.25l-10.62-10.62a18.76,18.76,0,0,0-26.5,0L-882-1874.15l-66.38-66.38a18.6,18.6,0,0,0-13.25-5.47,18.6,18.6,0,0,0-13.25,5.47l-10.62,10.63a18.6,18.6,0,0,0-5.47,13.25,18.6,18.6,0,0,0,5.47,13.25l66.38,66.38-66.38,66.38a18.76,18.76,0,0,0,0,26.5l10.63,10.62a18.6,18.6,0,0,0,13.25,5.47,18.6,18.6,0,0,0,13.25-5.47l66.38-66.38,66.38,66.38a18.6,18.6,0,0,0,13.25,5.47,18.6,18.6,0,0,0,13.25-5.47l10.62-10.62A18.6,18.6,0,0,0-773-1757.4a18.6,18.6,0,0,0-5.47-13.25L-844.88-1837l66.38-66.38A18.6,18.6,0,0,0-773-1916.66Z" transform="translate(990.98 1946.01)"/></svg>`

export function Menu() {

    document.addEventListener(`click`, evento => {

        if (evento.target.matches(`.header__icon-image`) || evento.target.matches(`.header__icon`) || evento.target.matches(`rect`)) {

            if (!Opcion.classList.contains(`open`)) {
                Opcion.classList.add(`open`)
                Icono.innerHTML = Close

                setTimeout(() => {
                    Main.style.height = `90vh`
                }, 500)

            } else {

                if (localStorage.getItem(`Theme`) === `Dark`) {
                    Opcion.classList.remove(`open`)
                    Icono.innerHTML = Hamburguesa
                    Main.style.height = ``
                    console.log(`Dark`)

                } else {
                    Opcion.classList.remove(`open`)
                    Icono.innerHTML = Hamburguesa
                    Main.style.height = ``
                    console.log(`Light`)
                }
            }
        }

        if (evento.target.matches(`.links`)) {            
            Opcion.classList.remove(`open`)
            Icono.innerHTML = Hamburguesa
            Main.style.height = ``
        }
    })


}