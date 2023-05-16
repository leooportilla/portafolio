const Buttoon = document.querySelector(`.header__switchbutton-label`)
const Body = document.querySelector(`body`)
const SubBody = document.querySelector(`.hability__skills-hover`)
const Summary = document.querySelector(`.headline__summary`)
const InputText = document.querySelector(`.project__profile-text`)
let Process, Description

function setImage(Modo, OneColor, TwoColor, ThreeColor) {
    Body.style.backgroundColor = `${OneColor}`
    SubBody.style.backgroundColor = `${OneColor}`
    InputText.style.backgroundColor = `${TwoColor}`
    InputText.style.color = `${OneColor}`
    Summary.style.color = `${ThreeColor}`

    //! Todos las etiquetas que contengan el atributo data-dark cambian el color con el id
    document.querySelectorAll(`[data-dark]`).forEach(elemento => elemento.setAttribute(`id`, `${Modo}`))

    //! Evalua si el panel de informacion del lenguaje esta abierto para poder cambiar al modo
    if (SubBody.classList.contains(`name`)) {
        Process = document.querySelector(`.name__process`)
        Description = document.querySelector(`.name__summary`)

        Description.style.color = `${ThreeColor}`
        Process.style.color = `${ThreeColor}`
    }                      
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
    document.addEventListener(`DOMContentLoaded`, () => {

        //! Forzamos a la web tener el modo oscuro por primera vez
        if (localStorage.getItem(`Theme`) === null) localStorage.setItem(`Theme`, `Dark`)

        //! Cuando abra la web, se adaptara al modo guardado en el Local Storage
        localStorage.getItem(`Theme`) === `Dark` ? MoodDark() : MoodLight()
    })
}