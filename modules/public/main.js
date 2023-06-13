'use strict';

//! Al ingresar a la pagina saldra una pantalla de carga, luego la escondo quitandole la clase
const load = () => {
    addEventListener("load", () => {
     document.querySelector(`.container`).classList.toggle(`containeractive`);
    });
};

// TODOS: Declaracion de variable para funcion menu
const icono            = document.querySelector(`.header__icon`);
const opciones         = document.querySelector(`.header__enlace`);
const linksMenu        = document.querySelectorAll(`.links`);
const iconoClose       = `<svg class="header__icon-image" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 217.95 217.95"><title>Close</title><path class="header__icon-image" d="M-773-1916.66a18.6,18.6,0,0,0-5.47-13.25l-10.62-10.62a18.76,18.76,0,0,0-26.5,0L-882-1874.15l-66.38-66.38a18.6,18.6,0,0,0-13.25-5.47,18.6,18.6,0,0,0-13.25,5.47l-10.62,10.63a18.6,18.6,0,0,0-5.47,13.25,18.6,18.6,0,0,0,5.47,13.25l66.38,66.38-66.38,66.38a18.76,18.76,0,0,0,0,26.5l10.63,10.62a18.6,18.6,0,0,0,13.25,5.47,18.6,18.6,0,0,0,13.25-5.47l66.38-66.38,66.38,66.38a18.6,18.6,0,0,0,13.25,5.47,18.6,18.6,0,0,0,13.25-5.47l10.62-10.62A18.6,18.6,0,0,0-773-1757.4a18.6,18.6,0,0,0-5.47-13.25L-844.88-1837l66.38-66.38A18.6,18.6,0,0,0-773-1916.66Z" transform="translate(990.98 1946.01)"/></svg>`;
const mainDocument     = document.querySelector(`main`);
const iconoHamburguesa = `<svg data-dark class="header__icon-image" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 276.41 195"><title>Icono de Menu</title><rect x="69.54" width="206.87" height="28" rx="14" ry="14"/><rect y="83.5" width="276.41" height="28" rx="14" ry="14"/><rect x="125.78" y="167" width="150.63" height="28" rx="14" ry="14"/></svg>`;

//! Abrir y cerrar el menu en modo mobile
const menu = () => {

    //* Evento al preciosar el icono del menu
    icono.addEventListener(`click`, evento => {

        //? Si el menu esta cerrado, agregarle la clase Open asi poder desplegarlo
        if (!opciones.classList.contains(`open`)) {
            opciones.classList.add(`open`);
            icono.innerHTML = iconoClose;

            // El usuario no podrar scrolear al momento que se abra el menu despue de 0.5s al preciosar el icono del menu
            setTimeout(() => {
                mainDocument.style.height = `90vh`;
            }, 500);

        //? Si el menu esta abierto le quitamos la clase 
        } else {
            opciones.classList.remove(`open`);
            icono.innerHTML = iconoHamburguesa;
            mainDocument.style.height = ``;
        }
    });
    
    //* Evento si al preciosar en cualqueir links se cierra el menu
    linksMenu.forEach( links => {
        links.addEventListener(`click`, () => {           
            opciones.classList.remove(`open`);
            icono.innerHTML = iconoHamburguesa;
            mainDocument.style.height = ``;
        });
    });
};

