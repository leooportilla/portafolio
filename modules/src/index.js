import { load } from "./load.js";
import { menu } from "./menu.js";
import { skills } from "./skills.js";
import { closeProfile } from "./keyboard.js";
import { procesando, profile, project, search } from "./profile.js";
import { buttonActive, save } from "./button.js";


document.addEventListener(`DOMContentLoaded`, evento => {
    profile() 
    project()
})

load()
save()
menu()
search() 
skills()
buttonActive()
closeProfile()