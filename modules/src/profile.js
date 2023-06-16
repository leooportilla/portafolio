//! Declaracion de varibale para las funciones de la carga del perfil y las busqueda de los perfiles
const text = document.querySelector(`.project__profile-text`)
const name = document.querySelector(`.project__profile-name`)
const error = document.querySelector(`.project__profile-error`)
const followers = document.querySelector(`.followers`)
const following = document.querySelector(`.following`)
const imageUser = document.querySelector(`.project__profile-img`)
const leftButton = document.querySelector(`.left`)
const eventButton = document.querySelector(`.submit`)
const rightButton = document.querySelectorAll(`.right`)
const linksGitHud = document.querySelector(`.project__profile-link`)
const respository = document.querySelector(`.repository`)
const description = document.querySelector(`.project__profile-description`)
const containerCards = document.querySelector(`.project__container-cards`)

const data = [`1`, `2`, `3`, `4`, `5`, `6`]

//! Carga de los perfiles, por defecto al carga la pagina tendra los datos de Leonardo Portilla
export const profile = async (user = `leooportilla`) => {

    try {

        //! Solicitud de datos
        const answer = await fetch(`https://api.github.com/users/${user}`)
        const data = await answer.json()

        //! Si la peticion da error 404 mandamos un mensaje
        if (answer.status == 404) throw new Error(`Lo siento, pero el usuario que ha ingresado no está registrado en Git Hud`)

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
        name.innerHTML = `No registrado`

        //! El enlace del Git Hud esta ubicado luego del nombre
        linksGitHud.style.paddingLeft = `calc(${name.getBoundingClientRect().width}px + 1rem)`
        description.innerHTML = error.message
        respository.innerHTML = `0`
        followers.innerHTML = `0`
        following.innerHTML = `0`
    }
}

