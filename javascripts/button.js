export function Button() {

    let Buttoon = document.querySelector(`.header__switchbutton-label`)
    let Sun = document.querySelector(`.header__switchbutton-sun`)
    let Moon = document.querySelector(`.header__switchbutton-moon`)
    let Enlace = document.querySelector(`.header__enlace`)
    let Icono = document.querySelector(`.header__icon-image`)
    let Flecha = document.querySelector(`.principal__slide-image`)
    let Dark = document.querySelectorAll(`[data-dark]`)
    let Body = document.querySelector(`body`)

    document.addEventListener(`click`, evento => {
        if (evento.target.matches(`.header__switchbutton-label`)) {
            Buttoon.classList.toggle(`active`)

            if (Buttoon.classList.contains(`active`)) {
                Sun.setAttribute("src", `./media/images/sun_dark.png`)
                Moon.setAttribute("src", `./media/images/moon_dark.png`)
                Flecha.setAttribute("src", `./media/images/slide_dark.png`)

                Body.style.backgroundColor = `#ffffff`
                Dark.forEach(elemento => elemento.setAttribute(`id`,`dark`))

                if (Enlace.classList.contains(`active`)) {
                    Icono.setAttribute(`src`, `./media/images/close_dark.png`)
                } else {
                    Icono.setAttribute(`src`, `./media/images/menu_dark.png`)
                }
            } else {
                Sun.setAttribute("src", `./media/images/sun_light.png`)
                Moon.setAttribute("src", `./media/images/moon_light.png`)
                Flecha.setAttribute("src", `./media/images/slide_light.png`)

                Body.style.backgroundColor = `#232528`
                Dark.forEach(elemento => elemento.setAttribute(`id`,``))

                if (Enlace.classList.contains(`active`)) {
                    Icono.setAttribute(`src`, `./media/images/close_light.png`)
                } else {
                    Icono.setAttribute(`src`, `./media/images/menu_light.png`)
                }
            }
        }
    })

}