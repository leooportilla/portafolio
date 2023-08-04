import { buttonMode } from "./button_mode";
import { buttonTop } from "./button_top";
import { menu } from "./menu";
import { profile, search } from "./profile";
import { project } from "./project";
import { skillsInformation } from "./skills_information";

document.addEventListener(`DOMContentLoaded`, () => {
    profile()
    project()
    buttonTop()
    menu()
})

search()
buttonMode()
skillsInformation()