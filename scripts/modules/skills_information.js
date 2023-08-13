//! Declaracion de variables para las funcion de las skills
const skills = document.querySelector(`.skills`)
const containerInformation = document.querySelector(`.skills__information`)
const information = {
    html: {
        title: `Que es HTML<span>?</span>`,
        summary: `HTML (HyperText Markup Language) es un lenguaje de marcado utilizado para crear páginas web. Es la columna vertebral de cualquier sitio web y se utiliza para estructurar el contenido de la página web y darle formato. HTML utiliza etiquetas para definir diferentes tipos de contenido, como encabezados, párrafos, imágenes, enlaces y formularios. Los navegadores web utilizan el código HTML para renderizar el contenido de una página web y mostrarlo al usuario final. Es una parte fundamental del desarrollo web y es esencial para cualquier desarrollador frontend.`,
        url: `#`,
    },

    css: {
        title: `Que es CSS<span>?</span>`,
        summary: `CSS (Cascading Style Sheets) es un lenguaje de diseño utilizado para dar estilo y presentación a páginas web escritas en HTML. CSS se utiliza para definir la apariencia visual de los elementos HTML en una página, como el color, el tamaño, la posición y la tipografía. Permite a los desarrolladores frontend separar la estructura y el contenido de una página web de su diseño visual, lo que hace que el código sea más fácil de mantener y actualizar. CSS se puede aplicar a elementos individuales en una página o a la página completa a través de un archivo externo. Es una herramienta esencial para cualquier desarrollador frontend que busque crear sitios web atractivos y visualmente atractivos.`,
        url: `#`,
    },

    sass: {
        title: `Que es Sass<span>?</span>`,
        summary: `Sass es un preprocesador de CSS que permite a los desarrolladores escribir hojas de estilo de manera más eficiente y con menos repetición de código. Ofrece características como anidamiento de estilos, mixins y variables, y puede generar hojas de estilo automáticamente cuando se realizan cambios. Aunque tiene una sintaxis más compleja que CSS, Sass tiene muchas herramientas y una gran comunidad de usuarios.`,
        url: `#`,
    },

    javascript: {
        title: `Que es JavaScript<span>?</span>`,
        summary: `JavaScript es un lenguaje de programación utilizado para crear aplicaciones web interactivas y dinámicas. Es un lenguaje de programación de alto nivel, interpretado y orientado a objetos que se ejecuta en el lado del cliente (en el navegador web) o en el lado del servidor (utilizando Node.js). JavaScript se utiliza para agregar interactividad a páginas web, como animaciones, validación de formularios, efectos de desplazamiento y mucho más. También se utiliza para crear aplicaciones web completas, incluidos juegos, aplicaciones de chat y aplicaciones empresariales. Es una herramienta esencial para cualquier desarrollador web y es una de las tecnologías más populares en la actualidad.`,
        url: `#`,
    },

    githud: {
        title: `Que es GitHud<span>?</span>`,
        summary: `GitHub es una plataforma de alojamiento de proyectos y código abierto que utiliza Git como sistema de control de versiones. Fue comprada por Microsoft en 2018 y permite a los desarrolladores crear repositorios para sus aplicaciones de forma gratuita, siempre y cuando sean de código abierto. Los usuarios pueden colaborar en proyectos dejando comentarios, informando errores y realizando mejoras. Además, ofrece herramientas adicionales como un wiki para cada proyecto, un sistema de seguimiento de problemas, herramientas de revisión de código y gráficos para ver actualizaciones y cambios. Es una herramienta esencial para muchos desarrolladores y cuenta con una interfaz fácil de usar.`,
        url: `#`,
    },

    illustrator: {
        title: `Que es Illustrator<span>?</span>`,
        summary: `Abode Illustrator es una aplicación de edición de gráficos vectoriales que se utiliza para la ilustración, el diseño grafico y la maquetación. Es desarrollado y comercializado por Adobe Systems y es el primer programa oficial de su tipo lanzado por la compañía. Adobe Illustrator contiene opciones creativas, un acceso mas sencillo a las herramientas y una gran versatilidad para producir rápidamente gráficos flexibles cuyos usos se dan en maquetación publicación, impresión, video, publicación en la Web y dispositivos móviles. Illustrator es compatible con otros programas de diseño y edición como Photoshop. El programa es muy conocido entre los diseñadores gráficos por la calidad de los colores en los archivos de salida.`,
        url: `#`,
    },

    photoshop: {
        title: `Que es Photoshop<span>?</span>`,
        summary: `Photoshop es una herramienta de diseño gráfico y edición de imágenes que se utiliza para crear y manipular gráficos para aplicaciones web o de escritorio. Es una de las herramientas más populares en la industria y permite a los desarrolladores crear imágenes de alta calidad para utilizar en aplicaciones, sitios web y otros proyectos. Photoshop es compatible con muchos formatos de archivo diferentes, lo que permite a los desarrolladores integrar fácilmente sus diseños en sus proyectos. También cuenta con una gran cantidad de características avanzadas, como capas, filtros y herramientas de edición de texto.`,
        url: `#`,
    },

    figma: {
        title: `Que es Figma<span>?</span>`,
        summary: `Figma es una herramienta de diseño de interfaces colaborativa que te permite crear, prototipar, desarrollar y recopilar comentarios en una sola plataforma. Con Figma puedes diseñar en un espacio compartido y trabajar en tiempo real con tu equipo, crear prototipos realistas que permitan iterar rápidamente sobre flujos y estados, probar la experiencia interactiva completa para obtener mejores comentarios, antes, acercar el diseño y el desarrollo con el modo Dev, un pizarrón en línea donde todos los que construyen productos pueden colaborar. Figma es una herramienta muy utilizada por equipos de diseño, desarrollo y producto que quieren construir productos significativos con facilidad y eficiencia.`,
        url: `#`,
    }


}

