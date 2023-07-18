const buttonSwitch = document.querySelector(`.switch`)
const labelSwitch = document.querySelector(`.switch__label`)
const documentHtml = document.querySelector(`html`)

export const buttonMode = () => {

    //! Agregamos un evento al Boton de cambiar el modo al momento que ocurrar un click quitamos o agregamos la clase Move
    buttonSwitch.addEventListener(`click`, () => {
        labelSwitch.classList.toggle(`move`)
        documentHtml.classList.toggle(`dark`)
    })
}