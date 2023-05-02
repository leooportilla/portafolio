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
const Followers = document.querySelector(`.followers__img`)
const Following = document.querySelector(`.following__img`)
const Repository = document.querySelector(`.repository__img`)
const Search = document.querySelector(`.submit__icon`)
const InputText = document.querySelector(`.project__profile-text`)
let SubIcon
let Process
let Description

function setImage(Modo, OneColor, TwoColor, ThreeColor) {
    Sun.setAttribute("src", `./media/images/sun_${Modo}.png`)
    Moon.setAttribute("src", `./media/images/moon_${Modo}.png`)
    Flecha.setAttribute("src", `./media/images/slide_${Modo}.png`)
    Instagram.setAttribute("src", `./media/images/instagram_${Modo}.png`)
    Linkedin.setAttribute("src", `./media/images/linkedin_${Modo}.png`)
    GitHud.setAttribute("src", `./media/images/githud_${Modo}.png`)
    Search.setAttribute("src", `./media/images/search_${Modo}.png`)
    Followers.setAttribute("src", `./media/images/followers_${Modo}.png`)
    Following.setAttribute("src", `./media/images/following_${Modo}.png`)
    Repository.setAttribute("src", `./media/images/repository_${Modo}.png`)

    Body.style.backgroundColor = `${OneColor}`
    SubBody.style.backgroundColor = `${OneColor}`
    InputText.style.backgroundColor = `${TwoColor}`
    InputText.style.color = `${OneColor}`
    Summary.style.color = `${ThreeColor}`

    //! Todos las etiquetas que contengan el atributo data-dark cambian el color con el id
    Dark.forEach(elemento => elemento.setAttribute(`id`, `${Modo}`))

    //! Todas los iconos de los enlaces a las redes sociales cambia de modo
    Arrow.forEach(elemento => elemento.setAttribute(`src`, `./media/images/arrow_${Modo}.png`))

    //! Evalua si el panel de informacion del lenguaje esta abierto para poder cambiar al modo
    if (SubBody.classList.contains(`name`)) {
        SubIcon = document.querySelector(`.name__icon`)
        Process = document.querySelector(`.name__process`)
        Description = document.querySelector(`.name__summary`)

        SubIcon.setAttribute(`src`, `./media/images/close_${Modo}.png`)
        Description.style.color = `${ThreeColor}`
        Process.style.color = `${ThreeColor}`
    }

    //! Cambia los iconos del menu segun el modo
    Enlace.classList.contains(`open`) ? Icono.setAttribute(`src`, `./media/images/close_${Modo}.png`) : Icono.setAttribute(`src`, `./media/images/menu_${Modo}.png`)
}

//* Cambiar iconos al modo light, colores de fondo y texto
function Light() {
    setImage(`dark`, `#ffffff`, `#232528`, `#232528`)
}

//* Cambio el modo a light con esta funcion para poder agregarle la clase active
function MoodLight() {
    Buttoon.classList.toggle(`active`)
    Light()
}

//* Cambiar iconos al modo dark, colores de fondo y texto
function MoodDark() {
    setImage(`light`, `#232528`, `#ffffff`, `#bebebe`)
}

export function Button() {

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