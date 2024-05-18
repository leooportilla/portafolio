const labelSwitch  = document.querySelector(`.switch__label`)
const buttonSwitch = document.querySelector(`.switch`)
const documentHtml = document.querySelector(`html`)

//! Cambiar el modo al hacer click en el boton
export const buttonMode = () => {

    //! Agregamos un evento al Boton de cambiar el modo al momento que ocurrar un click quitamos o agregamos la clase Move
    buttonSwitch.addEventListener(`click`, () => {

        //! Al hacer click condicionamos si la variable en local Storage que valor tiene
        if (localStorage.getItem(`Theme`) === `Light`) {

            //! Si esta modo Light debemos cambiarlo a dar y actualizar la variable
            labelSwitch.classList.remove(`move`)
            documentHtml.classList.add(`dark`)
            localStorage.setItem(`Theme`, `Dark`)

        } else {

            //! Aqui seria a la inversa (La variable solamente tendra dos valores en toda la ejecucion de la pagina DARK y LIGHT)
            labelSwitch.classList.add(`move`)
            documentHtml.classList.remove(`dark`)
            localStorage.setItem(`Theme`, `Light`)
        }
    })
}

//! Cambio del modo al cargar la pagina
export const save = () => {

    //! Si el usuario es nuevo, guardamos en el local storage el modo por defecto
    if (localStorage.getItem(`Theme`) === null) localStorage.setItem(`Theme`, `Light`)

    //! Si el usuario ya usado antes la pagina, dectetamos en que modo lo dejo anteriormente con la variable y hacemos los cambios pertinentes
    if (localStorage.getItem(`Theme`) === `Light`) {
        labelSwitch.classList.add(`move`)
        documentHtml.classList.remove(`dark`)
    } else {
        labelSwitch.classList.remove(`move`)
        documentHtml.classList.add(`dark`)
    }
}