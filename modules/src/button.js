//! Declaracion de variables para funciones del Mood dark/light
const body      = document.querySelector(`body`)
const button    = document.querySelector(`.header__switchbutton-label`)
const subBody   = document.querySelector(`.hability__skills-hover`)
const inputText = document.querySelector(`.project__profile-text`)

//! Cambiar todas las etiquetas de color
const setImage = (Modo, OneColor, TwoColor) => {
    body.style.backgroundColor = `${OneColor}`
    subBody.style.backgroundColor = `${OneColor}`
    inputText.style.backgroundColor = `${TwoColor}`
    inputText.style.color = `${OneColor}`

    //! Todos las etiquetas que contengan el atributo data-dark cambian el color con el id
    Modo === `dark` ? document.querySelectorAll(`[data-dark]`).forEach(elemento => elemento.classList.toggle(`dark`)) : document.querySelectorAll(`[data-dark]`).forEach(elemento => elemento.classList.remove(`dark`))
}

//! Cambio al modo light, agregarle la clase active
const moodLight = () => {
    button.classList.toggle(`active`)
    setImage(`dark`, `#ffffff`, `#232528`)
}

//! Principal para el cambiar al modo nocturno
export const buttonActive = () => {

    // TODOS: Al clickear el boton cambia de posicion con la clase active
    button.addEventListener(`click`, () => {

        button.classList.toggle(`active`)

        if (button.classList.contains(`active`)) {
            setImage(`dark`, `#ffffff`, `#232528`)

            //? LocalStorage para guardar el tema, asi el usuario cuando vuelva tiene el de su prefrerencia 
            localStorage.setItem(`Theme`, `Light`)
        } else {
            setImage(`light`, `#232528`, `#ffffff`)
            //? LocalStorage para guardar el tema, asi el usuario cuando vuelva tiene el de su prefrerencia
            localStorage.setItem(`Theme`, `Dark`)
        }

    })
}

//! Cambio del modo al cargar la pagina
export const save = () => {
    
    //? Cuando es primera vez el ingreso a la web, por preferencia esta en modo dark (Mi disenio fue un tema oscuro)
    //! Forzamos a la web tener el modo oscuro por defecto
    if (localStorage.getItem(`Theme`) === null) localStorage.setItem(`Theme`, `Dark`)

    //! Cuando abra la web, se adaptara al modo guardado en el Local Storage
    localStorage.getItem(`Theme`) === `Dark` ? setImage(`light`, `#232528`, `#ffffff`) : moodLight()
}