// TODO: Declaracion de variables para las funcion de las skills
const informationTegno = {
    html: {
        title: `Que es HTML<span>?</span>`,
        summary: `HTML (HyperText Markup Language) es un lenguaje de marcado utilizado para crear páginas web. Es la columna vertebral de cualquier sitio web y se utiliza para estructurar el contenido de la página web y darle formato. HTML utiliza etiquetas para definir diferentes tipos de contenido, como encabezados, párrafos, imágenes, enlaces y formularios. Los navegadores web utilizan el código HTML para renderizar el contenido de una página web y mostrarlo al usuario final. Es una parte fundamental del desarrollo web y es esencial para cualquier desarrollador frontend.`,
        process: `Proceso: 90%`
    },

    css: {
        title: `Que es CSS<span>?</span>`,
        summary: `CSS (Cascading Style Sheets) es un lenguaje de diseño utilizado para dar estilo y presentación a páginas web escritas en HTML. CSS se utiliza para definir la apariencia visual de los elementos HTML en una página, como el color, el tamaño, la posición y la tipografía. Permite a los desarrolladores frontend separar la estructura y el contenido de una página web de su diseño visual, lo que hace que el código sea más fácil de mantener y actualizar. CSS se puede aplicar a elementos individuales en una página o a la página completa a través de un archivo externo. Es una herramienta esencial para cualquier desarrollador frontend que busque crear sitios web atractivos y visualmente atractivos.`,
        process: `Proceso: 95%`
    },

    sass: {
        title: `Que es Sass<span>?</span>`,
        summary: `Sass es un preprocesador de CSS que permite a los desarrolladores escribir hojas de estilo de manera más eficiente y con menos repetición de código. Ofrece características como anidamiento de estilos, mixins y variables, y puede generar hojas de estilo automáticamente cuando se realizan cambios. Aunque tiene una sintaxis más compleja que CSS, Sass tiene muchas herramientas y una gran comunidad de usuarios.`,
        process: `Proceso: 95%`
    },

    javascript: {
        title: `Que es JavaScript<span>?</span>`,
        summary: `JavaScript es un lenguaje de programación utilizado para crear aplicaciones web interactivas y dinámicas. Es un lenguaje de programación de alto nivel, interpretado y orientado a objetos que se ejecuta en el lado del cliente (en el navegador web) o en el lado del servidor (utilizando Node.js). JavaScript se utiliza para agregar interactividad a páginas web, como animaciones, validación de formularios, efectos de desplazamiento y mucho más. También se utiliza para crear aplicaciones web completas, incluidos juegos, aplicaciones de chat y aplicaciones empresariales. Es una herramienta esencial para cualquier desarrollador web y es una de las tecnologías más populares en la actualidad.`,
        process: `Proceso: 60%`,
    },

    githud: {
        title: `Que es GitHud<span>?</span>`,
        summary: `GitHub es una plataforma de alojamiento de proyectos y código abierto que utiliza Git como sistema de control de versiones. Fue comprada por Microsoft en 2018 y permite a los desarrolladores crear repositorios para sus aplicaciones de forma gratuita, siempre y cuando sean de código abierto. Los usuarios pueden colaborar en proyectos dejando comentarios, informando errores y realizando mejoras. Además, ofrece herramientas adicionales como un wiki para cada proyecto, un sistema de seguimiento de problemas, herramientas de revisión de código y gráficos para ver actualizaciones y cambios. Es una herramienta esencial para muchos desarrolladores y cuenta con una interfaz fácil de usar.`,
        process: `Proceso: 80%`,
    },

    photoshop: {
        title: `Que es Photoshop<span>?</span>`,
        summary: `Photoshop es una herramienta de diseño gráfico y edición de imágenes que se utiliza para crear y manipular gráficos para aplicaciones web o de escritorio. Es una de las herramientas más populares en la industria y permite a los desarrolladores crear imágenes de alta calidad para utilizar en aplicaciones, sitios web y otros proyectos. Photoshop es compatible con muchos formatos de archivo diferentes, lo que permite a los desarrolladores integrar fácilmente sus diseños en sus proyectos. También cuenta con una gran cantidad de características avanzadas, como capas, filtros y herramientas de edición de texto.`,
        process: `Proceso: 40%`,
    }
};
let colors;
const containerSkills  = document.querySelector(`.hability__skills`);
const informationSkill = document.querySelector(`.hability__skills-hover`);

//! Plantilla para la informacion dentro de el contener de las skills
const template = (title, summary, process) => {

    //! Primero vemos en que modo esta la web para dar cierto cambios de estilo
    localStorage.getItem(`Theme`) === `Dark` ? colors = `#bebebe` : colors = `#232528`;

    return `<svg class="name__icon" data-dark xmlns="http://www.w3.org/2000/svg" viewBox="0 0 217.95 217.95"><title>Close</title><path d="M-773-1916.66a18.6,18.6,0,0,0-5.47-13.25l-10.62-10.62a18.76,18.76,0,0,0-26.5,0L-882-1874.15l-66.38-66.38a18.6,18.6,0,0,0-13.25-5.47,18.6,18.6,0,0,0-13.25,5.47l-10.62,10.63a18.6,18.6,0,0,0-5.47,13.25,18.6,18.6,0,0,0,5.47,13.25l66.38,66.38-66.38,66.38a18.76,18.76,0,0,0,0,26.5l10.63,10.62a18.6,18.6,0,0,0,13.25,5.47,18.6,18.6,0,0,0,13.25-5.47l66.38-66.38,66.38,66.38a18.6,18.6,0,0,0,13.25,5.47,18.6,18.6,0,0,0,13.25-5.47l10.62-10.62A18.6,18.6,0,0,0-773-1757.4a18.6,18.6,0,0,0-5.47-13.25L-844.88-1837l66.38-66.38A18.6,18.6,0,0,0-773-1916.66Z" transform="translate(990.98 1946.01)"/></svg>
            <h5 class="name__title">${title}</h5>
            <p class="name__summary" style="color: ${colors}">${summary}</p>
            <h5 class="name__process" style="color: ${colors}">${process}</h5>
            <div class="name__quantity">
                <div class="name__quantity-html">
                </div>
            </div>`
};

