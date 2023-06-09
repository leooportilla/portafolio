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
}
const containerSkills  = document.querySelector(`.hability__skills`)
const informationSkill = document.querySelector(`.hability__skills-hover`)

//! Plantilla para la informacion dentro de el contener de las skills
const template = (title, summary, process) => {

    return `<svg class="name__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 217.95 217.95"><title>Close</title><path d="M-773-1916.66a18.6,18.6,0,0,0-5.47-13.25l-10.62-10.62a18.76,18.76,0,0,0-26.5,0L-882-1874.15l-66.38-66.38a18.6,18.6,0,0,0-13.25-5.47,18.6,18.6,0,0,0-13.25,5.47l-10.62,10.63a18.6,18.6,0,0,0-5.47,13.25,18.6,18.6,0,0,0,5.47,13.25l66.38,66.38-66.38,66.38a18.76,18.76,0,0,0,0,26.5l10.63,10.62a18.6,18.6,0,0,0,13.25,5.47,18.6,18.6,0,0,0,13.25-5.47l66.38-66.38,66.38,66.38a18.6,18.6,0,0,0,13.25,5.47,18.6,18.6,0,0,0,13.25-5.47l10.62-10.62A18.6,18.6,0,0,0-773-1757.4a18.6,18.6,0,0,0-5.47-13.25L-844.88-1837l66.38-66.38A18.6,18.6,0,0,0-773-1916.66Z" transform="translate(990.98 1946.01)"/></svg>
            <h3 class="name__title">${title}</h3>
            <p class="name__summary">${summary}</p>
            <h4 class="name__process">${process}</h4>
            <div class="name__quantity">
                <div class="name__quantity-html">
                </div>
            </div>`
}

//! Abrir y cerrar la skills
export const skills = () => {

    //* Al seleccionar algunos de las opciones de las habilidades
    containerSkills.addEventListener(`click`, evento => {

        // Busca dento el evento cual es la etiqueta con la clase mas cercana
        const search = evento.target.closest(`.hability__skills-container`)

        // Ademas si la etiqueta buscada contiene una de estas clases, abre la ventana y agregarle la informacion 
        if (search?.classList.contains(`html`)) {

            informationSkill.classList.toggle(`name`)
            informationSkill.innerHTML = template(informationTegno.html.title, informationTegno.html.summary, informationTegno.html.process)
        }

        if (search?.classList.contains(`css`)) {

            informationSkill.classList.toggle(`name`)
            informationSkill.innerHTML = template(informationTegno.css.title, informationTegno.css.summary, informationTegno.css.process)
        }

        if (search?.classList.contains(`sass`)) {
            informationSkill.classList.toggle(`name`)
            informationSkill.innerHTML = template(informationTegno.sass.title, informationTegno.sass.summary, informationTegno.sass.process)
        }

        if (search?.classList.contains(`javascript`)) {

            informationSkill.classList.toggle(`name`)
            informationSkill.innerHTML = template(informationTegno.javascript.title, informationTegno.javascript.summary, informationTegno.javascript.process)
        }

        if (search?.classList.contains(`githud`)) {

            informationSkill.classList.toggle(`name`)
            informationSkill.innerHTML = template(informationTegno.githud.title, informationTegno.githud.summary, informationTegno.githud.process)
        }

        if (search?.classList.contains(`photoshop`)) {

            informationSkill.classList.toggle(`name`)
            informationSkill.innerHTML = template(informationTegno.photoshop.title, informationTegno.photoshop.summary, informationTegno.photoshop.process)
        }

        //! Evento para cerrar la ventana de las skills
        informationSkill.addEventListener(`click`, evento => {

            //* Al dar click en el boton de cerrar, quitamos la clase como tambien el contenido de lla
            if (evento.target.closest(`.name__icon`)) {
                informationSkill.classList.remove(`name`)
        
                //? Un Timeout para que se borre el contenido sin que el usuario se pueda dar cuenta
                setTimeout(() => {
                    informationSkill.innerHTML = ``
                }, 700);
            }
        })
    })
}
