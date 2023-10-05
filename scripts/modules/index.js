import { buttonMode, save } from "./button_mode";
import { buttonTop } from "./button_top";
import { closeProfile, closeSkills } from "./keyboard";
import { maps } from "./maps";
import { menu } from "./menu";
import { observeIntersetion } from "./observe";
import { profile, search } from "./profile";
import { arrow, project } from "./project";
import { skillsInformation } from "./skills_information";
import { validationForm } from "./validation_form";

document.addEventListener(`DOMContentLoaded`, () => {
    
    //! Boton para subir al inicio de la pagina
    buttonTop()
    
    //! Cargar preterminada del modo
    save()

    //! Modo Dark
    buttonMode()

    //! Menu para la version movil
    menu()

    //! Observador para activar los elementos
    observeIntersetion()

    //! Ventana con la informacion de las habiliades
    skillsInformation()

    //! Cerrar la ventana de las habilidades con el teclado
    closeSkills()

    //! Perfil en Git Hud
    profile()

    //! Repositorios de Git Hud
    project()

    //! Buscar otro perfil
    search()

    //! Cerrar el input del buscador con el teclado
    closeProfile()

    //! Activar o desactivar las flechas segun la cantidad de repositorios
    arrow()

    //! Mapa de Leaflet
    maps()

    //! Validar el formulario antes de enviar
    validationForm()
})