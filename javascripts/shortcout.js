const Container = document.querySelector(`.hability__skills-hover`)

export function Shortcouts() {

    //* Cuando se presione Escape se cierre el panel de informacion del lenguaje
    document.addEventListener(`keydown`, (evento) => {

        //! Para que evalue si el panel esta abierto
        if (Container.classList.contains(`name`)) {

            //! Si lo esta, cierra el panel
            if (evento.key === `Escape`) {
                Container.classList.remove(`name`)
                setTimeout(() => {
                    Container.innerHTML = ``
                }, 700);
            }
        }
    })
}