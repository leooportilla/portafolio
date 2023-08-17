import { buttonMode, save } from "./button_mode";
import { buttonTop } from "./button_top";
import { closeProfile, keaboard } from "./keyboard";
import { maps } from "./maps";
import { menu } from "./menu";
import { profile, search } from "./profile";
import { arrow, project } from "./project";
import { skillsInformation } from "./skills_information";

document.addEventListener(`DOMContentLoaded`, () => {
    save()
    menu()
    profile()
    project()
    buttonTop()
    maps()
})

keaboard()
closeProfile()
arrow()
search()
buttonMode()
skillsInformation()