//! Abrir y cerrar la skills
const skills = () => {

    //* Al seleccionar algunos de las opciones de las habilidades
    containerSkills.addEventListener(`click`, evento => {

        // Busca dento el evento cual es la etiqueta con la clase mas cercana
        const search = evento.target.closest(`.hability__skills-container`);

        // Ademas si la etiqueta buscada contiene una de estas clases, abre la ventana y agregarle la informacion 
        if (search?.classList.contains(`html`)) {

            informationSkill.classList.toggle(`name`);
            informationSkill.innerHTML = template(informationTegno.html.title, informationTegno.html.summary, informationTegno.html.process);
        }

        if (search?.classList.contains(`css`)) {

            informationSkill.classList.toggle(`name`);
            informationSkill.innerHTML = template(informationTegno.css.title, informationTegno.css.summary, informationTegno.css.process);
        }

        if (search?.classList.contains(`sass`)) {
            informationSkill.classList.toggle(`name`);
            informationSkill.innerHTML = template(informationTegno.sass.title, informationTegno.sass.summary, informationTegno.sass.process);
        }

        if (search?.classList.contains(`javascript`)) {

            informationSkill.classList.toggle(`name`);
            informationSkill.innerHTML = template(informationTegno.javascript.title, informationTegno.javascript.summary, informationTegno.javascript.process);
        }

        if (search?.classList.contains(`githud`)) {

            informationSkill.classList.toggle(`name`);
            informationSkill.innerHTML = template(informationTegno.githud.title, informationTegno.githud.summary, informationTegno.githud.process);
        }

        if (search?.classList.contains(`photoshop`)) {

            informationSkill.classList.toggle(`name`);
            informationSkill.innerHTML = template(informationTegno.photoshop.title, informationTegno.photoshop.summary, informationTegno.photoshop.process);
        }

        //! Evento para cerrar la ventana de las skills
        informationSkill.addEventListener(`click`, evento => {

            //* Al dar click en el boton de cerrar, quitamos la clase como tambien el contenido de lla
            if (evento.target.closest(`.name__icon`)) {
                informationSkill.classList.toggle(`name`);
        
                //? Un Timeout para que se borre el contenido sin que el usuario se pueda dar cuenta
                setTimeout(() => {
                    informationSkill.innerHTML = ``;
                }, 700);
            }
        });
    });
};

// TODO: Declaracion de varibale para las funciones de la carga del perfil y las busqueda de los perfiles
const text = document.querySelector(`.project__profile-text`);
const name = document.querySelector(`.project__profile-name`);
const error = document.querySelector(`.project__profile-error`);
const followers = document.querySelector(`.followers`);
const following = document.querySelector(`.following`);
const imageUser = document.querySelector(`.project__profile-img`);
const eventButton = document.querySelector(`.submit`);
const linksGitHud = document.querySelector(`.project__profile-link`);
const respository = document.querySelector(`.repository`);
const description = document.querySelector(`.project__profile-description`);

const containerCards = document.querySelector(`.project__container-cards`);
const leftButton = document.querySelector(`.left`);
const rightButton = document.querySelectorAll(`.right`);

