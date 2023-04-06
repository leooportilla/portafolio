const Buttoon = document.querySelector(`.header__switchbutton-label`)
const Sun = document.querySelector(`.header__switchbutton-sun`)
const Moon = document.querySelector(`.header__switchbutton-moon`)
const Enlace = document.querySelector(`.header__enlace`)
const Icono = document.querySelector(`.header__icon-image`)
const Flecha = document.querySelector(`.principal__slide-image`)
const Dark = document.querySelectorAll(`[data-dark]`)
const Body = document.querySelector(`body`)
const SubBody = document.querySelector(`.hability__skills-hover`)
const Summary = document.querySelector(`.headline__summary`)
const Instagram = document.querySelector(`.instagram`)
const Linkedin = document.querySelector(`.linkedin`)
const GitHud = document.querySelector(`.githud`)
const Arrow = document.querySelectorAll(`.arrow`)
let SubIcon
let Process
let Description

export function Button() {

    //* Cambiar iconos al modo light, colores de fondo y texto
    function Light() {
        Sun.setAttribute("src", `./media/images/sun_dark.png`)
        Moon.setAttribute("src", `./media/images/moon_dark.png`)
        Flecha.setAttribute("src", `./media/images/slide_dark.png`)
        Instagram.setAttribute("src", `./media/images/instagram_dark.png`)
        Linkedin.setAttribute("src", `./media/images/linkedin_dark.png`)
        GitHud.setAttribute("src", `./media/images/githud_dark.png`)

        Body.style.backgroundColor = `#ffffff`
        SubBody.style.backgroundColor = `#ffffff`
        Summary.style.color = `#232528`

        //! Todos las etiquetas que contengan el atributo data-dark cambian el color con el id
        Dark.forEach(elemento => elemento.setAttribute(`id`, `dark`))

        //! Todas los iconos de los enlaces a las redes sociales cambia de modo
        Arrow.forEach(elemento => elemento.setAttribute(`src`, `./media/images/arrow_dark.png`))

        //! Evalua si el panel de informacion del lenguaje esta abierto para poder cambiar al modo 
        if (SubBody.classList.contains(`name`)) {
            SubIcon = document.querySelector(`.name__icon`)
            Process = document.querySelector(`.name__process`)
            Description = document.querySelector(`.name__summary`)

            SubIcon.setAttribute(`src`, "./media/images/close_dark.png")
            Description.style.color = `#232528`
            Process.style.color = `#232528`
        }

        //! Cambia los iconos del menu segun el modo
        Enlace.classList.contains(`open`) ? Icono.setAttribute(`src`, `./media/images/close_dark.png`) : Icono.setAttribute(`src`, `./media/images/menu_dark.png`)
    }

    //* Cambio el modo a light con esta funcion para poder agregarle la clase active
    function MoodLight() {
        Buttoon.classList.toggle(`active`)
        Light()
    }

    //* Cambiar iconos al modo dark, colores de fondo y texto
    function MoodDark() {
        Sun.setAttribute("src", `./media/images/sun_light.png`)
        Moon.setAttribute("src", `./media/images/moon_light.png`)
        Flecha.setAttribute("src", `./media/images/slide_light.png`)
        Instagram.setAttribute("src", `./media/images/instagram_light.png`)
        Linkedin.setAttribute("src", `./media/images/linkedin_light.png`)
        GitHud.setAttribute("src", `./media/images/githud_light.png`)

        Body.style.backgroundColor = `#232528`
        SubBody.style.backgroundColor = `#232528`
        Summary.style.color = `#bebebe`

        //! Todos las etiquetas que contengan el atributo data-dark cambian el color con el id
        Dark.forEach(elemento => elemento.setAttribute(`id`, ``))

        //! Evalua si el panel de informacion del lenguaje esta abierto para poder cambiar al modo 
        Arrow.forEach(elemento => elemento.setAttribute(`src`, `./media/images/arrow_light.png`))

        //! Evalua si el panel de informacion del lenguaje esta abierto para poder cambiar al modo 
        if (SubBody.classList.contains(`name`)) {
            SubIcon = document.querySelector(`.name__icon`)
            Process = document.querySelector(`.name__process`)
            Description = document.querySelector(`.name__summary`)

            SubIcon.setAttribute(`src`, "./media/images/close_light.png")
            Description.style.color = `#bebebe`
            Process.style.color = `#bebebe`
        }
        //! Cambia los iconos del menu segun el modo
        Enlace.classList.contains(`open`) ? Icono.setAttribute(`src`, `./media/images/close_light.png`) : Icono.setAttribute(`src`, `./media/images/menu_light.png`)
    }

    //* Al clickear el boton cambia de posicion con la clase active
    document.addEventListener(`click`, evento => {

        //! Evalua si el evento proviene del boton
        if (evento.target.matches(`.header__switchbutton-label`)) {
            Buttoon.classList.toggle(`active`)

            if (Buttoon.classList.contains(`active`)) {
                Light()

                //? LocalStorage para guardar el tema, asi el usuario cuando vuelva tiene el de su prefrerencia 
                localStorage.setItem(`Theme`, `Light`)
            } else {
                MoodDark()
                //? LocalStorage para guardar el tema, asi el usuario cuando vuelva tiene el de su prefrerencia
                localStorage.setItem(`Theme`, `Dark`)
            }
        }
    })

    //* Cuando es primera vez el ingreso a la web, por preferencia esta en modo dark (Mi disenio fue un tema oscuro)
    document.addEventListener(`DOMContentLoaded`, evento => {

        //! Forzamos a la web tener el modo oscuro por primera vez
        if (localStorage.getItem(`Theme`) === null) localStorage.setItem(`Theme`, `Dark`)

        //! Cuando abra la web, se adaptara al modo guardado en el Local Storage
        localStorage.getItem(`Theme`) === `Dark` ? MoodDark() : MoodLight()
    })
}