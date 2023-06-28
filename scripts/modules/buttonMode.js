const buttonSwitch = document.querySelector(`.switch__button`)
const labelSwitch = document.querySelector(`.switch__button-label`)

export const buttonMode = () => {

    buttonSwitch.addEventListener(`click`, () => {
        labelSwitch.classList.toggle(`move`)
    })
}