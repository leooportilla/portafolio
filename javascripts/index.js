import { Button } from "./button.js";
import { Load } from "./load.js";
import { Menu } from "./menu.js";
import { Profile, Search, SearchKey } from "./profile.js";
import { Shortcouts } from "./shortcout.js";
import { Skills } from "./skills.js";


document.addEventListener(`DOMContentLoaded`, evento => {
    Menu()
    Skills()
    Shortcouts()
    Profile()
    Search()
})

SearchKey()
Load()
Button()