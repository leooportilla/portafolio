const buttonSwitch = document.querySelector(`.switch`)
const labelSwitch = document.querySelector(`.switch__label`)

export const buttonMode = () => {

    //! Agregamos un evento al Boton de cambiar el modo al momento que ocurrar un click quitamos o agregamos la clase Move
    buttonSwitch.addEventListener(`click`, () => {
        labelSwitch.classList.toggle(`move`)
    })
}