const simulacion = [`1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `10`];

//! Carga de los perfiles, por defecto al carga la pagina tendra los datos de Leonardo Portilla
const profile = async (user = `leooportilla`) => {

    try {

        //* Solicitud de datos
        const answer = await fetch(`https://api.github.com/users/${user}`);
        const data = await answer.json();

        //* Si la peticion da error 404 mandamos un mensaje
        if (answer.status == 404) throw new Error(`Lo siento, pero el usuario que ha ingresado no está registrado en Git Hud`)

        //* Si la peticion es correcta mandamos la informacion a la pagina
        if (answer.status == 200) {
            imageUser.setAttribute(`src`, `${data.avatar_url}`);

            // Cuando los usuarios no tengan su nombre configurado colocamos el login
            data.name == null ? name.innerHTML = data.login : name.innerHTML = data.name;

            // Cuando los usuarios no tengan su nombre configurado colocamos una descripcion por defecto
            data.bio == null ? description.innerHTML = `En tu cuenta de Git Hud no se encuentra una descripción detallada acerca de ti, te recomendaría que incluyeras una descripción de tus habilidades, experienciaros profesionales, esto puede ayudarte a llamar la atención de reclutadores` : description.innerHTML = data.bio;
            respository.innerHTML = data.public_repos;
            followers.innerHTML = data.followers;
            following.innerHTML = data.following;
            linksGitHud.setAttribute(`href`, `${data.html_url}`);

            //? El enlace del Git Hud esta ubicado luego del nombre
            linksGitHud.style.paddingLeft = `calc(${name.getBoundingClientRect().width}px + 1rem)`;
        }

        //* Si capturamos algun error, toda la informacion la mandamos por defecto
    } catch (error) {
        imageUser.setAttribute(`src`, `./media/images/users.png`);
        name.innerHTML = `No registrado`;

        //? El enlace del Git Hud esta ubicado luego del nombre
        linksGitHud.style.paddingLeft = `calc(${name.getBoundingClientRect().width}px + 1rem)`;
        description.innerHTML = error.message;
        respository.innerHTML = `0`;
        followers.innerHTML = `0`;
        following.innerHTML = `0`;
    }
};

//! Carga de los perfiles, por defecto al carga la pagina tendra los datos de Leonardo Portilla
const project = async (user = `leooportilla`) => {

    try {

        //* Solicitud de datos
        const answer = await fetch(`https://api.github.com/users/${user}/repos`);
        const data = await answer.json();

        //* Si la peticion da error 404 mandamos un mensaje
        if (answer.status == 404) throw new Error(`Lo siento, pero el usuario que ha ingresado no está registrado en Git Hud`)

        //* Si la peticion es correcta mandamos la informacion a la pagina
        if (answer.status == 200) {

            containerCards.innerHTML = ``;

            simulacion.forEach(respository => {
                containerCards.insertAdjacentHTML(`afterbegin`, `<div class="card" id="${respository.id}">
                                                                    <div class="card__active"></div>
                                                                    <img class="card__image" src="./media/images/project_portafolio.png" alt="">
                                                                    <h5 class="card__title">Titulo</h5>
                                                                </div>`);

            });

            let widthCard = window.getComputedStyle(document.querySelector('.card')).minWidth.split(`%`)[0];
            let marginCard = window.getComputedStyle(document.querySelector('.card')).content;
            let widthTotal = (data.length * widthCard) + (data.length * marginCard);

            console.log(widthTotal, marginCard);
            containerCards.style.width = `${widthTotal}px`;

        }

        //* Si capturamos algun error, toda la informacion la mandamos por defecto
    } catch (error) {
        console.warn(error);
    }
};

//! Busqueda del perfil deseado del usuario
const search = () => {

    eventButton.addEventListener(`click`, () => {

        //* Validamos la entrada con el patron del input
        let pattern = new RegExp(text.pattern);

        //* Al darle click aparece el input con el focos en el
        if (!text.classList.contains(`inputText`)) {
            text.style.padding = `0 1rem`;
            error.style.padding = `0 1rem`;
            text.classList.toggle(`inputText`);
            error.style.width = `calc(${linksGitHud.getBoundingClientRect().width}px)`;
            text.style.width = `calc(${linksGitHud.getBoundingClientRect().width}px)`;
            text.focus();

            //* Al darle click nuevamente busca con la api de Git Hud lo que esta dentro del input
        } else {

            //* Validamos si valor del input es corecto con el patron
            if (pattern.test(text.value) || text.value == ``) {

                // Si es valido escondemos el input y llamamos la funcion de buscar el perfil
                error.style.transform = `translateY(0)`;
                text.classList.remove(`inputText`);
                text.style.width = `0`;
                text.style.padding = `0`;
                error.style.width = `0`;
                error.style.padding = `0`;
                error.innerHTML = ``;

                profile(text.value);
                project(text.value);

                //? Para que el input cuando se vuelva abrir no tenga valor, lo dejamos vacio al cerrar
                text.value = ``;

                //* Si el valor es incorrecto le mostramos un mensaje al usuario
            } else {
                error.innerHTML = `Usuario es incorrecto`;
                error.style.transform = `translateY(-1.5rem)`;
            }
        }

    });
};


