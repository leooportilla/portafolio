import { buttonMode } from "./button_mode";
import { buttonTop } from "./button_top";
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

arrow()
search()
buttonMode()
skillsInformation()