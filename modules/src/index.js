import { load } from "./load.js";
import { menu } from "./menu.js";
import { skills } from "./skills.js";
import { closeProfile } from "./keyboard.js";
import { profile, search } from "./profile.js";
import { buttonActive, save } from "./button.js";


document.addEventListener(`DOMContentLoaded`, evento => {
    profile()
})

load()
save()
menu()
search() 
skills()
buttonActive()
closeProfile()