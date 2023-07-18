const swipeUp = document.querySelector(`.swipeup`)
const swipeDown = document.querySelector(`.swipedown`)
const main = document.querySelector(`main`)
const sections = document.querySelectorAll(`section`)
const links = document.querySelectorAll(`.nav__links`)
const mediaQuery = window.matchMedia("(min-width: 600px)");
let translate = 0
let count = 1
let arrayCount = 0

export const movePage = () => {

    if (mediaQuery.matches) {
        main.style.height = `100vh`
    } else {
        main.style.height = `100%`
        return
    }

    swipeUp.addEventListener(`click`, () => {

        if (!(count < sections.length)) return

        translate += 100
        count++
        main.style.transform = `translateY(-${translate}vh)`
        links[arrayCount].classList.remove(`hover`)
        arrayCount++
        links[arrayCount].classList.add(`hover`)
    })

    swipeDown.addEventListener(`click`, () => {

        if (!(count > 0)) return

        translate -= 100
        count--
        main.style.transform = `translateY(-${translate}vh)`
        links[arrayCount].classList.remove(`hover`)
        arrayCount--
        links[arrayCount].classList.add(`hover`)
    })
}