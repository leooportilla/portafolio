import { buttonMode } from "./button_mode";
import { buttonTop } from "./button_top";
import { closeProfile, keaboard, slide } from "./keyboard";
import { maps } from "./maps";
import { menu } from "./menu";
import { profile, search } from "./profile";
import { arrow, project } from "./project";
import { skillsInformation } from "./skills_information";

document.addEventListener(`DOMContentLoaded`, () => {
    profile()
    project()
    buttonTop()
    menu()
    maps()
})

keaboard()
closeProfile()
arrow()
search()
buttonMode()
skillsInformation()