//! Carga de los perfiles, por defecto al carga la pagina tendra los datos de Leonardo Portilla
export const project = async (user = `leooportilla`) => {

    try {

        //! Solicitud de datos
        const answer = await fetch(`https://api.github.com/users/${user}/repos`)
        const data = await answer.json()

        //! Si la peticion da error 404 mandamos un mensaje
        if (answer.status == 404) throw new Error(`Lo siento, pero el usuario que ha ingresado no está registrado en Git Hud`)

        //! Si la peticion es correcta mandamos la informacion a la pagina
        if (answer.status == 200) {

            //! InnetHTML para cuando vuelva a cargar un perfil vacie los projectos viejos
            containerCards.innerHTML = ``

            //! Por cada elemento del array agregar una cards al container 
            data.forEach(respository => {
                containerCards.insertAdjacentHTML(`afterbegin`, `<div class="card" id="${respository.id}">
                                                            <div class="card__active"></div>
                                                            <img class="card__image" src="./media/images/project_portafolio.png" alt="">
                                                            <h5 class="card__title">Titulo</h5>
                                                        </div>`)

                //? Aun debo resolver el disenio de las tarjeta, con ellos lleva algunas condiciones por ende trabajo de programacion
            });

            //! Busca en el documento CSS cuanto debe medir las tarjetas
            let widthCard = parseInt(window.getComputedStyle(document.querySelector('.card')).content.split(`"`)[1].split(` `)[0])

            //! Busca en el documento CSS cuanto debe medir el margen izquierdo de las tarjetas
            let marginCard = parseInt(window.getComputedStyle(document.querySelector('.card')).content.split(`"`)[1].split(` `)[1])

            //! Calculo cuanto debe medir todo el contenedor de las tarjetas
            let widthTotal = data.length * (widthCard + marginCard)
            containerCards.style.width = `${widthTotal}vw`

            //! Una funcion para mover el slide hacia la derecha
            const moveRight = (evento) => {

                //! Condicion si la tarjeta se encuentra visible, si lo esta solamente agregamos la clase, eliminamos la clase de la anterior tarjeta y tambien detenemos el observador
                if (evento[0].isIntersecting) {
                    evento[0].target.classList.add(`card-active`)
                    cards[counter - 1].classList.remove(`card-active`)
                    observerRight.disconnect()

                    //! Condicion si la tarjeta se encuentra visible, si no lo esta debemos correr el slide segun el tamanio y el margen de las tarjeta, todo esto sumando el translate que ya lleva para que se continuo
                } else {
                    containerCards.style.transform = `translateX(${translate -= widthCard + marginCard}vw)`
                    evento[0].target.classList.add(`card-active`)
                    cards[counter - 1].classList.remove(`card-active`)
                    observerRight.disconnect()
                }
            }

            //! Una funcion para mover el slide hacia la izquierda, mas de lo mismo que la funcion anterior solamente que esta se suma el translate y trabajamos con la tarjeta anterior, no la que sigue 
            const moveLeft = (evento) => {
                if (evento[0].isIntersecting) {
                    evento[0].target.classList.add(`card-active`)
                    cards[counter + 1].classList.remove(`card-active`)
                    observerLeft.disconnect()
                } else {
                    containerCards.style.transform = `translateX(${translate += widthCard + marginCard}vw)`
                    evento[0].target.classList.add(`card-active`)
                    cards[counter + 1].classList.remove(`card-active`)
                    observerLeft.disconnect()
                }
            }

            //! Opciones necesarias para los observadores
            const options = {
                root: null,
                rootMargin: `0px`,
                threshold: 1,
            }

            //! Cada uno de los observadores, porque realizo dos? Cada uno evalua cada lado
            const observerRight = new IntersectionObserver(moveRight, options)
            const observerLeft = new IntersectionObserver(moveLeft, options)

            //! Luego que cada tarjeta sea agregada estas seran variables necesarias para el funcionamiento del slide
            let cards = containerCards.querySelectorAll(`.card`)
            let counter = 0
            let translate = -marginCard

            //! Activamos la primera tarjeta con la clase
            cards[0].classList.add(`card-active`)
            containerCards.style.transform = `translateX(${translate}vw)`

            //! Pendiente al evento de la flecha derecha
            rightButton[0].addEventListener(`click`, () => {

                //! Condicion para que el movimiento del slide no sea mayor que el arreglo de las tarjetas
                if (counter < (cards.length - 1)) {
                    //! Sumamos el contador para que el metodo del observador trabaje con el siguiente hermano de la tarjeta
                    counter++
                    observerRight.observe(cards[counter])

                    //! Condicion donde si se cumple agregamos la clase a las flecha para dar la sensacion que al clickear volver al comienzo
                    if (counter >= (cards.length - 1)) {

                        //! Cada fleda de la derecha agregamos la clase 
                        rightButton.forEach(right => right.classList.add(`arrow-active`))

                        //! Si se llega hacer click en la segunda flecha, restablecemos todo como al inicio (contador, translate, clases)
                        rightButton[1].addEventListener(`click`, () => {
                            counter = 0
                            translate = -marginCard
                            containerCards.style.transform = `translateX(-${marginCard}vw)`
                            containerCards.firstChild.classList.add(`card-active`)
                            containerCards.lastChild.classList.remove(`card-active`)

                            rightButton.forEach(right => right.classList.remove(`arrow-active`))
                        })
                    }

                } else {
                    //! Si se llega hacer click en la primera flecha, restablecemos todo como al inicio (contador, translate, clases)
                    counter = 0
                    translate = -marginCard
                    containerCards.style.transform = `translateX(-${marginCard}vw)`
                    containerCards.firstChild.classList.add(`card-active`)
                    containerCards.lastChild.classList.remove(`card-active`)

                    rightButton.forEach(right => right.classList.remove(`arrow-active`))
                }
            })

            //!  //! Pendiente al evento de la flecha izquierda, para mover el slide hacia ese lado
            leftButton.addEventListener(`click`, () => {

                //! Condicion para que tenga un limite al comienzo de las tarjetas
                if (counter > 0) {
                    //! Aqui en vez de sumar, tenemos que restar el contador para que el metodo del observador trabaje con el hermano anterior
                    counter--
                    observerLeft.observe(cards[counter])

                    //! Si en dado caso el usuario llega al final y luego se devulve al hermano anterior, hacemos que las flechas de las izquierda se elimen las clases
                    if (rightButton[0].classList.contains(`arrow-active`)) rightButton.forEach(right => right.classList.remove(`arrow-active`))
                }
            })

        }

        //! Si capturamos algun error, toda la informacion la mandamos por defecto
    } catch (error) {
        console.warn(error)
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


export const procesando = () => {

    //! InnetHTML para cuando vuelva a cargar un perfil vacie los projectos viejos
    containerCards.innerHTML = ``

    //! Por cada elemento del array agregar una cards al container 
    data.forEach(respository => {
        containerCards.insertAdjacentHTML(`afterbegin`, `<div class="card" id="${respository.id}">
                                                            <div class="card__active"></div>
                                                            <img class="card__image" src="./media/images/project_portafo.png" alt="">
                                                            <h5 class="card__title">Titulo</h5>
                                                        </div>`)

        //? Aun debo resolver el disenio de las tarjeta, con ellos lleva algunas condiciones por ende trabajo de programacion
    });

    //! Busca en el documento CSS cuanto debe medir las tarjetas
    let widthCard = parseInt(window.getComputedStyle(document.querySelector('.card')).minWidth.split(`%`)[0])
    //! Busca en el documento CSS cuanto debe medir el margen izquierdo de las tarjetas
    let marginCard = parseInt(window.getComputedStyle(document.querySelector('.card')).content.split(`"`)[1])

    //! Calculo cuanto debe medir todo el contenedor de las tarjetas
    let widthTotal = (data.length * widthCard) + (data.length * marginCard)
    containerCards.style.width = `${widthTotal}%`

    //! Una funcion para mover el slide hacia la derecha
    const moveRight = (evento) => {

        //! Condicion si la tarjeta se encuentra visible, si lo esta solamente agregamos la clase, eliminamos la clase de la anterior tarjeta y tambien detenemos el observador
        if (evento[0].isIntersecting) {
            evento[0].target.classList.add(`card-active`)
            cards[counter - 1].classList.remove(`card-active`)
            observerRight.disconnect()

            //! Condicion si la tarjeta se encuentra visible, si no lo esta debemos correr el slide segun el tamanio y el margen de las tarjeta, todo esto sumando el translate que ya lleva para que se continuo
        } else {
            containerCards.style.transform = `translateX(${translate -= widthCard + marginCard}%)`
            evento[0].target.classList.add(`card-active`)
            cards[counter - 1].classList.remove(`card-active`)
            observerRight.disconnect()
        }
    }

    //! Una funcion para mover el slide hacia la izquierda, mas de lo mismo que la funcion anterior solamente que esta se suma el translate y trabajamos con la tarjeta anterior, no la que sigue 
    const moveLeft = (evento) => {
        if (evento[0].isIntersecting) {
            evento[0].target.classList.add(`card-active`)
            cards[counter + 1].classList.remove(`card-active`)
            observerLeft.disconnect()
        } else {
            containerCards.style.transform = `translateX(${translate += widthCard + marginCard}%)`
            evento[0].target.classList.add(`card-active`)
            cards[counter + 1].classList.remove(`card-active`)
            observerLeft.disconnect()
        }
    }

    //! Opciones necesarias para los observadores
    const options = {
        root: null,
        rootMargin: `0px`,
        threshold: 1.0,
    }

    //! Cada uno de los observadores, porque realizo dos? Cada uno evalua cada lado
    const observerRight = new IntersectionObserver(moveRight, options)
    const observerLeft = new IntersectionObserver(moveLeft, options)

    //! Luego que cada tarjeta sea agregada estas seran variables necesarias para el funcionamiento del slide
    let cards = containerCards.querySelectorAll(`.card`)
    let counter = 0
    let translate = 0

    //! Activamos la primera tarjeta con la clase
    cards[0].classList.add(`card-active`)

    //! Pendiente al evento de la flecha derecha
    rightButton[0].addEventListener(`click`, () => {

        //! Condicion para que el movimiento del slide no sea mayor que el arreglo de las tarjetas
        if (counter < (cards.length - 1)) {
            //! Sumamos el contador para que el metodo del observador trabaje con el siguiente hermano de la tarjeta
            counter++
            observerRight.observe(cards[counter])

            //! Condicion donde si se cumple agregamos la clase a las flecha para dar la sensacion que al clickear volver al comienzo
            if (counter >= (cards.length - 1)) {

                //! Cada fleda de la derecha agregamos la clase 
                rightButton.forEach(right => {
                    right.classList.add(`arrow-active`)
                })

                //! Si se llega hacer click en la segunda flecha, restablecemos todo como al inicio (contador, translate, clases)
                rightButton[1].addEventListener(`click`, () => {
                    counter = 0
                    translate = 0
                    containerCards.style.transform = `translateX(0%)`
                    containerCards.firstChild.classList.add(`card-active`)
                    containerCards.lastChild.classList.remove(`card-active`)

                    rightButton.forEach(right => {
                        right.classList.remove(`arrow-active`)
                    })
                })
            }

        } else {
            //! Si se llega hacer click en la primera flecha, restablecemos todo como al inicio (contador, translate, clases)
            counter = 0
            translate = 0
            containerCards.style.transform = `translateX(0%)`
            containerCards.firstChild.classList.add(`card-active`)
            containerCards.lastChild.classList.remove(`card-active`)

            rightButton.forEach(right => {
                right.classList.remove(`arrow-active`)
            })
        }
    })

    //!  //! Pendiente al evento de la flecha izquierda, para mover el slide hacia ese lado
    leftButton.addEventListener(`click`, () => {

        //! Condicion para que tenga un limite al comienzo de las tarjetas
        if (counter > 0) {
            //! Aqui en vez de sumar, tenemos que restar el contador para que el metodo del observador trabaje con el hermano anterior
            counter--
            observerLeft.observe(cards[counter])

            //! Si en dado caso el usuario llega al final y luego se devulve al hermano anterior, hacemos que las flechas de las izquierda se elimen las clases
            if (rightButton[0].classList.contains(`arrow-active`)) {

                rightButton.forEach(right => {
                    right.classList.remove(`arrow-active`)
                })
            }
        }
    })
}