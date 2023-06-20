import { project } from "./project"


//! Declaracion de varibale para las funciones de la carga del perfil y las busqueda de los perfiles
const text = document.querySelector(`.project__profile-text`)
const name = document.querySelector(`.project__profile-name`)
const error = document.querySelector(`.project__profile-error`)
const followers = document.querySelector(`.followers`)
const following = document.querySelector(`.following`)
const imageUser = document.querySelector(`.project__profile-img`)
const eventButton = document.querySelector(`.submit`)
const linksGitHud = document.querySelector(`.project__profile-link`)
const respository = document.querySelector(`.repository`)
const description = document.querySelector(`.project__profile-description`)

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
            imageUser.setAttribute(`src`, `${data.avatar_url}`)

            //! Cuando los usuarios no tengan su nombre configurado colocamos el login
            data.name == null ? name.innerHTML = data.login : name.innerHTML = data.name

            //! Cuando los usuarios no tengan su nombre configurado colocamos una descripcion por defecto
            data.bio == null ? description.innerHTML = `En tu cuenta de Git Hud no se encuentra una descripción detallada acerca de ti, te recomendaría que incluyeras una descripción de tus habilidades, experienciaros profesionales, esto puede ayudarte a llamar la atención de reclutadores` : description.innerHTML = data.bio
            respository.innerHTML = data.public_repos
            followers.innerHTML = data.followers
            following.innerHTML = data.following
            linksGitHud.setAttribute(`href`, `${data.html_url}`)

            //! El enlace del Git Hud esta ubicado luego del nombre
            linksGitHud.style.paddingLeft = `calc(${name.getBoundingClientRect().width}px + 1rem)`
        }

        //! Si capturamos algun error, toda la informacion la mandamos por defecto
    } catch (error) {
        imageUser.setAttribute(`src`, `./media/images/users.png`)

        if (error.message === `404`) {
            name.innerHTML = `No registrado`
            description.innerHTML = `Lamentablemente, el usuario que intentó realizar la búsqueda en el servidor de Git Hud no se encuentra registrado. Esto puede deberse a varios motivos, como un error al ingresar el nombre de usuario o la falta de una cuenta válida. Por favor, verifica que estás utilizando el nombre de usuario correcto y que tienes una cuenta registrada en Git Hud antes de intentar realizar una nueva búsqueda`
        }

        if (error.message === `403`) {
            name.innerHTML = `Limite de Acceso`
            description.innerHTML = `Lo siento mucho, pero en este momento el acceso a la información que estás buscando ha sido limitado. Por favor, inténtalo de nuevo más tarde asi puedes acceder a la información que necesitas`
        }

        //! El enlace del Git Hud esta ubicado luego del nombre
        linksGitHud.style.paddingLeft = `calc(${name.getBoundingClientRect().width}px + 1rem)`
        respository.innerHTML = `0`
        followers.innerHTML = `0`
        following.innerHTML = `0`
    }
}

//! Busqueda del perfil deseado del usuario
export const search = () => {

    eventButton.addEventListener(`click`, () => {

        //! Validamos la entrada con el patron del input
        let pattern = new RegExp(text.pattern)

        //! Al darle click aparece el input con el focos en el
        if (!text.classList.contains(`inputText`)) {
            text.style.padding = `0 1rem`
            error.style.padding = `0 1rem`
            text.classList.toggle(`inputText`)
            error.style.width = `calc(${name.getBoundingClientRect().width}px)`
            text.style.width = `calc(${name.getBoundingClientRect().width}px)`
            text.focus()

            //! Al darle click nuevamente busca con la api de Git Hud lo que esta dentro del input
        } else {

            //! Validamos si valor del input es corecto con el patron
            if (pattern.test(text.value) || text.value == ``) {

                //! Si es valido escondemos el input y llamamos la funcion de buscar el perfil
                error.style.transform = `translateY(0)`
                text.classList.remove(`inputText`)
                text.style.width = `0`
                text.style.padding = `0`
                error.style.width = `0`
                error.style.padding = `0`
                error.innerHTML = ``

                profile(text.value)
                project(text.value)

                //? Para que el input cuando se vuelva abrir no tenga valor, lo dejamos vacio al cerrar
                text.value = ``

                //! Si el valor es incorrecto le mostramos un mensaje al usuario
            } else {
                error.innerHTML = `Usuario es incorrecto`
                error.style.transform = `translateY(-1.5rem)`
            }
        }

    })
}