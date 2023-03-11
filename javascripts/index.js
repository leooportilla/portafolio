import {
    Button
} from "./button.js";
import {
    Menu
} from "./menu.js";

let IconoMenu = document.querySelector(`.header__icon-image`)

document.addEventListener(`DOMContentLoaded`, evento => {
    Button(`.header__switchbutton-label`, `.header__switchbutton-sun`, `.header__switchbutton-moon`)
    Menu(`.header__icon-image`, `.header__enlace-a`)
})