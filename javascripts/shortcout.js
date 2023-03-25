let Container = document.querySelector(`.hability__skills-active`)

export function Shortcouts() {
    document.addEventListener(`keydown`, (evento) => {
        if (Container.classList.contains(`hability__skills-name`)) {

            if (evento.key === `Escape`) {
                Container.classList.remove(`hability__skills-name`)
                setTimeout(() => {
                    Container.innerHTML = ``
                }, 700);
            }
        }
    })
}