//! Declaracion de variable para la funcion de validar el formulario
const form = document.querySelector(`.form`)
const inputName = document.querySelector(`.form__header-name`)
const inputEmail = document.querySelector(`.form__header-email`)
const inputMessange = document.querySelector(`.form__messange`)
const messangeError = document.querySelectorAll(`.error`)

//! Expresiones regulares
const expName = new RegExp(inputName.pattern)
const expEmail = new RegExp(inputEmail.pattern)

//! Funcion para validar el formulario, donde estaremos pendiente a cada cambio en el valor del input como tambien al envio
export const validationForm = () => {

    form.addEventListener(`submit`, evento => {

        //! Si algun input no cumple con la validacion el formulario no se enviara
        if (!(expName.test(inputName.value) && expEmail.test(inputEmail.value) && inputMessange.value.trim() !== ``)) {
            evento.preventDefault()
        }

        //! Evaluamos por si el usuario solamente rellena un input y envia el formulario
        //! Segun de cada input validamos la expresion regular
        if (!expName.test(inputName.value)) {
            messangeError[0].classList.add(`error-active`)
        } else {
            messangeError[0].classList.remove(`error-active`)
        }

        if (!expEmail.test(inputEmail.value)) {
            messangeError[1].classList.add(`error-active`)
        } else {
            messangeError[1].classList.remove(`error-active`)
        }

        if (inputMessange.value.trim() === ``) {
            messangeError[2].classList.add(`error-active`)
        } else {
            messangeError[2].classList.remove(`error-active`)
        }
    })

    //! Al escribir en el input evaluamos si esta dentro del patron
    inputName.addEventListener(`keyup`, () => {
        if (!expName.test(inputName.value)) {
            messangeError[0].classList.add(`error-active`)
        } else {
            messangeError[0].classList.remove(`error-active`)
        }
    })

    inputEmail.addEventListener(`keyup`, () => {
        if (!expEmail.test(inputEmail.value)) {
            messangeError[1].classList.add(`error-active`)
        } else {
            messangeError[1].classList.remove(`error-active`)
        }
    })

    inputMessange.addEventListener(`keyup`, () => {
        if (inputMessange.value.trim() === ``) {
            messangeError[2].classList.add(`error-active`)
        } else {
            messangeError[2].classList.remove(`error-active`)
        }
    })
}