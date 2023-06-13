import { profile, project } from "./profile"

// TODO: Declaracion de variable para la funcion de cerrar el input
const errores       = document.querySelector(`.project__profile-error`)
const searchProfile = document.querySelector(`.project__profile-text`)


//! Cerrar el input de la busqueda del perfil
export const closeProfile = () => {

    searchProfile.addEventListener(`keyup`, evento => {

        //? Validamos la entrada del usuario
        let Pattern = new RegExp(searchProfile.pattern)

        //* Si presiona enter, evaluamos si el valor es valido con el patron buscamos el perfil, si no mostramos un mensaje de error
        if (evento.key === `Enter`) {

            if (Pattern.test(searchProfile.value)) {

                //? Escondemos todo
                searchProfile.classList.remove(`inputText`)
                searchProfile.style.width = `0`
                searchProfile.style.padding = `0`
                
                errores.style.transform = `translateY(0)`
                errores.style.width = `0`
                errores.style.padding = `0`
                errores.innerHTML = ``
                
                //? Buscamo el perfil con la funcion de la API
                profile(searchProfile.value)
                project(searchProfile.value)
                
                searchProfile.value = ``
            } else {
                errores.innerHTML = `Usuario es incorrecto`
                errores.style.transform = `translateY(-1.5rem)`
            }
        }

        //* Si presiona escape, cerramos el input sin buscar nada
        if (evento.key === `Escape`) {

            //? Escondemos todo
            searchProfile.classList.remove(`inputText`)
            searchProfile.style.width = `0`
            searchProfile.style.padding = `0`
            searchProfile.value = ``

            errores.style.transform = `translateY(0)`
            errores.style.width = `0`
            errores.style.padding = `0`
            errores.innerHTML = ``
        }
    })
}