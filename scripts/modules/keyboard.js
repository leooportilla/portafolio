import { profile } from "./profile"
import { project } from "./project"

//! Declaracion de variable para la funcion de cerrar el input
const inputUser    = document.querySelector(`.user__input`)
const errorProfile = document.querySelector(`.user__error`)
const windowSkills = document.querySelector(`.skills__information`)

//! Cerrar el input de la busqueda del perfil
export const closeProfile = () => {

    inputUser.addEventListener(`keyup`, evento => {

        //! Validamos la entrada del usuario
        let pattern = new RegExp(inputUser.pattern)

        //! Si presiona enter, evaluamos si el valor es valido con el patron buscamos el perfil, si no mostramos un mensaje de error
        if (evento.key === `Enter`) {

            if (pattern.test(inputUser.value)) {

                //! Escondemos todo
                inputUser.classList.remove(`active-input`)
                errorProfile.classList.remove(`active-error`)

                setTimeout(()=> {
                    errorProfile.classList.remove(`active`)
                }, 300)
                
                //! Buscamo el perfil con la funcion de la API
                profile(inputUser.value)
                project(inputUser.value)

                inputUser.style.width = 0
                inputUser.value = ``
            } else {
                errorProfile.classList.add(`active-error`)
            }
        }   

        //! Si presiona escape, cerramos el input sin buscar nada
        if (evento.key === `Escape`) {

            //! Escondemos todo
            errorProfile.classList.remove(`active`)
            errorProfile.classList.remove(`active-error`)
            inputUser.classList.remove(`active-input`)
            inputUser.style.width = 0
            inputUser.value = ``
        }
    })
}

//! Cerrar la ventana de la informacion de las habilidades
export const closeSkills = () => {

    document.addEventListener(`keyup`, event => {

        if (document.activeElement === windowSkills) {

            if (event.key === `Escape`) {
                windowSkills.classList.remove(`active`)
            }
        }
    })
}
