let Buttoon     = document.querySelector(`.header__switchbutton-label`)
let Sun         = document.querySelector(`.header__switchbutton-sun`)
let Moon        = document.querySelector(`.header__switchbutton-moon`)
let Enlace      = document.querySelector(`.header__enlace`)
let Icono       = document.querySelector(`.header__icon-image`)
let Flecha      = document.querySelector(`.principal__slide-image`)
let Dark        = document.querySelectorAll(`[data-dark]`)
let Body        = document.querySelector(`body`)
let SubBody     = document.querySelector(`.hability__skills-active`)
let Summary     = document.querySelector(`.principal__biography-title-summary`)
let Instagram   = document.querySelector(`.instagram`)
let Linkedin    = document.querySelector(`.linkedin`)
let GitHud      = document.querySelector(`.githud`)
let Arrow       = document.querySelector(`.title__container-link-arrow`)
let Description
let Process
let SubIcon

export function Button() {

    function Light() {
        Sun.setAttribute("src", `./media/images/sun_dark.png`)
        Moon.setAttribute("src", `./media/images/moon_dark.png`)
        Flecha.setAttribute("src", `./media/images/slide_dark.png`)
        Arrow.setAttribute("src", `./media/images/arrow_dark.png`)
        Instagram.setAttribute("src", `./media/images/instragram_dark.png`)
        Linkedin.setAttribute("src", `./media/images/linkedin_dark.png`)
        GitHud.setAttribute("src", `./media/images/githud_dark.png`)

        Body.style.backgroundColor = `#ffffff`
        SubBody.style.backgroundColor = `#ffffff`
        Summary.style.color = `#232528`
        Dark.forEach(elemento => elemento.setAttribute(`id`, `dark`))

        if (SubBody.classList.contains(`hability__skills-name`)) {
            SubIcon      = document.querySelector(`.hability__skills-name-icon`)
            Process      = document.querySelector(`.hability__skills-name-process`)
            Description  = document.querySelector(`.hability__skills-name-summary`)

            SubIcon.setAttribute(`src`, "./media/images/close_dark.png")
            Description.style.color = `#232528`
            Process.style.color = `#232528`
        }

        Enlace.classList.contains(`active`) ? Icono.setAttribute(`src`, `./media/images/close_dark.png`): Icono.setAttribute(`src`, `./media/images/menu_dark.png`)
    }

    function MoodLight() {
        Buttoon.classList.toggle(`active`)
        Light()
    }

    function MoodDark() {
        Sun.setAttribute("src", `./media/images/sun_light.png`)
        Moon.setAttribute("src", `./media/images/moon_light.png`)
        Flecha.setAttribute("src", `./media/images/slide_light.png`)
        Arrow.setAttribute("src", `./media/images/arrow_light.png`)
        Instagram.setAttribute("src", `./media/images/instragram_light.png`)
        Linkedin.setAttribute("src", `./media/images/linkedin_light.png`)
        GitHud.setAttribute("src", `./media/images/githud_light.png`)

        Body.style.backgroundColor = `#232528`
        SubBody.style.backgroundColor = `#232528`
        Summary.style.color = `#bebebe`
        Dark.forEach(elemento => elemento.setAttribute(`id`, ``))
        
        if (SubBody.classList.contains(`hability__skills-name`)) {
            SubIcon     = document.querySelector(`.hability__skills-name-icon`)
            Process      = document.querySelector(`.hability__skills-name-process`)
            Description = document.querySelector(`.hability__skills-name-summary`)
            
            SubIcon.setAttribute(`src`, "./media/images/close_light.png")
            Description.style.color = `#bebebe`
            Process.style.color = `#bebebe`
        }

        Enlace.classList.contains(`active`) ? Icono.setAttribute(`src`, `./media/images/menu_light.png`) : Icono.setAttribute(`src`, `./media/images/close_light.png`)
    }

    document.addEventListener(`click`, evento => {
        if (evento.target.matches(`.header__switchbutton-label`)) {
            Buttoon.classList.toggle(`active`)

            if (Buttoon.classList.contains(`active`)) {
                Light()
                localStorage.setItem(`Theme`, `Light`)
            } else {
                MoodDark()
                localStorage.setItem(`Theme`, `Dark`)
            }
        }
    })

    document.addEventListener(`DOMContentLoaded`, evento => {
        if (localStorage.getItem(`Theme`) === null) localStorage.setItem(`Theme`, `Dark`)
        localStorage.getItem(`Theme`) === `Dark` ? MoodDark() : MoodLight()
    })
}