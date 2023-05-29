//! Al ingresar a la pagina saldra una pantalla de carga, luego la escondo quitandole la clase
export const load = () => {
    addEventListener("load", () => {
     document.querySelector(`.container`).classList.toggle(`containeractive`)
    })
} 
    