let Container = document.querySelector(`.hability__skills-active`)
let Color
let Icon 

export function Skills() {

    document.addEventListener(`click`, evento => {

        localStorage.getItem(`Theme`) === `Dark` ? Color = `#bebebe`: Color = `#232528`
        localStorage.getItem(`Theme`) === `Dark` ? Icon = `light`: Icon = `dark`

        if (evento.target.matches(`.html`)) {

            Container.classList.toggle(`hability__skills-name`)
            Container.insertAdjacentHTML(`afterbegin`,
                `<img class="hability__skills-name-icon" src="./media/images/close_${Icon}.png" alt="Icono de cerrar menu de resumen">
                <h5 class="hability__skills-name-title">Que es HTML<span>?</span></h5>
                <p class="hability__skills-name-summary" style="color: ${Color}">HTML (HyperText Markup Language) es un lenguaje de marcado utilizado para crear páginas web. Es la columna vertebral de cualquier sitio web y se utiliza para estructurar el contenido de la página web y darle formato. HTML utiliza etiquetas para definir diferentes tipos de contenido, como encabezados, párrafos, imágenes, enlaces y formularios. Los navegadores web utilizan el código HTML para renderizar el contenido de una página web y mostrarlo al usuario final. Es una parte fundamental del desarrollo web y es esencial para cualquier desarrollador frontend.</p>
                <h5 class="hability__skills-name-process" style="color: ${Color}">Proceso: 90%</h5>
                <div class="hability__skills-name-quantity"><div class="hability__skills-name-quantity-html"></div></div>`)
        }

        if (evento.target.matches(`.css`)) {

            Container.classList.toggle(`hability__skills-name`)
            Container.insertAdjacentHTML(`afterbegin`,
                `<img class="hability__skills-name-icon" src="./media/images/close_${Icon}.png" alt="Icono de cerrar menu de resumen">
                <h5 class="hability__skills-name-title">Que es CSS<span>?</span></h5>
                <p class="hability__skills-name-summary" style="color: ${Color}">CSS (Cascading Style Sheets) es un lenguaje de diseño utilizado para dar estilo y presentación a páginas web escritas en HTML. CSS se utiliza para definir la apariencia visual de los elementos HTML en una página, como el color, el tamaño, la posición y la tipografía. Permite a los desarrolladores frontend separar la estructura y el contenido de una página web de su diseño visual, lo que hace que el código sea más fácil de mantener y actualizar. CSS se puede aplicar a elementos individuales en una página o a la página completa a través de un archivo externo. Es una herramienta esencial para cualquier desarrollador frontend que busque crear sitios web atractivos y visualmente atractivos.</p>
                <h5 class="hability__skills-name-process" style="color: ${Color}">Proceso: 95%</h5>
                <div class="hability__skills-name-quantity"><div class="hability__skills-name-quantity-css"></div></div>`)
        }

        if (evento.target.matches(`.sass`)) {

            Container.classList.toggle(`hability__skills-name`)
            Container.insertAdjacentHTML(`afterbegin`,
                `<img class="hability__skills-name-icon" src="./media/images/close_${Icon}.png" alt="Icono de cerrar menu de resumen">
                <h5 class="hability__skills-name-title">Que es Sass<span>?</span></h5>
                <p class="hability__skills-name-summary" style="color: ${Color}"data-dark>Sass es un preprocesador de CSS que permite a los desarrolladores escribir hojas de estilo de manera más eficiente y con menos repetición de código. Ofrece características como anidamiento de estilos, mixins y variables, y puede generar hojas de estilo automáticamente cuando se realizan cambios. Aunque tiene una sintaxis más compleja que CSS, Sass tiene muchas herramientas y una gran comunidad de usuarios.</p>
                <h5 class="hability__skills-name-process" style="color: ${Color}"data-dark>Proceso: 95%</h5>
                <div class="hability__skills-name-quantity"><div class="hability__skills-name-quantity-sass"></div></div>`)
        }

        if (evento.target.matches(`.javascript`)) {

            Container.classList.toggle(`hability__skills-name`)
            Container.insertAdjacentHTML(`afterbegin`,
                `<img class="hability__skills-name-icon" src="./media/images/close_${Icon}.png" alt="Icono de cerrar menu de resumen">
                <h5 class="hability__skills-name-title">Que es JavaScript<span>?</span></h5>
                <p class="hability__skills-name-summary" style="color: ${Color}"data-dark>JavaScript es un lenguaje de programación utilizado para crear aplicaciones web interactivas y dinámicas. Es un lenguaje de programación de alto nivel, interpretado y orientado a objetos que se ejecuta en el lado del cliente (en el navegador web) o en el lado del servidor (utilizando Node.js). JavaScript se utiliza para agregar interactividad a páginas web, como animaciones, validación de formularios, efectos de desplazamiento y mucho más. También se utiliza para crear aplicaciones web completas, incluidos juegos, aplicaciones de chat y aplicaciones empresariales. Es una herramienta esencial para cualquier desarrollador web y es una de las tecnologías más populares en la actualidad.</p>
                <h5 class="hability__skills-name-process" style="color: ${Color}"data-dark>Proceso: 60%</h5>
                <div class="hability__skills-name-quantity"><div class="hability__skills-name-quantity-javascript"></div></div>`)
        }

        if (evento.target.matches(`.githud`)) {

            Container.classList.toggle(`hability__skills-name`)
            Container.insertAdjacentHTML(`afterbegin`,
                `<img class="hability__skills-name-icon" src="./media/images/close_${Icon}.png" alt="Icono de cerrar menu de resumen">
                <h5 class="hability__skills-name-title">Que es GitHud<span>?</span></h5>
                <p class="hability__skills-name-summary" style="color: ${Color}"data-dark>GitHub es una plataforma de alojamiento de proyectos y código abierto que utiliza Git como sistema de control de versiones. Fue comprada por Microsoft en 2018 y permite a los desarrolladores crear repositorios para sus aplicaciones de forma gratuita, siempre y cuando sean de código abierto. Los usuarios pueden colaborar en proyectos dejando comentarios, informando errores y realizando mejoras. Además, ofrece herramientas adicionales como un wiki para cada proyecto, un sistema de seguimiento de problemas, herramientas de revisión de código y gráficos para ver actualizaciones y cambios. Es una herramienta esencial para muchos desarrolladores y cuenta con una interfaz fácil de usar.</p>
                <h5 class="hability__skills-name-process" style="color: ${Color}"data-dark>Proceso: 80%</h5>
                <div class="hability__skills-name-quantity"><div class="hability__skills-name-quantity-githud"></div></div>`)
        }

        if (evento.target.matches(`.photoshop`)) {

            Container.classList.toggle(`hability__skills-name`)
            Container.insertAdjacentHTML(`afterbegin`,
                `<img class="hability__skills-name-icon" src="./media/images/close_${Icon}.png" alt="Icono de cerrar menu de resumen">
                <h5 class="hability__skills-name-title">Que es Photoshop<span>?</span></h5>
                <p class="hability__skills-name-summary" style="color: ${Color}"data-dark>Photoshop es una herramienta de diseño gráfico y edición de imágenes que se utiliza para crear y manipular gráficos para aplicaciones web o de escritorio. Es una de las herramientas más populares en la industria y permite a los desarrolladores crear imágenes de alta calidad para utilizar en aplicaciones, sitios web y otros proyectos. Photoshop es compatible con muchos formatos de archivo diferentes, lo que permite a los desarrolladores integrar fácilmente sus diseños en sus proyectos. También cuenta con una gran cantidad de características avanzadas, como capas, filtros y herramientas de edición de texto.</p>
                <h5 class="hability__skills-name-process" style="color: ${Color}"data-dark>Proceso: 40%</h5>
                <div class="hability__skills-name-quantity"><div class="hability__skills-name-quantity-photoshop"></div></div>`)
        }

        if (evento.target.matches(`.hability__skills-name-icon`)) {
            Container.classList.toggle(`hability__skills-name`)
            setTimeout(() => {
                Container.innerHTML = ``
            }, 700);
        }
    })
}