//! Plantilla para la informacion dentro de el contener de las skills
const template = (title, summary, url) => {
   
    return `<div class="skills__information-header">
        <h3>${title}</h3>
        <svg class="close" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
            <path class="cls-1"
                d="m31.26,26.69l-.1-.11-.22-.22-.12-.11-10.23-10.24,10.57-10.57c.27-.31.49-.66.63-1.06.14-.35.21-.73.21-1.13,0-1.79-1.46-3.25-3.25-3.25-.4,0-.78.07-1.14.21-.34.12-.65.31-.93.53h0s-.42.43-.42.43l-10.25,10.25L5.75,1.18l-.21-.22-.42-.36-.06-.04c-.22-.15-.46-.27-.72-.36-.34-.13-.71-.2-1.1-.2C1.5,0,.08,1.37,0,3.09v.33c.01.33.08.64.19.94.12.35.31.67.54.96l4.81,4.81,5.87,5.87-5.87,5.86L.95,26.45l-.02.02c-.32.33-.58.72-.74,1.16-.11.3-.18.62-.19.96v.33c.08,1.72,1.51,3.08,3.24,3.08.39,0,.77-.07,1.11-.2.45-.16.86-.42,1.19-.75l10.46-10.46,10.35,10.35.22.22c.3.28.65.49,1.04.63.36.14.74.21,1.14.21,1.79,0,3.25-1.45,3.25-3.25,0-.41-.08-.8-.22-1.16-.13-.33-.3-.63-.52-.9ZM13.82,13.59l-.12.12h0s.08-.09.12-.12Z" />
        </svg>
    </div>

    <div class="skills__information-content">
        <p>${summary}</p>
        <a href="${url}">Sitio Web</a>
    </div>`
}

//! Abrir y cerrar la skills
export const skillsInformation = () => {

    //! Al seleccionar algunos de las opciones de las habilidades
    skills.addEventListener(`click`, (evento) => {

        //! Busca dento el evento cual es la etiqueta con la clase mas cercana
        const search = evento.target.closest(`.skills__container`)

        //! Ademas si la etiqueta buscada contiene una de estas clases, abre la ventana y agregarle la informacion 
        if (search?.classList.contains(`html`)) {
            containerInformation.innerHTML = template(information.html.title, information.html.summary, information.html.url)
            containerInformation.classList.toggle(`active`)
        }

        if (search?.classList.contains(`css`)) {
            containerInformation.innerHTML = template(information.css.title, information.css.summary, information.css.url)
            containerInformation.classList.toggle(`active`)
        }

        if (search?.classList.contains(`sass`)) {
            containerInformation.innerHTML = template(information.sass.title, information.sass.summary, information.sass.url)
            containerInformation.classList.toggle(`active`)
        }

        if (search?.classList.contains(`javascript`)) {
            containerInformation.innerHTML = template(information.javascript.title, information.javascript.summary, information.javascript.url)
            containerInformation.classList.toggle(`active`)
        }

        if (search?.classList.contains(`githud`)) {
            containerInformation.innerHTML = template(information.githud.title, information.githud.summary, information.githud.url)
            containerInformation.classList.toggle(`active`)
        }

        if (search?.classList.contains(`illustrator`)) {
            containerInformation.innerHTML = template(information.illustrator.title, information.illustrator.summary, information.illustrator.url)
            containerInformation.classList.toggle(`active`)
        }

        if (search?.classList.contains(`photoshop`)) {
            containerInformation.innerHTML = template(information.photoshop.title, information.photoshop.summary, information.photoshop.url)
            containerInformation.classList.toggle(`active`)
        }

        if (search?.classList.contains(`figma`)) {
            containerInformation.innerHTML = template(information.figma.title, information.figma.summary, information.figma.url)
            containerInformation.classList.toggle(`active`)
        }

        containerInformation.focus()

        //! Evento para cerrar la ventana de las skills
        containerInformation.addEventListener(`click`, evento => {

            //! Al dar click en el boton de cerrar, quitamos la clase como tambien el contenido de lla
            if (evento.target.closest(`.close`)) {
                containerInformation.classList.remove(`active`)
        
                //! Un Timeout para que se borre el contenido sin que el usuario se pueda dar cuenta
                setTimeout(() => {
                    containerInformation.innerHTML = ``
                }, 700);
            }
        })
    })
}