const procesando = () => {

    //* InnetHTML para cuando vuelva a cargar un perfil vacie los projectos viejos
    containerCards.innerHTML = ``;

    //* 
    simulacion.forEach(respository => {
        containerCards.insertAdjacentHTML(`afterbegin`, `<div class="card" id="${respository.id}">
                                                            <div class="card__active"></div>
                                                            <img class="card__image" src="./media/images/project_portafolio.png" alt="">
                                                            <h5 class="card__title">Titulo</h5>
                                                        </div>`);

    });

    let widthCard = parseInt(window.getComputedStyle(document.querySelector('.card')).minWidth.split(`%`)[0]);
    let marginCard = parseInt(window.getComputedStyle(document.querySelector('.card')).content.split(`"`)[1]);
    let widthTotal = (simulacion.length * widthCard) + (simulacion.length * marginCard);

    containerCards.style.width = `${widthTotal}%`;

    const moveRight = (evento) => {

        if (evento[0].isIntersecting) {
            evento[0].target.classList.add(`card-active`);
            cards[counter - 1].classList.remove(`card-active`);
            observerRight.disconnect();
        } else {
            containerCards.style.transform = `translateX(${translate -= widthCard + marginCard}%)`;
            evento[0].target.classList.add(`card-active`);
            cards[counter - 1].classList.remove(`card-active`);
            observerRight.disconnect();
        }
    };

    const moveLeft = (evento) => {
        if (evento[0].isIntersecting) {
            evento[0].target.classList.add(`card-active`);
            cards[counter + 1].classList.remove(`card-active`);
            observerLeft.disconnect();
        } else {
            containerCards.style.transform = `translateX(${translate += widthCard + marginCard}%)`;
            evento[0].target.classList.add(`card-active`);
            cards[counter + 1].classList.remove(`card-active`);
            observerLeft.disconnect();
        }
    };

    const options = {
        root: null,
        rootMargin: `0px`,
        threshold: 1.0,
    };
    const observerRight = new IntersectionObserver(moveRight, options);
    const observerLeft = new IntersectionObserver(moveLeft, options);
    let cards = containerCards.querySelectorAll(`.card`);
    let counter = 0;
    let translate = 0;
    cards[0].classList.add(`card-active`);

    rightButton[0].addEventListener(`click`, () => {

        if (counter < (cards.length - 1)) {
            counter++;
            observerRight.observe(cards[counter]);

            if (counter >= (cards.length - 1)) {

                rightButton.forEach(right => {
                    right.classList.add(`arrow-active`);
                });

                rightButton[1].addEventListener(`click`, () => {
                    counter = 0;
                    translate = 0;
                    containerCards.style.transform = `translateX(0%)`;
                    containerCards.firstChild.classList.add(`card-active`);
                    containerCards.lastChild.classList.remove(`card-active`);

                    rightButton.forEach(right => {
                        right.classList.remove(`arrow-active`);
                    });
                });
            }

        } else {     
            counter = 0;
            translate = 0;
            containerCards.style.transform = `translateX(0%)`;
            containerCards.firstChild.classList.add(`card-active`);
            containerCards.lastChild.classList.remove(`card-active`);

            rightButton.forEach(right => {
                right.classList.remove(`arrow-active`);
            });
        }
    });

    leftButton.addEventListener(`click`, () => {

        if (counter > 0) {
            counter--;
            observerLeft.observe(cards[counter]);

            if (rightButton[0].classList.contains(`arrow-active`)) {

                rightButton.forEach(right => {
                    right.classList.remove(`arrow-active`);
                });
            }
        }
    });
};

// TODO: Declaracion de variable para la funcion de cerrar el input
const errores       = document.querySelector(`.project__profile-error`);
const searchProfile = document.querySelector(`.project__profile-text`);


