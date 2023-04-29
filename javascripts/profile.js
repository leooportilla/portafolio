const Name = document.querySelector(`.information__name`)
const ImageUser = document.querySelector(`.project__profile-img`)
const Description = document.querySelector(`.information__description`)
const Following = document.querySelector(`.following`)
const Followers = document.querySelector(`.followers`)
const Respository = document.querySelector(`.repository`)
const Text = document.querySelector(`.information__text`)
const Link = document.querySelector(`.information__link`)
const Errores = document.querySelector(`.information__error`)

export async function Profile(User = `leooportilla`) {

    try {
        const Answer = await fetch(`https://api.github.com/users/${User}`)
        const Data = await Answer.json()

        if (Answer.status == 404) throw new Error(`El usuario ingresado no se encuentra registrado`)

        if (Answer.status == 200) {
            ImageUser.setAttribute(`src`, `${Data.avatar_url}`)
            Data.name == null ? Name.innerHTML = Data.login : Name.innerHTML = Data.name
            Data.bio == null ? Description.innerHTML = `En tu cuenta de Git Hud no se encuentra una descripción detallada acerca de ti, te recomendaría que incluyeras una descripción de tus habilidades, experienciaros profesionales, esto puede ayudarte a llamar la atención de reclutadores` : Description.innerHTML = Data.bio
            Respository.innerHTML = Data.public_repos
            Followers.innerHTML = Data.followers
            Following.innerHTML = Data.following
            Link.setAttribute(`href`, `${Data.html_url}`)
            Link.style.paddingLeft = `calc(${Name.getBoundingClientRect().width}px + 1rem)`
        }

    } catch (error) {
        ImageUser.setAttribute(`src`, `./media/images/users.png`)
        Name.innerHTML = `Usuario no registrado`
        Link.style.paddingLeft = `calc(${Name.getBoundingClientRect().width}px + 1rem)`
        Description.innerHTML = error.message
        Respository.innerHTML = `0`
        Followers.innerHTML = `0`
        Following.innerHTML = `0`
    }
}

export function Search() {

    document.addEventListener(`click`, evento => {

        if (evento.target.matches(`.information__submit`) || evento.target.matches(`.information__submit-icon`) || evento.target.matches(`.information__submit-title`)) {
            let Pattern = new RegExp(Text.pattern)

            if (!Text.classList.contains(`inputText`)) {
                Errores.style.width = `calc(${Link.getBoundingClientRect().width}px)`
                Errores.style.padding = `0 2rem`
                Text.style.width = `calc(${Link.getBoundingClientRect().width}px)`
                Text.style.padding = `0 2rem`
                Text.classList.toggle(`inputText`)
                Text.focus()

            } else {
                console.log(`fsd`)
                if (Pattern.test(Text.value) || Text.value == ``) {
                    Errores.style.transform = `translateY(0)`

                    setTimeout(() => {
                        Text.classList.remove(`inputText`)
                        Text.style.width = `0`
                        Text.style.padding = `0`
                        Errores.style.width = `0`
                        Errores.style.padding = `0`
                        Errores.innerHTML = ``
                    }, 500)

                    Profile(Text.value)
                    Text.value = ``

                } else {
                    Errores.innerHTML = `Usuario es incorrecto`
                    Errores.style.transform = `translateY(-1.5rem)`
                }
            }
        }

    })
}

export function SearchKey() {
    document.addEventListener(`keydown`, evento => {
        if (Text.classList.contains(`inputText`)) {
            let Pattern = new RegExp(Text.pattern)

            if (evento.key === `Enter`) {

                if (Pattern.test(Text.value)) {
                    Errores.style.transform = `translateY(0)`

                    setTimeout(() => {
                        Text.classList.remove(`inputText`)
                        Text.style.width = `0`
                        Text.style.padding = `0`
                        Errores.style.width = `0`
                        Errores.style.padding = `0`
                        Errores.innerHTML = ``
                    }, 500)

                    Profile(Text.value)
                    Text.value = ``

                } else {
                    Errores.innerHTML = `Usuario es incorrecto`
                    Errores.style.transform = `translateY(-1.5rem)`
                }
            }

            if (evento.key === `Escape`) {
                Text.value = ``
                Errores.style.transform = `translateY(0)`

                setTimeout(() => {
                    Text.classList.remove(`inputText`)
                    Text.style.width = `0`
                    Text.style.padding = `0`
                    Errores.style.width = `0`
                    Errores.style.padding = `0`
                    Errores.innerHTML = ``
                }, 800)
            }
        }
    })
}