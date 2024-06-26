import { project } from "./project";

const userName        = document.querySelector(`.user__information-name`)
const userImage       = document.querySelector(`.project__profile-image`)
const userGitHud      = document.querySelector(`.user__information-link`)
const buttonSearch    = document.querySelector(`.user__label`)
const inputProfile    = document.querySelector(`.user__input`)
const errorProfile    = document.querySelector(`.user__error`)
const userFollowing   = document.querySelector(`.following`)
const userStadistic   = document.querySelector(`.description__stadistic`)
const userFollowers   = document.querySelector(`.followers`)
const userRepository  = document.querySelector(`.repository`)
const userDescription = document.querySelector(`.description__paragraph`)

//! Carga de los perfiles, por defecto al carga la pagina tendra los datos de Leonardo Portilla
export const profile = async (user = `leooportilla`) => {

    try {

        //! Solicitud de datos
        const answer = await fetch(`https://api.github.com/users/${user}`)
        const data = await answer.json()

        //! Si la peticion da error 404 mandamos un mensaje
        if (answer.status == 404) throw new Error(404)

        if (answer.status == 403) throw new Error(403)

        //! Si la peticion es correcta mandamos la informacion a la pagina
        if (answer.status == 200) {
            userImage.setAttribute(`src`, `${data.avatar_url}`)

            //! Cuando los usuarios no tengan su nombre configurado colocamos el login
            data.name == null ? userName.innerHTML = data.login : userName.innerHTML = data.name

            //! Cuando los usuarios no tengan su nombre configurado colocamos una descripcion por defecto
            data.bio == null ? userDescription.innerHTML = `En tu cuenta de Git Hud no se encuentra una descripción detallada acerca de ti, te recomendaría que incluyeras una descripción de tus habilidades, experienciaros profesionales, esto puede ayudarte a llamar la atención de reclutadores` : userDescription.innerHTML = data.bio
            userRepository.innerHTML = `Repositorio: ${data.public_repos}`
            userFollowers.innerHTML = `Seguidores: ${data.followers}`
            userFollowing.innerHTML = `Siguiendo: ${data.following}`
            userGitHud.setAttribute(`href`, `${data.html_url}`)
            
        }

        //! Si capturamos algun error, toda la informacion la mandamos por defecto
    } catch (error) {
        userImage.setAttribute(`src`, `https://firebasestorage.googleapis.com/v0/b/mi-portafolioo.appspot.com/o/users.svg?alt=media&token=b00daf80-fd02-4d70-b250-df062ea0817a`)

        if (error.message === `404`) {
            userName.innerHTML = `No registrado`
            userDescription.innerHTML = `El usuario no pudo realizar la búsqueda en el servidor de Git Hud porque no está registrado. Esto puede ser debido a un error en el nombre de usuario o a la falta de una cuenta válida. Se recomienda verificar el nombre de usuario y la existencia de una cuenta en Git Hud.`
        }

        if (error.message === `403`) {
            userName.innerHTML = `Limite de Acceso`
            userDescription.innerHTML = `Lo siento mucho, pero en este momento el acceso a la información que estás buscando ha sido limitado. Por favor, inténtalo de nuevo más tarde asi puedes acceder a la información que necesitas`
        }

        userStadistic.style.display = `none`
    }
}

//! Busqueda del perfil deseado del usuario
export const search = () => {

    buttonSearch.addEventListener(`click`, () => {

        //! Validamos la entrada con el patron del input
        let pattern = new RegExp(inputProfile.pattern)

        if (!inputProfile.classList.contains(`active-input`)) {
            inputProfile.classList.add(`active-input`)
            inputProfile.style.width = `calc(${userName.getBoundingClientRect().width}px)`

            setTimeout(() => {
                errorProfile.classList.add(`active`)
            }, 250)

        } else {

            if (pattern.test(inputProfile.value)) {

                errorProfile.classList.remove(`active-error`)

                setTimeout(() => {
                    inputProfile.classList.remove(`active-input`)
                    inputProfile.style.width = 0
                    errorProfile.classList.remove(`active`)
                }, 500);


                //! Para que el input cuando se vuelva abrir no tenga valor, lo dejamos vacio al cerrar
                setTimeout(() => {
                    inputProfile.value = ``
                }, 1300)

                profile(inputProfile.value)
                project(inputProfile.value) 

            } else {
                errorProfile.classList.add(`active-error`)
            }
        }
    })
}