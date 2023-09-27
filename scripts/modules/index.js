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
    
    //! Cargar todo la informacion de mi git hud
    profile()

    //! Cargar todo los proyecto automaticamente de mi git hud
    project()

    //! Observador para las secciones que puedan ser visible
    observeIntersetion()

    //! Guarda en el localStorage el modo que esta activo
    save()

    //! Abre o cierra el menu en modo responsivo
    menu()

    //! Boton para subir al inicio
    buttonTop()

    //! Muestra el mapa de Leaflet
    maps()

    //! Cerrar o buscar en el input de los perfiles con el teclado
    closeProfile()

    //! Esconde o muesta las flecha del slide si hay mas de una seccion en los proyectos
    arrow()

    //! Busca el perfil al hacer click
    search()

    //! El boton que cambia el modo de la pagina
    buttonMode()

    //! Validacion del formulario
    validationForm()

    //! Todo atajo de teclado en la web
    closeSkills()

    //! Ventana de la informacion de las habilidades
    skillsInformation()
})