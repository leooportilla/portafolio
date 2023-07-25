const userName        = document.querySelector(`.container__user-information-name`)
const userImage       = document.querySelector(`.container__image`)
const userGitHud      = document.querySelector(`.container__user-information-link`)
const buttonSearch    = document.querySelector(`.container__user-label`)
const inputProfile    = document.querySelector(`.container__user-input`)
const errorProfile    = document.querySelector(`.container__user-error`)
const userFollowing   = document.querySelector(`.following`)
const userFollowers   = document.querySelector(`.followers`)
const userRepository  = document.querySelector(`.repository`)
const userDescription = document.querySelector(`.container__description-paragraph`)

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
        userImage.setAttribute(`src`, `./media/images/users.png`)

        if (error.message === `404`) {
            userName.innerHTML = `No registrado`
            userDescription.innerHTML = `Lamentablemente, el usuario que intentó realizar la búsqueda en el servidor de Git Hud no se encuentra registrado. Esto puede deberse a varios motivos, como un error al ingresar el nombre de usuario o la falta de una cuenta válida. Por favor, verifica que estás utilizando el nombre de usuario correcto y que tienes una cuenta registrada en Git Hud antes de intentar realizar una nueva búsqueda`
        }

        if (error.message === `403`) {
            userImage.innerHTML = `Limite de Acceso`
            userDescription.innerHTML = `Lo siento mucho, pero en este momento el acceso a la información que estás buscando ha sido limitado. Por favor, inténtalo de nuevo más tarde asi puedes acceder a la información que necesitas`
        }

        userRepository.innerHTML = `Repositorio: 0`
        userFollowers.innerHTML = `Seguidores: 0`
        userFollowing.innerHTML = `Siguiendo: 0`
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
            }, 1000)

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
                project(text.value) 

            } else {
                errorProfile.classList.add(`active-error`)
            }
        }
    })
}