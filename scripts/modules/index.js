import { buttonMode } from "./button_mode";
import { profile, search } from "./profile";
import { project } from "./project";
import { skillsInformation } from "./skills_information";

document.addEventListener(`DOMContentLoaded`, () => {
    profile()
    project()
})

search()
buttonMode()
skillsInformation()