//! Cerrar el input de la busqueda del perfil
const closeProfile = () => {

    searchProfile.addEventListener(`keyup`, evento => {

        //? Validamos la entrada del usuario
        let Pattern = new RegExp(searchProfile.pattern);

        //* Si presiona enter, evaluamos si el valor es valido con el patron buscamos el perfil, si no mostramos un mensaje de error
        if (evento.key === `Enter`) {

            if (Pattern.test(searchProfile.value)) {

                //? Escondemos todo
                searchProfile.classList.remove(`inputText`);
                searchProfile.style.width = `0`;
                searchProfile.style.padding = `0`;
                
                errores.style.transform = `translateY(0)`;
                errores.style.width = `0`;
                errores.style.padding = `0`;
                errores.innerHTML = ``;
                
                //? Buscamo el perfil con la funcion de la API
                profile(searchProfile.value);
                project(searchProfile.value);
                
                searchProfile.value = ``;
            } else {
                errores.innerHTML = `Usuario es incorrecto`;
                errores.style.transform = `translateY(-1.5rem)`;
            }
        }

        //* Si presiona escape, cerramos el input sin buscar nada
        if (evento.key === `Escape`) {

            //? Escondemos todo
            searchProfile.classList.remove(`inputText`);
            searchProfile.style.width = `0`;
            searchProfile.style.padding = `0`;
            searchProfile.value = ``;

            errores.style.transform = `translateY(0)`;
            errores.style.width = `0`;
            errores.style.padding = `0`;
            errores.innerHTML = ``;
        }
    });
};

// TODOS: Declaracion de variables para funciones del Mood dark/light
const body      = document.querySelector(`body`);
const button    = document.querySelector(`.header__switchbutton-label`);
const summary   = document.querySelector(`.headline__summary`);
const subBody   = document.querySelector(`.hability__skills-hover`);
const inputText = document.querySelector(`.project__profile-text`);
let processSkills, descriptionSkills;

//! Cambiar todas las etiquetas de color
const setImage = (Modo, OneColor, TwoColor, ThreeColor) => {
    body.style.backgroundColor = `${OneColor}`;
    subBody.style.backgroundColor = `${OneColor}`;
    inputText.style.backgroundColor = `${TwoColor}`;
    inputText.style.color = `${OneColor}`;
    summary.style.color = `${ThreeColor}`;

     //* Todos las etiquetas que contengan el id cambian el color directaemnte de los estilos
    document.querySelectorAll(`#svg`).forEach(elemento => elemento.style.color = `${OneColor}`);

    //* Todos las etiquetas que contengan el atributo data-dark cambian el color con el id
    document.querySelectorAll(`[data-dark]`).forEach(elemento => elemento.setAttribute(`id`, `${Modo}`));

    //* Evalua si el panel de informacion del lenguaje esta abierto para poder cambiar al modo
    if (subBody.classList.contains(`name`)) {
        processSkills = document.querySelector(`.name__process`);
        descriptionSkills = document.querySelector(`.name__summary`);

        descriptionSkills.style.color = `${ThreeColor}`;
        processSkills.style.color = `${ThreeColor}`;
    }
};

//! Cambio al modo light, agregarle la clase active
const moodLight = () => {
    button.classList.toggle(`active`);
    setImage(`dark`, `#ffffff`, `#232528`, `#232528`);
};

//! Principal para el cambiar al modo nocturno
const buttonActive = () => {

    // TODOS: Al clickear el boton cambia de posicion con la clase active
    button.addEventListener(`click`, evento => {

        button.classList.toggle(`active`);

        if (button.classList.contains(`active`)) {
            setImage(`dark`, `#ffffff`, `#232528`, `#232528`);

            //? LocalStorage para guardar el tema, asi el usuario cuando vuelva tiene el de su prefrerencia 
            localStorage.setItem(`Theme`, `Light`);
        } else {
            setImage(`light`, `#232528`, `#ffffff`, `#bebebe`);
            //? LocalStorage para guardar el tema, asi el usuario cuando vuelva tiene el de su prefrerencia
            localStorage.setItem(`Theme`, `Dark`);
        }

    });
};

//! Cambio del modo al cargar la pagina
const save = () => {
    
    //? Cuando es primera vez el ingreso a la web, por preferencia esta en modo dark (Mi disenio fue un tema oscuro)
    //! Forzamos a la web tener el modo oscuro por defecto
    if (localStorage.getItem(`Theme`) === null) localStorage.setItem(`Theme`, `Dark`);

    //! Cuando abra la web, se adaptara al modo guardado en el Local Storage
    localStorage.getItem(`Theme`) === `Dark` ? setImage(`light`, `#232528`, `#ffffff`, `#bebebe`) : moodLight();
};

document.addEventListener(`DOMContentLoaded`, evento => {
    /* profile() */
    /* project() */
    procesando();
});

load();
save();
menu();
search(); 
skills();
buttonActive();
closeProfile();
