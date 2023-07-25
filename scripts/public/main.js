'use strict';

const buttonSwitch = document.querySelector(`.switch`);
const labelSwitch = document.querySelector(`.switch__label`);
const documentHtml = document.querySelector(`html`);

const buttonMode = () => {

    //! Agregamos un evento al Boton de cambiar el modo al momento que ocurrar un click quitamos o agregamos la clase Move
    buttonSwitch.addEventListener(`click`, () => {
        labelSwitch.classList.toggle(`move`);
        documentHtml.classList.toggle(`dark`);
    });
};

//! Declaracion de variable para el boton de subir al inicio
const headerTop    = document.querySelector(`.header`);
const buttonHome   = document.querySelector(`.buttonhome`);
const sectionGuide = document.querySelector(`.home__container`);

//! Estaremos al pendiente al momento que el scroll pase una seccion de la pagina para que el boton pueda aparecer
const buttonTop = () => {

    //! Evento del scroll para que el navegador este pendiente
    document.addEventListener(`scroll`, () =>   {

        //! Condicion si llega a pasar la  seccion agregamos la clase al boton
        if (window.scrollY > sectionGuide.getBoundingClientRect().top + window.scrollY) buttonHome.classList.add(`active-button`);
        
        //! Condicion por si llega a subir de nuevo el usuario al inicio, aqui quitamos la clase al boton
        if (window.scrollY <= headerTop.getBoundingClientRect().top + window.scrollY) buttonHome.classList.remove(`active-button`);
    
    });

    //! Evento click al boton para que pueda mandar al incio al usuario
    buttonHome.addEventListener(`click`, () => window.scrollTo({behavior: `smooth`, top: 0}));
};

const userName        = document.querySelector(`.container__user-information-name`);
const userImage       = document.querySelector(`.container__image`);
const userGitHud      = document.querySelector(`.container__user-information-link`);
const buttonSearch    = document.querySelector(`.container__user-label`);
const inputProfile    = document.querySelector(`.container__user-input`);
const errorProfile    = document.querySelector(`.container__user-error`);
const userFollowing   = document.querySelector(`.following`);
const userFollowers   = document.querySelector(`.followers`);
const userRepository  = document.querySelector(`.repository`);
const userDescription = document.querySelector(`.container__description-paragraph`);

//! Carga de los perfiles, por defecto al carga la pagina tendra los datos de Leonardo Portilla
const profile = async (user = `leooportilla`) => {

    try {

        //! Solicitud de datos
        const answer = await fetch(`https://api.github.com/users/${user}`);
        const data = await answer.json();

        //! Si la peticion da error 404 mandamos un mensaje
        if (answer.status == 404) throw new Error(404)

        if (answer.status == 403) throw new Error(403)

        //! Si la peticion es correcta mandamos la informacion a la pagina
        if (answer.status == 200) {
            userImage.setAttribute(`src`, `${data.avatar_url}`);

            //! Cuando los usuarios no tengan su nombre configurado colocamos el login
            data.name == null ? userName.innerHTML = data.login : userName.innerHTML = data.name;

            //! Cuando los usuarios no tengan su nombre configurado colocamos una descripcion por defecto
            data.bio == null ? userDescription.innerHTML = `En tu cuenta de Git Hud no se encuentra una descripción detallada acerca de ti, te recomendaría que incluyeras una descripción de tus habilidades, experienciaros profesionales, esto puede ayudarte a llamar la atención de reclutadores` : userDescription.innerHTML = data.bio;
            userRepository.innerHTML = `Repositorio: ${data.public_repos}`;
            userFollowers.innerHTML = `Seguidores: ${data.followers}`;
            userFollowing.innerHTML = `Siguiendo: ${data.following}`;
            userGitHud.setAttribute(`href`, `${data.html_url}`);
        }

        //! Si capturamos algun error, toda la informacion la mandamos por defecto
    } catch (error) {
        userImage.setAttribute(`src`, `./media/images/users.png`);

        if (error.message === `404`) {
            userName.innerHTML = `No registrado`;
            userDescription.innerHTML = `Lamentablemente, el usuario que intentó realizar la búsqueda en el servidor de Git Hud no se encuentra registrado. Esto puede deberse a varios motivos, como un error al ingresar el nombre de usuario o la falta de una cuenta válida. Por favor, verifica que estás utilizando el nombre de usuario correcto y que tienes una cuenta registrada en Git Hud antes de intentar realizar una nueva búsqueda`;
        }

        if (error.message === `403`) {
            userImage.innerHTML = `Limite de Acceso`;
            userDescription.innerHTML = `Lo siento mucho, pero en este momento el acceso a la información que estás buscando ha sido limitado. Por favor, inténtalo de nuevo más tarde asi puedes acceder a la información que necesitas`;
        }

        userRepository.innerHTML = `Repositorio: 0`;
        userFollowers.innerHTML = `Seguidores: 0`;
        userFollowing.innerHTML = `Siguiendo: 0`;
    }
};

//! Busqueda del perfil deseado del usuario
const search = () => {

    buttonSearch.addEventListener(`click`, () => {

        //! Validamos la entrada con el patron del input
        let pattern = new RegExp(inputProfile.pattern);

        if (!inputProfile.classList.contains(`active-input`)) {
            inputProfile.classList.add(`active-input`);
            inputProfile.style.width = `calc(${userName.getBoundingClientRect().width}px)`;

            setTimeout(() => {
                errorProfile.classList.add(`active`);
            }, 1000);

        } else {

            if (pattern.test(inputProfile.value)) {

                errorProfile.classList.remove(`active-error`);

                setTimeout(() => {
                    inputProfile.classList.remove(`active-input`);
                    inputProfile.style.width = 0;
                    errorProfile.classList.remove(`active`);
                }, 500);


                //! Para que el input cuando se vuelva abrir no tenga valor, lo dejamos vacio al cerrar
                setTimeout(() => {
                    inputProfile.value = ``;
                }, 1300);

                profile(inputProfile.value);
                project(text.value); 

            } else {
                errorProfile.classList.add(`active-error`);
            }
        }
    });
};

//! Declaracion de varibale para las funciones de la carga del perfil y las busqueda de los perfiles
const leftButton = document.querySelector(`.project__projects-arrowleft`);
const rightButton = document.querySelector(`.project__projects-arrowright`);
const containerCards = document.querySelector(`.cards`);

const widthMax = window.matchMedia(`(min-width: 1500px)`);
const width1328px = window.matchMedia(`(min-width: 1328px)`);
window.matchMedia(`(min-width: 960px)`);
window.matchMedia(`(min-width: 600px)`);

const cardsOne = document.createElement(`div`).classList.add(`cards__container`);
const cardsTwo = document.createElement(`div`).classList.add(`cards__container`);

const language = {
    javascript: {
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 387.05 386.14"><path d="m0,0v386.14h387.05V0H0Zm211.22,307.23c.04,4.43-.46,15.17-7.34,26.25-1.69,2.74-7.68,11.77-19.37,17.77-11.98,6.15-22.99,5.56-30.39,5.16-5.71-.31-15.23-.91-25.68-6.19-15.87-8.01-23.52-21.57-26.37-27.4l29.93-17.43c.57,1.93,3.4,10.63,12.27,15.48,1.39.76,6.97,3.64,14.33,2.98,2.51-.22,6.14-.55,9.51-2.98,6.62-4.77,6.77-13.67,6.77-15.02v-128.41h36.34v129.79Zm130.7,34.51c-14.92,14.5-33.92,14.75-45.51,14.9-8.12.11-24.77.1-41.62-10.78-13.84-8.93-20.91-20.72-23.96-26.71l29.35-17.54c1.73,3.23,9.53,16.95,25.56,21.21,2.54.67,20.01,5.02,29.58-5.05.85-.88,5.97-6.27,5.39-13.64-.44-5.61-3.95-9.44-5.39-11.01-2.11-2.3-4.24-3.65-9.51-6.3-8.63-4.34-14.79-6.67-22.47-9.98-6.29-2.7-9.46-4-11.7-5.27-5.8-3.3-17.05-9.69-24.19-23.04-2.43-4.56-8.8-18.16-4.93-35.09,1.09-4.75,4.54-16.59,15.48-26.02,9.12-7.86,18.63-9.91,24.3-11.12,2.83-.61,15.73-3.17,31.3,1.26,3.86,1.1,9.28,2.68,15.37,6.65,10.08,6.57,15.28,15.3,17.65,20.06l-28.32,18.12c-.83-2.19-3.56-8.47-10.32-12.27-7.19-4.05-18.45-5.34-25.1,1.14-3.9,3.8-4.69,9.07-4.82,9.98-.07.53-.65,4.93,1.03,9.06,2.28,5.59,7.68,8.17,8.6,8.59,0,0,3.79,2.64,26.37,12.27,22.59,9.63,30.15,19.03,30.15,19.03,2.7,2.99,13.46,15.61,13.42,34.74-.01,2.24-.36,21.88-15.71,36.81Z" /></svg>`,
        url: `https://developer.mozilla.org/es/docs/Web/JavaScript`
    },

    html: {
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 404.96 463.44"><path class="cls-1" d="m392.8.95C378.89-1.19,13.54.95,13.54.95,13.54.95-1.26.66.09,18.07l29.35,379.57s.31,13.3,10.7,15.9c10.4,2.6,149.81,47.39,149.81,47.39,0,0,9.17,5.65,24.76,0,15.6-5.66,149.81-47.54,149.81-47.54,0,0,8.87-1.69,10.25-13.76,1.37-12.08,30.11-381.56,30.11-381.56,0,0,1.83-14.98-12.08-17.12Zm-64.81,134.68l-195.98.15,5.81,53.81,185.89.15-12.08,156.08-109.15,34.85-109.29-34.7-6.27-81.32,57.78-.16-.15,39.75,59.16,16.51,59.62-16.51,4.28-63.44H85.08l-12.07-155.31h258.95l-3.97,50.14Z"/></svg>`,
        url: `https://developer.mozilla.org/es/docs/Web/HTML`,
    },

    css: {
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 525.63 598.54"><path class="cls-1" d="m509.69,1.02C493.18-1.27,16.81,1.02,16.81,1.02,16.81,1.02.95,1.29,0,18.41l44.33,501.17s-.69,15.94,18.23,26.6l176.9,49.3s16.86,6.88,45.75,0l172.89-47.58s16.97-2.41,22.24-24.88l45.29-504.61s.57-15.1-15.94-17.39Zm-103.72,444.67l-143.32,39.37-142.94-39.52-10.04-112h70.27l5.33,57.72,77.38,21.65,78.38-21.18,10.83-99.76H106.22l-7.53-64.94h258.5l4.86-70.27H92.42l-4.61-66.03h350l-31.84,354.96Z"/></svg>`,
        url: `https://developer.mozilla.org/es/docs/Web/CSS`
    },

    scss: {
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 559.04 559.03">
                <path d="m279.52,0C125.15,0,0,125.15,0,279.52s125.15,279.51,279.52,279.51,279.52-125.14,279.52-279.51S433.89,0,279.52,0Zm174.95,158.21c-3.76,15.94-10.58,26.8-15.43,34.39-2.93,4.58-13.27,20.11-32.26,34.85-12.36,9.6-23.15,14.79-29.35,17.74-4.3,2.03-23.72,11.03-52.09,15.36-13.82,2.11-27.28,4.19-44.71,1.26-9.47-1.59-21.69-4.88-33.48-12.61-2.74-1.8-10.6-7.2-14.62-16.42-.49-1.14-3.4-8-1.17-9.86.65-.55,2.31-1.15,3.41-.63.17.08.63.33,1.09.77.41.4.65.78.7.88.7,1.12,3.31,3.87,4.59,5.12,1.41,1.37,3.34,3.24,6.19,5.12,0,0,2.43,1.61,5.35,2.9,12.16,5.42,28.28,5.97,28.28,5.97,13.74.95,24.01-1.07,33.02-2.91,21.32-4.35,38.4-12.17,50.29-18.8,22.08-12.3,34.82-25.59,37.91-28.89,11.03-11.77,15.8-20.97,17.89-25.53,3.23-7.05,6.63-14.47,6.42-24.77-.09-4.25-.31-15.31-8.1-24-2.28-2.54-5.31-4.99-11.62-7.94-13.01-6.1-26.25-7.9-39.59-8.11-9.03-.13-20.9.42-37.76,3.67-28.56,5.51-49.39,14.52-62.98,20.49-4.4,1.93-23.75,10.54-47.24,25.22-19.46,12.17-30.88,21.71-33.78,24.15-10.75,9.09-18.62,15.83-26.45,27.21-5.73,8.34-12.06,17.78-14.06,31.8-1.95,13.69,1.29,24.34,2.29,27.36,3.19,9.64,8.07,15.84,12.54,21.4,6.2,7.73,13.72,13.67,28.74,25.53,6.56,5.18,8.15,6.19,17.27,13.45,8.77,6.98,13.22,10.77,18.04,15.44,4.11,3.99,7.32,7.49,9.48,9.94l1.72-.76c8.82-2.62,22.01-5.57,38.18-5.62,11.7-.04,25.54-.09,41.38,6.76,5.92,2.56,26.57,11.48,36.69,32.68,2.12,4.42,6.09,13.01,5.05,24.19-.88,9.36-4.83,15.81-5.62,17.08-2.61,4.16-5.24,6.47-9.75,10.43-4.79,4.22-8.15,6.07-11.81,6.65-1.04.17-4.25.68-5.15-.8-.49-.79-.18-1.93-.12-2.18.32-1.19,1.2-1.88,1.72-2.29.77-.6,1.48-.87,1.61-.92,1.94-.74,7.02-4.31,10.31-8.02,1.11-1.25,5.03-5.78,6.42-12.73,1.4-6.96-.52-12.5-1.83-16.28-3.37-9.74-9.6-15.57-12.38-18.11-6.56-6-13.04-8.63-18.35-10.78-6.4-2.6-11.45-3.63-16.16-4.59-11.54-2.35-20.58-2.33-25.11-2.29-.81.01-4.83.05-10.09.57-6.37.64-9.55,1.49-11.92,2.3-1.25.42-2.27.84-2.98,1.14,3.1,8.68,7.01,23.42,5.27,41.62-2.38,24.95-14.06,42.61-21.1,51.36-12.96,16.14-27.5,23.64-31.18,25.46-16.66,8.23-31.07,8.83-38.41,9.05-8.93.28-14.66-.88-19.83-3.44-1.31-.64-5.81-2.97-10.21-7.68-6.77-7.25-8.73-15.22-9.4-18.11-2.38-10.28-.13-18.61,1.84-25.91,2.24-8.31,5.46-14.2,6.88-16.63,2.44-4.2,5.69-8.71,12.26-15.36,2.37-2.4,11.3-11.26,27.52-22.24,0,0,12.81-8.67,29.12-17.66.91-.5,5.35-2.93,11.16-6.42.71-.42,1.29-.77,1.64-.99-4.9-3.98-12.42-9.93-21.86-16.82-12.69-9.26-16.72-11.36-25.53-17.58-11.2-7.91-27.73-19.73-43.41-38.52-4.78-5.73-14.57-18.21-17.27-31.95-1.3-6.61-1.07-13.14-1.07-13.15.11-3.16.53-7.65,2.44-14.67,3.2-11.76,7.81-20.46,9.33-23.24,13.23-24.18,37.13-45.83,39.9-48.3,16.82-15.06,31.23-24.07,44.48-32.26,27.52-17.01,50.8-26.81,60.53-30.72,23.12-9.28,47.03-18.89,80.26-21.86,28.93-2.59,48.2,1.34,56.56,3.36,13.88,3.36,26.63,6.61,39.13,17.43,4.3,3.71,17.59,15.54,22.02,35.46,3.05,13.73.44,24.76-1.69,33.79Z"/>
                <path d="m225.08,407.87c-3.09,14.77-10.72,24.61-14.16,28.95-8.04,10.18-16.52,15.55-20.92,18.29-4.11,2.55-8.49,4.77-13.93,6.25-5.05,1.37-9.6,2.53-14.62.57-1.07-.41-5.18-2.08-7.62-6.07-.74-1.21-3.71-6.51,1.14-20.01,2.01-5.57,6.06-14.53,16.11-25.68,8.09-8.98,15.5-14.31,24.48-20.7,6.7-4.77,15.6-10.55,26.6-16.33l1.6-.69c1.15,4.29,2.32,10.07,2.64,16.97.13,2.96.42,10.13-1.32,18.45Z"/>
            </svg>`,
        url: `https://sass-lang.com/`,
    },

    reatjs: {
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 498.63 550.4">
                <path d="m304.3,276.11c0,30.22-24.5,54.73-54.72,54.73s-54.73-24.51-54.73-54.73,24.5-54.73,54.73-54.73,54.72,24.51,54.72,54.73Z"/>
                <path d="m483.81,329.36c-5.27-10.15-10.32-17.12-16.51-25.68-8.48-11.71-16.38-20.95-22.36-27.52l-1.26-1.32,2.06-1.89c5.59-5.86,13.48-14.7,21.86-26.29,9.18-12.69,17.86-24.88,24.15-42.73,3.9-11.05,7.86-22.27,6.65-37.45-.51-6.45-1.9-21.42-12.68-35.39-9.89-12.8-22.28-17.79-31.65-21.55-16.62-6.68-30.48-7.1-46.09-7.42-14.04-.28-34.18.6-58.16,6.2l-3.19.68-.94-3.51c-4.36-13.63-9.05-24.63-12.76-32.56-6.91-14.74-13.15-27.79-25.3-41.66-5.87-6.69-12.65-14.3-24.08-20.94C276.89,6.45,265.99.29,250.84,0c-11.5-.21-20.09,3.06-24.39,4.74-13.08,5.13-21.38,13.05-27.28,18.8-5.42,5.28-8.88,9.84-12.23,14.29-2.98,3.96-8.82,12.09-16.36,26.68-5.18,10.03-11.51,23.76-17.27,40.97l-1.36,3.74-4.68-1.3c-17.79-3.74-32.96-5.02-44.18-5.42-15.23-.55-29-.94-46.39,3.44-11.15,2.8-22.55,5.81-33.79,15.36-10.13,8.61-14.93,18.13-16.43,21.32C.19,156.02.47,167.96.67,173.74c.37,10.68,3,18.41,6.73,29.35,3.68,10.83,7.66,18.48,9.02,21.02,2.23,4.19,5.33,9.46,12.84,19.72,5.63,7.7,13.5,17.88,23.77,29.5l1.99,2.45-2.64,2.22c-6.31,6.69-14.68,16.34-23.28,28.89-8.8,12.86-18.32,27-24.19,47.46-3.43,11.98-6.61,23.06-3.89,37.49,1.25,6.68,4.62,18.63,14.21,29.7,8.36,9.64,17.49,14.08,23.85,17.08,10.55,4.99,19.28,6.42,29.58,8.03,15.87,2.48,28.18,2,37.15,1.6,10.44-.46,24.28-1.79,40.35-5.39l5.62-1.72,1.26,2.76c5.26,18.58,12.04,33.16,17.54,43.33,5.79,10.71,13.16,24.12,27.06,37.95,6.41,6.38,13.54,13.35,25.22,18.69,5.2,2.38,14.53,6.52,27.17,6.53,17.31.02,29.77-7.72,35.43-11.35,7.02-4.49,11.31-8.92,16.85-14.67,3-3.1,12.31-13.05,21.21-28.66,4.21-7.37,6.6-12.98,10.78-22.82,4.65-10.92,8.03-20.26,10.32-27.06l1.61-4.93,3.21.96c8.52,1.81,20.25,3.94,34.39,5.35,8.21.82,15.44,1.52,25.11,1.38,10.42-.16,22.5-.42,37.15-4.82,8.65-2.6,18.04-5.42,27.97-13.3,12.92-10.25,18.36-22.42,19.38-24.76,7.1-16.41,4.84-31.24,3.44-40.47-2.3-15.12-7.86-25.83-13.07-35.89Zm-342.77,78.39c-4.64,1.26-10.77,2.71-18.06,3.8-9.77,1.48-17.22,1.67-23.06,1.8-9.73.22-16.83.37-26.37-1.19-10.17-1.67-16.35-4.15-20.68-6.46-6.81-3.65-9.44-6.88-10.34-8.06-.6-.78-3.28-4.41-4.61-10.05-.5-2.13-1.32-6.69.66-16.27,1.74-8.39,4.38-14.7,5.99-18.29,1.62-3.6,5.55-11.91,15.43-26.25,4.48-6.49,10.68-14.95,18.72-24.44l1.8-1.7c21.59,20.89,50.95,41.94,50.95,41.94,3.5,38.62,10.36,64.25,10.36,64.25l.17.69-.96.23Zm-12.65-114.16l-22.47-17.48,22.47-19.44s-.46,23.16,0,36.92Zm2.84-84.02c-31.69,22.34-50.47,41.1-50.47,41.1l-.51.49-.68-.72c-3.41-3.39-7.73-7.98-12.32-13.74-6.16-7.73-10.05-14.08-13.09-19.07-5.05-8.32-8.73-14.39-12.15-23.43-3.64-9.65-4.58-16.23-4.74-21.14-.25-7.73,1.23-11.62,1.81-12.99.37-.9,2.17-5.05,6.39-9.02,1.59-1.5,5.14-4.48,14.43-7.56,8.13-2.69,14.92-3.55,18.83-3.95,3.93-.4,13.09-1.16,30.45.23,7.86.63,18.28,1.78,30.52,3.99l2.38.71c-7.3,29.15-10.85,65.1-10.85,65.1Zm194.59-28.41s-25.45-15.52-32.33-18.27c0,0,16.51-6.88,27.28-8.94,0,0,3.67,14.29,5.05,27.21Zm-137.47-64.13c1.23-4.65,3.04-10.68,5.74-17.54,3.61-9.2,7.16-15.75,9.97-20.87,4.68-8.53,8.09-14.76,14.22-22.24,6.53-7.98,11.76-12.08,15.93-14.68,6.57-4.08,10.68-4.74,12.16-4.93.97-.12,5.45-.63,11,1.04,2.09.63,6.45,2.2,13.76,8.71,6.4,5.69,10.54,11.14,12.84,14.33,2.31,3.2,7.55,10.76,15.02,26.48,3.39,7.13,7.61,16.72,11.81,28.44l.57,2.41c-28.89,8.25-61.79,23.15-61.79,23.15-35.2-16.28-60.83-23.15-60.83-23.15l-.68-.21.28-.94Zm-9.7,36.47s14.21,3.97,26.09,9.24c0,0-26.16,14.28-31.99,18.86,0,0,2.3-17.73,5.9-28.1Zm-5.09,216.74s25.46,15.52,32.33,18.27c0,0-16.51,6.88-27.28,8.94,0,0-3.67-14.29-5.05-27.21Zm137.39,62.44c-1.22,4.65-3.04,10.68-5.73,17.54-3.61,9.2-7.17,15.75-9.97,20.87-4.68,8.53-8.09,14.76-14.22,22.24-6.53,7.98-11.76,12.08-15.94,14.67-6.56,4.08-10.67,4.74-12.15,4.93-.97.13-5.46.64-11-1.03-2.1-.63-6.45-2.2-13.76-8.71-6.4-5.69-10.54-11.14-12.84-14.33-2.31-3.21-7.55-10.76-15.02-26.49-3.39-7.12-7.61-16.72-11.81-28.43l-.57-2.41c28.89-8.25,61.79-23.16,61.79-23.16,35.2,16.28,60.83,23.16,60.83,23.16l.68.2-.29.95Zm9.27-34.78s-14.21-3.97-26.09-9.24c0,0,26.16-14.29,31.99-18.87,0,0-2.3,17.74-5.9,28.11Zm11.71-75.19c-50.14,32.1-82.36,47.08-82.36,47.08-48.42-21.7-82.73-47.69-82.73-47.69-2.45-28.43,0-93.56,0-93.56,24.46-19.26,82.73-47.38,82.73-47.38,28.63,11.31,82.36,47.38,82.36,47.38,3.37,43.11,0,94.17,0,94.17Zm25.88-178.33c4.65-1.27,10.77-2.71,18.06-3.81,9.78-1.47,17.22-1.66,23.06-1.79,9.73-.22,16.83-.38,26.37,1.19,10.17,1.67,16.35,4.14,20.68,6.46,6.81,3.64,9.44,6.87,10.34,8.06.6.78,3.28,4.41,4.61,10.05.5,2.12,1.32,6.68-.66,16.27-1.74,8.38-4.38,14.7-5.99,18.28-1.62,3.61-5.55,11.92-15.43,26.25-4.48,6.5-10.68,14.95-18.72,24.45l-1.8,1.7c-21.59-20.9-50.95-41.94-50.95-41.94-3.5-38.62-10.36-64.26-10.36-64.26l-.17-.69.96-.22Zm12.03,112.64l22.47,17.48-22.47,19.43s.46-23.16,0-36.91Zm89.68,135.04c-.38.9-2.17,5.04-6.39,9.01-1.6,1.5-5.14,4.48-14.43,7.56-8.13,2.69-14.92,3.56-18.83,3.96-3.93.4-13.09,1.15-30.45-.24-7.86-.63-18.28-1.77-30.52-3.99l-2.38-.71c7.3-29.14,10.85-65.09,10.85-65.09,31.69-22.35,50.47-41.1,50.47-41.1l.51-.49.68.72c3.41,3.39,7.73,7.97,12.32,13.73,6.16,7.73,10.05,14.09,13.08,19.08,5.06,8.31,8.74,14.38,12.16,23.43,3.64,9.64,4.58,16.23,4.74,21.14.25,7.72-1.23,11.61-1.81,12.99Z"/>
            </svg>`,
        url: `https://es.react.dev/`,
    },

    typescript: {
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 495.28 495.29"><path d="m0,0v495.29h495.28V0H0Zm283.52,274.52h-62.14v177.7h-49.87v-177.7h-62.02v-40.13h174.03v40.13Zm168.54,117.63c-.16,5.61-.76,20.37-10.89,34.39-10.01,13.85-23.52,18.98-33.02,22.59-12.68,4.81-22.99,5.43-35.66,6.19-8.05.48-21.58,1.2-38.86-2.18-13.15-2.57-23.73-6.59-31.19-9.97l.46-49.3c7.85,6.62,20.29,15.14,37.15,19.72,3.47.94,15.03,3.87,29.69,2.75,7.22-.55,13.75-1.97,19.95-5.73,5.78-3.51,7.62-6.84,8.25-8.14,2.24-4.6,1.7-9.02,1.5-10.55-.59-4.3-2.45-7.24-3.56-8.94-2.1-3.23-4.83-5.88-10.43-9.52-6.13-3.98-11.22-6.24-15.82-8.25-17.7-7.75-16.96-6.99-22.59-9.75-6.21-3.04-12.9-6.37-20.52-12.38-3.81-3.01-7.9-6.27-12.16-11.7-5.77-7.36-8.6-14.53-9.97-18.8-1.02-3.17-3.6-12.14-2.64-23.85.43-5.24,1.76-19.15,11.81-31.98,7.96-10.17,17.35-14.49,25.23-18.12,15.3-7.05,28.36-7.86,44.02-8.83,9.13-.56,22.43-1.29,39.33,2.3,8.08,1.71,14.68,3.93,19.37,5.73l.12,45.86c-10.18-6.37-19.5-9.79-26.14-11.7-13.39-3.84-23.75-3.82-26.6-3.78-7.37.12-15.49.34-23.85,5.16-3.15,1.81-7.71,4.53-10.09,10.09-.64,1.51-2.25,5.85-1.03,11.01.92,3.88,3.04,6.57,4.93,8.59,6.75,7.26,15.09,11.04,27.97,16.74,15.9,7.04,15.67,6.81,19.26,8.6,9.42,4.7,15.37,7.67,22.02,13.07,4.35,3.54,10.99,9.03,16.28,18.23,8.02,13.95,7.82,27.5,7.68,32.45Z"/></svg>`,
        url: `https://www.typescriptlang.org/`,
    },
};

const templateLanguage = (url, svg) => {
    return `<a href="${url}" target="_blank">
        ${svg}
    </a>`
};

const config = () => {
    if (widthMax) {
        return 86

    } else if (width1328px) {
        return 85.5
    }
};

const countCards = () => {
    if (widthMax) {
        return 4
    } else if (width1328px) {
        return 3
    }
};

//! Carga de los perfiles, por defecto al carga la pagina tendra los datos de Leonardo Portilla
const project$1 = async (user = `leooportilla`) => {

    try {
        //! Solicitud de datos
        const answer = await fetch(`https://api.github.com/users/${user}/repos`);
        const data = await answer.json();

        console.log(answer);
        //! Si la peticion da error 404 mandamos un mensaje
        if (answer.status == 404) throw new Error(404)

        if (answer.status == 403) throw new Error(403)

        //! Si la peticion es correcta mandamos la informacion a la pagina
        if (answer.status == 200) {

            //! Si la persona no contiene ningun repositorio
            if (data.length > 0) {

                //! InnetHTML para cuando vuelva a cargar un perfil vacie los projectos viejos
                cardsOne.innerHTML = ``;
                cardsTwo.innerHTML = ``;

                //! Ordenar los projectos segun los favoritos de cada cuenta
                data.sort((a, b) => a.stargazers_count - b.stargazers_count);

                //! Por cada elemento del array agregar una cards al container 
                prueba.forEach(repository => {

                    //! Con estas variables guardaremos el nombre y la imagen que le corresponde, como lo haremos en el Switch
                    let imageRepository, nameRepository;

                    //! El Switch evalua el nombre del repositorio si es alguno que tengo guardado en mi repositorio, le agregamos un nombre mas presentable y el nombre que esta guardada la imagen que le corresponda
                    switch (repository.name) {

                        case `portafolio`:
                            imageRepository = `portafolio`;
                            nameRepository = `Portafolio`;
                            break;

                        case `pagina-inicio`:
                            imageRepository = `page-home`;
                            nameRepository = `Pagina de Inicio`;
                            break;

                        case `pagina-huddle`:
                            imageRepository = `page-huddle`;
                            nameRepository = `Pagina de Huddle`;
                            break;

                        case `precio-unico`:
                            imageRepository = `single-price`;
                            nameRepository = `Precio Unico`;
                            break;

                        case `caracteristicas`:
                            imageRepository = `characteristic`;
                            nameRepository = `Pagina de Caracteristicas`;
                            break;

                        case `comentarios`:
                            imageRepository = `comments`;
                            nameRepository = `Pagina de Comentario`;
                            break;

                        case `perfil-tarjeta`:
                            imageRepository = `profile-card`;
                            nameRepository = `Tarjeta de Perfil`;
                            break;

                        case `vista-previa`:
                            imageRepository = `preview`;
                            nameRepository = `Vista Previa`;
                            break;

                        case `suscripcion-tarjeta`:
                            imageRepository = `subscription-card`;
                            nameRepository = `Tarjeta de Suscripcion`;
                            break;

                        case `vista-previa-estadistica`:
                            imageRepository = `preview-statistics`;
                            nameRepository = `Previa Estadisticas`;
                            break;

                        case `NFT-tarjeta`:
                            imageRepository = `nft-card`;
                            nameRepository = `Tarjeta de NFT`;
                            break;

                        case `producto-tarjeta`:
                            imageRepository = `product-card`;
                            nameRepository = `Tarjeta de Productos`;
                            break;

                        case `QR-tarjeta`:
                            imageRepository = `qr-card`;
                            nameRepository = `Tarjeta de QR`;
                            break;

                            //! Corregimos el nombre del repositorio
                        default:
                            imageRepository = `notimage`;

                            //! Cada primera letra de cada palabra sera en Mayuscula
                            nameRepository = repository.name.split(`-`).map(words => {
                                if (words !== "") return words[0].toUpperCase() + words.substring(1)
                            });

                            //! Muchas veces los nombre de los repositorios son extenson
                            //! Con esta condicion validamos si es corto, si lo es lo mostramos completo
                            if (repository.name.length <= 24) {
                                nameRepository = nameRepository.join(` `);

                                //! Si el nombre se hace mucho mas extenso solo mostraremos la primera tres palabras
                            } else {
                                nameRepository = nameRepository.slice(0, 3).join(` `);
                            }
                            break;
                    }

                    //! Guardaremos la descripcion en la variable si existe, si el repositorio no tiene guardaremos en la variable una recomendacion
                    let descriptionRepository;
                    repository.description !== undefined && repository.description !== null ? descriptionRepository = repository.description : descriptionRepository = `No hay una descripción detallada disponible para su repositorio. Una descripción detallada es esencial para ayudar a otros a comprender el propósito y la funcionalidad de su repositorio.`;

                    //! Con este arreglo verificamos que no agregemos un lenguaje dos veces
                    let verify = [];
                    //! Vamos guardando cada plantilla
                    let template = ``;
                    //! Recorremos los lenguajes segun los Topics guardado por el usuario en el topics
                    repository.topics.forEach(topic => {

                        //! Evaluamos si el topics ya no existe en la platilla
                        if (!verify.includes(topic.toUpperCase())) {

                            //! NOTA: A medida que pasa el tiempo ire agregando nuevo lenguajes
                            //! Solo se agregaran los topics que estan en esta lista de Switch
                            switch (topic.toUpperCase()) {
                                case `HTML`:
                                    template += templateLanguage(language.html.url, language.html.svg);
                                    verify.push(`HTML`);
                                    break;

                                case `CSS`:
                                    template += templateLanguage(language.css.url, language.css.svg);
                                    verify.push(`CSS`);
                                    break;

                                case `SCSS`:
                                    template += templateLanguage(language.scss.url, language.scss.svg);
                                    verify.push(`SCSS`);
                                    break;

                                case `JAVASCRIPT`:
                                    template += templateLanguage(language.javascript.url, language.javascript.svg);
                                    verify.push(`JAVASCRIPT`);
                                    break;

                                case `REACTJS`:
                                    template += templateLanguage(language.reatjs.url, language.reatjs.svg);
                                    verify.push(`REACTJS`);
                                    break;

                                case `TYPESCRIPT`:
                                    template += templateLanguage(language.typescript.url, language.typescript.svg);
                                    verify.push(`TYPESCRIPT`);
                                    break;
                            }
                        }
                    });

                    //! Variable para llevar orden de las cards 
                    let count = 1;

                    //! Segun el tamanio de pantalla se ira guardando de manera diferente las cards
                    if (widthMax.matches) {

                        if (count <= 4) {
                            cardsOne.insertAdjacentHTML(`afterbegin`, `<div class="cards__container-card">
                                        <img class="cards__container-card-image" src="./media/images/project_${imageRepository}.png" alt="Projecto del portafolio pagina web">
                    
                                        <div class="cards__container-card-hover hover">
                    
                                            <div class="hover__information">
                    
                                                <div class="hover__information-title">
                                                    <h3 class="hover__information-title-name">${nameRepository}</h3>
                    
                                                    <div class="hover__information-title-star">
                                                        <svg class="icon" viewBox="0 0 33 32" xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M11.9253 2.22132C12.22 1.80344 12.9373 0.814995 14.2612 0.305502C15.3668 -0.120414 16.3243 0.00655705 16.6923 0.0595957C16.9371 0.0949548 17.7262 0.228355 18.5994 0.747491C19.4087 1.22805 19.8812 1.79701 20.3163 2.31936C20.8293 2.93654 21.1662 3.50711 21.5077 4.08893C22.016 4.95201 21.9723 5.03398 22.3185 5.51454C22.4994 5.76527 22.9891 6.43388 23.7485 6.94016C24.1196 7.18767 24.3878 7.28411 26.0376 7.7261C28.1724 8.29988 28.3455 8.3047 28.8975 8.56186C29.4839 8.83509 30.1684 9.16296 30.8047 9.88782C31.3801 10.5452 31.6265 11.1993 31.7574 11.5577C31.8994 11.9451 32.5184 13.6359 31.8526 15.391C31.6608 15.8941 31.4253 16.2428 31.1368 16.6687C30.5645 17.5141 30.17 17.7713 29.5166 18.5363C28.8866 19.2725 28.4828 19.745 28.1818 20.4522C27.6781 21.6383 27.7389 22.8373 27.7997 24.0395C27.8231 24.5072 27.8684 24.856 27.8949 25.7094C27.9214 26.5516 27.9339 26.9727 27.8949 27.3311C27.7421 28.723 27.0279 29.7066 26.8937 29.8866C26.0969 30.9538 25.1145 31.383 24.7013 31.5565C24.3239 31.7157 23.2729 32.1448 21.9833 31.9503C21.5732 31.8892 21.7228 31.8523 19.3136 30.8686C19.3136 30.8686 19.167 30.8092 17.3582 30.0827C16.8155 29.9654 16.0015 29.8673 15.069 30.0827C14.6807 30.1727 14.4374 30.2788 13.7342 30.5745C12.1046 31.2608 11.2906 31.6031 11.1113 31.6562C10.486 31.841 9.23691 32.2091 7.82099 31.7542C6.62495 31.3701 5.90452 30.5874 5.62851 30.2804C5.42111 30.0506 4.68041 29.1875 4.34202 27.8229C4.11435 26.9084 4.17361 26.1659 4.29368 24.6776C4.43246 22.9498 4.65234 22.7328 4.48392 21.8762C4.32019 21.0452 3.95997 20.4602 3.53114 19.7627C2.98536 18.8755 2.73898 18.8481 1.91095 17.7472C1.20767 16.8134 0.855251 16.3457 0.576122 15.6337C0.429541 15.2576 -0.0398322 14.0168 0.242415 12.4401C0.326622 11.9676 0.527781 10.9229 1.33866 9.98265C1.96397 9.25779 2.66725 8.92831 3.24578 8.65668C3.4485 8.56186 3.72919 8.43971 5.24802 8.01861C7.35786 7.43197 7.43427 7.49305 7.91768 7.23267C8.84862 6.73283 9.42092 6.04654 9.82479 5.56276C10.3285 4.95844 10.6856 4.35251 11.3031 3.30299C11.8052 2.44955 11.7148 2.51705 11.9222 2.22132H11.9253Z" />
                                                        </svg>
                    
                                                        <h4 class="count"></h4>
                                                    </div>
                                                </div>
                    
                                                <p class="hover__information-paragraph"></p>
                    
                                                <div class="hover__information-skills skills"></div>
                                            </div>
                    
                                            <div class="hover__footer">
                                                <a class="hover__footer-visit" href="#" target="_blank">
                                                    <svg class="svg" viewBox="0 0 33 32" xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M9.1344 21.3669C15.0351 16.0926 20.9351 10.8175 26.8358 5.54322L13.1725 22.7649L27.1043 27.7463C27.1043 27.7463 28.1439 28.0602 28.4042 27.0535L32.0999 1.14538C32.0999 1.14538 32.1509 -0.418469 30.6247 0.108497C20.6186 5.57034 10.6125 11.0322 0.605696 16.4933C0.514745 16.5568 0.330624 16.7048 0.211575 16.9683C0.16499 17.0721 0.0644261 17.3023 0.113969 17.5991C0.123581 17.6549 0.170166 17.9044 0.37647 18.123C0.568724 18.326 0.787598 18.3849 0.872634 18.4027C3.62631 19.3908 6.37998 20.3781 9.1344 21.3661V21.3669Z" />
                                                        <path
                                                            d="M11.7705 27.7925L17.1566 29.7709C15.938 31.4983 14.7187 33.2264 13.5001 34.9538C13.4409 35.0243 13.2583 35.2219 12.9521 35.2917C12.8486 35.3149 12.575 35.3591 12.2962 35.2087C11.8474 34.9662 11.7764 34.4307 11.7705 34.3796V27.7933V27.7925Z" />
                                                    </svg>
                                                    <h3 class="title">Visitar</h3>
                                                    <svg class="arrow" xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 224.24 559.19">
                                                        <path
                                                            d="m39.13,0c12.98,0,24.39,6.74,30.91,16.92.16.25.32.5.47.75,76.27,119.75,130.54,204.56,139.98,218.21.81,1.17,3.78,5.41,6.65,11.63,6.17,13.37,6.98,25.27,7.1,30.12v1.05c.08,10.51-2.12,18.4-2.98,21.23-1.96,6.46-6.88,15.46-6.88,15.46l-146.79,226.9-.18.28c-6.55,10.02-17.86,16.64-30.73,16.64-20.26,0-36.68-16.43-36.68-36.69,0-7.2,2.07-13.91,5.65-19.57l.55-.86.06-.08,61.83-95.47,82.79-127.84-81.51-126.97L8.22,56.46l-.13-.2c-3.58-5.66-5.65-12.37-5.65-19.57C2.44,16.43,18.87,0,39.13,0Z" />
                                                    </svg>
                                                </a>
                    
                                                <a class="hover__footer-code" href="#" target="_blank">
                                                    <svg class="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 59.53 63.8">
                                                        <path
                                                            d="M-1365.68-2146.35V-2158a11,11,0,0,0-2.35-7.41c-0.44-.54.16-0.47,0.36-0.5,1.44-.21,2.88-0.45,4.29-0.8a19.47,19.47,0,0,0,9.09-4.62,17.61,17.61,0,0,0,5.06-10.3,25.4,25.4,0,0,0,.26-7.7,16,16,0,0,0-3.7-8.33,1.49,1.49,0,0,1-.3-1.57,15.45,15.45,0,0,0-.55-9.9,0.9,0.9,0,0,0-.93-0.62,11.69,11.69,0,0,0-4.94,1,30.11,30.11,0,0,0-5.63,3,1.64,1.64,0,0,1-1.42.22,40,40,0,0,0-11.57-1.2,35.56,35.56,0,0,0-8.14,1.13,2.44,2.44,0,0,1-2.14-.36,25.32,25.32,0,0,0-7.92-3.59,10,10,0,0,0-2.35-.21,0.91,0.91,0,0,0-1,.68,15.55,15.55,0,0,0-.44,9.91,1.38,1.38,0,0,1-.3,1.48,16.39,16.39,0,0,0-3.87,11,26,26,0,0,0,1.72,9.74,16.34,16.34,0,0,0,9.93,9.33,36.17,36.17,0,0,0,7.24,1.7c0.49,0.08.6,0.21,0.24,0.61a8.14,8.14,0,0,0-1.92,4.1A1.44,1.44,0,0,1-1388-2160a11.46,11.46,0,0,1-5.78.56,8.4,8.4,0,0,1-5.58-4,10.87,10.87,0,0,0-3.78-3.83,5.92,5.92,0,0,0-4.26-.84c-1,.22-1.19.9-0.48,1.65a16.36,16.36,0,0,0,2.06,1.54,13,13,0,0,1,3.91,5.56,9.8,9.8,0,0,0,7.68,6.06,15.65,15.65,0,0,0,5.91-.06c0.82-.14.94,0,1,0.76q0.06,2.54.11,5.09v0.65a3.79,3.79,0,0,1-.1.83h21.66s0-.08,0-0.13A1.85,1.85,0,0,1-1365.68-2146.35Z"
                                                            transform="translate(1408.33 2209.8)" />
                                                    </svg>
                                                    <h3 class="title">Codigo</h3>
                                                    <svg class="arrow" xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 224.24 559.19">
                                                        <path
                                                            d="m39.13,0c12.98,0,24.39,6.74,30.91,16.92.16.25.32.5.47.75,76.27,119.75,130.54,204.56,139.98,218.21.81,1.17,3.78,5.41,6.65,11.63,6.17,13.37,6.98,25.27,7.1,30.12v1.05c.08,10.51-2.12,18.4-2.98,21.23-1.96,6.46-6.88,15.46-6.88,15.46l-146.79,226.9-.18.28c-6.55,10.02-17.86,16.64-30.73,16.64-20.26,0-36.68-16.43-36.68-36.69,0-7.2,2.07-13.91,5.65-19.57l.55-.86.06-.08,61.83-95.47,82.79-127.84-81.51-126.97L8.22,56.46l-.13-.2c-3.58-5.66-5.65-12.37-5.65-19.57C2.44,16.43,18.87,0,39.13,0Z" />
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                         </div>`);
                        }

                        if (count > 4 && count <= 8) {
                            cardsTwo.insertAdjacentHTML(`afterbegin`, `<div class="cards__container-card">
                                        <img class="cards__container-card-image" src="./media/images/project_${imageRepository}.png" alt="Projecto del portafolio pagina web">
                    
                                        <div class="cards__container-card-hover hover">
                    
                                            <div class="hover__information">
                    
                                                <div class="hover__information-title">
                                                    <h3 class="hover__information-title-name">${nameRepository}</h3>
                    
                                                    <div class="hover__information-title-star">
                                                        <svg class="icon" viewBox="0 0 33 32" xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M11.9253 2.22132C12.22 1.80344 12.9373 0.814995 14.2612 0.305502C15.3668 -0.120414 16.3243 0.00655705 16.6923 0.0595957C16.9371 0.0949548 17.7262 0.228355 18.5994 0.747491C19.4087 1.22805 19.8812 1.79701 20.3163 2.31936C20.8293 2.93654 21.1662 3.50711 21.5077 4.08893C22.016 4.95201 21.9723 5.03398 22.3185 5.51454C22.4994 5.76527 22.9891 6.43388 23.7485 6.94016C24.1196 7.18767 24.3878 7.28411 26.0376 7.7261C28.1724 8.29988 28.3455 8.3047 28.8975 8.56186C29.4839 8.83509 30.1684 9.16296 30.8047 9.88782C31.3801 10.5452 31.6265 11.1993 31.7574 11.5577C31.8994 11.9451 32.5184 13.6359 31.8526 15.391C31.6608 15.8941 31.4253 16.2428 31.1368 16.6687C30.5645 17.5141 30.17 17.7713 29.5166 18.5363C28.8866 19.2725 28.4828 19.745 28.1818 20.4522C27.6781 21.6383 27.7389 22.8373 27.7997 24.0395C27.8231 24.5072 27.8684 24.856 27.8949 25.7094C27.9214 26.5516 27.9339 26.9727 27.8949 27.3311C27.7421 28.723 27.0279 29.7066 26.8937 29.8866C26.0969 30.9538 25.1145 31.383 24.7013 31.5565C24.3239 31.7157 23.2729 32.1448 21.9833 31.9503C21.5732 31.8892 21.7228 31.8523 19.3136 30.8686C19.3136 30.8686 19.167 30.8092 17.3582 30.0827C16.8155 29.9654 16.0015 29.8673 15.069 30.0827C14.6807 30.1727 14.4374 30.2788 13.7342 30.5745C12.1046 31.2608 11.2906 31.6031 11.1113 31.6562C10.486 31.841 9.23691 32.2091 7.82099 31.7542C6.62495 31.3701 5.90452 30.5874 5.62851 30.2804C5.42111 30.0506 4.68041 29.1875 4.34202 27.8229C4.11435 26.9084 4.17361 26.1659 4.29368 24.6776C4.43246 22.9498 4.65234 22.7328 4.48392 21.8762C4.32019 21.0452 3.95997 20.4602 3.53114 19.7627C2.98536 18.8755 2.73898 18.8481 1.91095 17.7472C1.20767 16.8134 0.855251 16.3457 0.576122 15.6337C0.429541 15.2576 -0.0398322 14.0168 0.242415 12.4401C0.326622 11.9676 0.527781 10.9229 1.33866 9.98265C1.96397 9.25779 2.66725 8.92831 3.24578 8.65668C3.4485 8.56186 3.72919 8.43971 5.24802 8.01861C7.35786 7.43197 7.43427 7.49305 7.91768 7.23267C8.84862 6.73283 9.42092 6.04654 9.82479 5.56276C10.3285 4.95844 10.6856 4.35251 11.3031 3.30299C11.8052 2.44955 11.7148 2.51705 11.9222 2.22132H11.9253Z" />
                                                        </svg>
                    
                                                        <h4 class="count"></h4>
                                                    </div>
                                                </div>
                    
                                                <p class="hover__information-paragraph"></p>
                    
                                                <div class="hover__information-skills skills"></div>
                                            </div>
                    
                                            <div class="hover__footer">
                                                <a class="hover__footer-visit" href="#" target="_blank">
                                                    <svg class="svg" viewBox="0 0 33 32" xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M9.1344 21.3669C15.0351 16.0926 20.9351 10.8175 26.8358 5.54322L13.1725 22.7649L27.1043 27.7463C27.1043 27.7463 28.1439 28.0602 28.4042 27.0535L32.0999 1.14538C32.0999 1.14538 32.1509 -0.418469 30.6247 0.108497C20.6186 5.57034 10.6125 11.0322 0.605696 16.4933C0.514745 16.5568 0.330624 16.7048 0.211575 16.9683C0.16499 17.0721 0.0644261 17.3023 0.113969 17.5991C0.123581 17.6549 0.170166 17.9044 0.37647 18.123C0.568724 18.326 0.787598 18.3849 0.872634 18.4027C3.62631 19.3908 6.37998 20.3781 9.1344 21.3661V21.3669Z" />
                                                        <path
                                                            d="M11.7705 27.7925L17.1566 29.7709C15.938 31.4983 14.7187 33.2264 13.5001 34.9538C13.4409 35.0243 13.2583 35.2219 12.9521 35.2917C12.8486 35.3149 12.575 35.3591 12.2962 35.2087C11.8474 34.9662 11.7764 34.4307 11.7705 34.3796V27.7933V27.7925Z" />
                                                    </svg>
                                                    <h3 class="title">Visitar</h3>
                                                    <svg class="arrow" xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 224.24 559.19">
                                                        <path
                                                            d="m39.13,0c12.98,0,24.39,6.74,30.91,16.92.16.25.32.5.47.75,76.27,119.75,130.54,204.56,139.98,218.21.81,1.17,3.78,5.41,6.65,11.63,6.17,13.37,6.98,25.27,7.1,30.12v1.05c.08,10.51-2.12,18.4-2.98,21.23-1.96,6.46-6.88,15.46-6.88,15.46l-146.79,226.9-.18.28c-6.55,10.02-17.86,16.64-30.73,16.64-20.26,0-36.68-16.43-36.68-36.69,0-7.2,2.07-13.91,5.65-19.57l.55-.86.06-.08,61.83-95.47,82.79-127.84-81.51-126.97L8.22,56.46l-.13-.2c-3.58-5.66-5.65-12.37-5.65-19.57C2.44,16.43,18.87,0,39.13,0Z" />
                                                    </svg>
                                                </a>
                    
                                                <a class="hover__footer-code" href="#" target="_blank">
                                                    <svg class="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 59.53 63.8">
                                                        <path
                                                            d="M-1365.68-2146.35V-2158a11,11,0,0,0-2.35-7.41c-0.44-.54.16-0.47,0.36-0.5,1.44-.21,2.88-0.45,4.29-0.8a19.47,19.47,0,0,0,9.09-4.62,17.61,17.61,0,0,0,5.06-10.3,25.4,25.4,0,0,0,.26-7.7,16,16,0,0,0-3.7-8.33,1.49,1.49,0,0,1-.3-1.57,15.45,15.45,0,0,0-.55-9.9,0.9,0.9,0,0,0-.93-0.62,11.69,11.69,0,0,0-4.94,1,30.11,30.11,0,0,0-5.63,3,1.64,1.64,0,0,1-1.42.22,40,40,0,0,0-11.57-1.2,35.56,35.56,0,0,0-8.14,1.13,2.44,2.44,0,0,1-2.14-.36,25.32,25.32,0,0,0-7.92-3.59,10,10,0,0,0-2.35-.21,0.91,0.91,0,0,0-1,.68,15.55,15.55,0,0,0-.44,9.91,1.38,1.38,0,0,1-.3,1.48,16.39,16.39,0,0,0-3.87,11,26,26,0,0,0,1.72,9.74,16.34,16.34,0,0,0,9.93,9.33,36.17,36.17,0,0,0,7.24,1.7c0.49,0.08.6,0.21,0.24,0.61a8.14,8.14,0,0,0-1.92,4.1A1.44,1.44,0,0,1-1388-2160a11.46,11.46,0,0,1-5.78.56,8.4,8.4,0,0,1-5.58-4,10.87,10.87,0,0,0-3.78-3.83,5.92,5.92,0,0,0-4.26-.84c-1,.22-1.19.9-0.48,1.65a16.36,16.36,0,0,0,2.06,1.54,13,13,0,0,1,3.91,5.56,9.8,9.8,0,0,0,7.68,6.06,15.65,15.65,0,0,0,5.91-.06c0.82-.14.94,0,1,0.76q0.06,2.54.11,5.09v0.65a3.79,3.79,0,0,1-.1.83h21.66s0-.08,0-0.13A1.85,1.85,0,0,1-1365.68-2146.35Z"
                                                            transform="translate(1408.33 2209.8)" />
                                                    </svg>
                                                    <h3 class="title">Codigo</h3>
                                                    <svg class="arrow" xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 224.24 559.19">
                                                        <path
                                                            d="m39.13,0c12.98,0,24.39,6.74,30.91,16.92.16.25.32.5.47.75,76.27,119.75,130.54,204.56,139.98,218.21.81,1.17,3.78,5.41,6.65,11.63,6.17,13.37,6.98,25.27,7.1,30.12v1.05c.08,10.51-2.12,18.4-2.98,21.23-1.96,6.46-6.88,15.46-6.88,15.46l-146.79,226.9-.18.28c-6.55,10.02-17.86,16.64-30.73,16.64-20.26,0-36.68-16.43-36.68-36.69,0-7.2,2.07-13.91,5.65-19.57l.55-.86.06-.08,61.83-95.47,82.79-127.84-81.51-126.97L8.22,56.46l-.13-.2c-3.58-5.66-5.65-12.37-5.65-19.57C2.44,16.43,18.87,0,39.13,0Z" />
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                         </div>`);
                        }

                        if (count === 8) {
                            count = 0;
                        }

                    } else if (width1328px.matches) {

                        if (count <= 3) {
                            cardsOne.insertAdjacentHTML(`afterbegin`, `<div class="cards__container-card">
                                        <img class="cards__container-card-image" src="./media/images/project_${imageRepository}.png" alt="Projecto del portafolio pagina web">
                    
                                        <div class="cards__container-card-hover hover">
                    
                                            <div class="hover__information">
                    
                                                <div class="hover__information-title">
                                                    <h3 class="hover__information-title-name">${nameRepository}</h3>
                    
                                                    <div class="hover__information-title-star">
                                                        <svg class="icon" viewBox="0 0 33 32" xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M11.9253 2.22132C12.22 1.80344 12.9373 0.814995 14.2612 0.305502C15.3668 -0.120414 16.3243 0.00655705 16.6923 0.0595957C16.9371 0.0949548 17.7262 0.228355 18.5994 0.747491C19.4087 1.22805 19.8812 1.79701 20.3163 2.31936C20.8293 2.93654 21.1662 3.50711 21.5077 4.08893C22.016 4.95201 21.9723 5.03398 22.3185 5.51454C22.4994 5.76527 22.9891 6.43388 23.7485 6.94016C24.1196 7.18767 24.3878 7.28411 26.0376 7.7261C28.1724 8.29988 28.3455 8.3047 28.8975 8.56186C29.4839 8.83509 30.1684 9.16296 30.8047 9.88782C31.3801 10.5452 31.6265 11.1993 31.7574 11.5577C31.8994 11.9451 32.5184 13.6359 31.8526 15.391C31.6608 15.8941 31.4253 16.2428 31.1368 16.6687C30.5645 17.5141 30.17 17.7713 29.5166 18.5363C28.8866 19.2725 28.4828 19.745 28.1818 20.4522C27.6781 21.6383 27.7389 22.8373 27.7997 24.0395C27.8231 24.5072 27.8684 24.856 27.8949 25.7094C27.9214 26.5516 27.9339 26.9727 27.8949 27.3311C27.7421 28.723 27.0279 29.7066 26.8937 29.8866C26.0969 30.9538 25.1145 31.383 24.7013 31.5565C24.3239 31.7157 23.2729 32.1448 21.9833 31.9503C21.5732 31.8892 21.7228 31.8523 19.3136 30.8686C19.3136 30.8686 19.167 30.8092 17.3582 30.0827C16.8155 29.9654 16.0015 29.8673 15.069 30.0827C14.6807 30.1727 14.4374 30.2788 13.7342 30.5745C12.1046 31.2608 11.2906 31.6031 11.1113 31.6562C10.486 31.841 9.23691 32.2091 7.82099 31.7542C6.62495 31.3701 5.90452 30.5874 5.62851 30.2804C5.42111 30.0506 4.68041 29.1875 4.34202 27.8229C4.11435 26.9084 4.17361 26.1659 4.29368 24.6776C4.43246 22.9498 4.65234 22.7328 4.48392 21.8762C4.32019 21.0452 3.95997 20.4602 3.53114 19.7627C2.98536 18.8755 2.73898 18.8481 1.91095 17.7472C1.20767 16.8134 0.855251 16.3457 0.576122 15.6337C0.429541 15.2576 -0.0398322 14.0168 0.242415 12.4401C0.326622 11.9676 0.527781 10.9229 1.33866 9.98265C1.96397 9.25779 2.66725 8.92831 3.24578 8.65668C3.4485 8.56186 3.72919 8.43971 5.24802 8.01861C7.35786 7.43197 7.43427 7.49305 7.91768 7.23267C8.84862 6.73283 9.42092 6.04654 9.82479 5.56276C10.3285 4.95844 10.6856 4.35251 11.3031 3.30299C11.8052 2.44955 11.7148 2.51705 11.9222 2.22132H11.9253Z" />
                                                        </svg>
                    
                                                        <h4 class="count"></h4>
                                                    </div>
                                                </div>
                    
                                                <p class="hover__information-paragraph"></p>
                    
                                                <div class="hover__information-skills skills"></div>
                                            </div>
                    
                                            <div class="hover__footer">
                                                <a class="hover__footer-visit" href="#" target="_blank">
                                                    <svg class="svg" viewBox="0 0 33 32" xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M9.1344 21.3669C15.0351 16.0926 20.9351 10.8175 26.8358 5.54322L13.1725 22.7649L27.1043 27.7463C27.1043 27.7463 28.1439 28.0602 28.4042 27.0535L32.0999 1.14538C32.0999 1.14538 32.1509 -0.418469 30.6247 0.108497C20.6186 5.57034 10.6125 11.0322 0.605696 16.4933C0.514745 16.5568 0.330624 16.7048 0.211575 16.9683C0.16499 17.0721 0.0644261 17.3023 0.113969 17.5991C0.123581 17.6549 0.170166 17.9044 0.37647 18.123C0.568724 18.326 0.787598 18.3849 0.872634 18.4027C3.62631 19.3908 6.37998 20.3781 9.1344 21.3661V21.3669Z" />
                                                        <path
                                                            d="M11.7705 27.7925L17.1566 29.7709C15.938 31.4983 14.7187 33.2264 13.5001 34.9538C13.4409 35.0243 13.2583 35.2219 12.9521 35.2917C12.8486 35.3149 12.575 35.3591 12.2962 35.2087C11.8474 34.9662 11.7764 34.4307 11.7705 34.3796V27.7933V27.7925Z" />
                                                    </svg>
                                                    <h3 class="title">Visitar</h3>
                                                    <svg class="arrow" xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 224.24 559.19">
                                                        <path
                                                            d="m39.13,0c12.98,0,24.39,6.74,30.91,16.92.16.25.32.5.47.75,76.27,119.75,130.54,204.56,139.98,218.21.81,1.17,3.78,5.41,6.65,11.63,6.17,13.37,6.98,25.27,7.1,30.12v1.05c.08,10.51-2.12,18.4-2.98,21.23-1.96,6.46-6.88,15.46-6.88,15.46l-146.79,226.9-.18.28c-6.55,10.02-17.86,16.64-30.73,16.64-20.26,0-36.68-16.43-36.68-36.69,0-7.2,2.07-13.91,5.65-19.57l.55-.86.06-.08,61.83-95.47,82.79-127.84-81.51-126.97L8.22,56.46l-.13-.2c-3.58-5.66-5.65-12.37-5.65-19.57C2.44,16.43,18.87,0,39.13,0Z" />
                                                    </svg>
                                                </a>
                    
                                                <a class="hover__footer-code" href="#" target="_blank">
                                                    <svg class="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 59.53 63.8">
                                                        <path
                                                            d="M-1365.68-2146.35V-2158a11,11,0,0,0-2.35-7.41c-0.44-.54.16-0.47,0.36-0.5,1.44-.21,2.88-0.45,4.29-0.8a19.47,19.47,0,0,0,9.09-4.62,17.61,17.61,0,0,0,5.06-10.3,25.4,25.4,0,0,0,.26-7.7,16,16,0,0,0-3.7-8.33,1.49,1.49,0,0,1-.3-1.57,15.45,15.45,0,0,0-.55-9.9,0.9,0.9,0,0,0-.93-0.62,11.69,11.69,0,0,0-4.94,1,30.11,30.11,0,0,0-5.63,3,1.64,1.64,0,0,1-1.42.22,40,40,0,0,0-11.57-1.2,35.56,35.56,0,0,0-8.14,1.13,2.44,2.44,0,0,1-2.14-.36,25.32,25.32,0,0,0-7.92-3.59,10,10,0,0,0-2.35-.21,0.91,0.91,0,0,0-1,.68,15.55,15.55,0,0,0-.44,9.91,1.38,1.38,0,0,1-.3,1.48,16.39,16.39,0,0,0-3.87,11,26,26,0,0,0,1.72,9.74,16.34,16.34,0,0,0,9.93,9.33,36.17,36.17,0,0,0,7.24,1.7c0.49,0.08.6,0.21,0.24,0.61a8.14,8.14,0,0,0-1.92,4.1A1.44,1.44,0,0,1-1388-2160a11.46,11.46,0,0,1-5.78.56,8.4,8.4,0,0,1-5.58-4,10.87,10.87,0,0,0-3.78-3.83,5.92,5.92,0,0,0-4.26-.84c-1,.22-1.19.9-0.48,1.65a16.36,16.36,0,0,0,2.06,1.54,13,13,0,0,1,3.91,5.56,9.8,9.8,0,0,0,7.68,6.06,15.65,15.65,0,0,0,5.91-.06c0.82-.14.94,0,1,0.76q0.06,2.54.11,5.09v0.65a3.79,3.79,0,0,1-.1.83h21.66s0-.08,0-0.13A1.85,1.85,0,0,1-1365.68-2146.35Z"
                                                            transform="translate(1408.33 2209.8)" />
                                                    </svg>
                                                    <h3 class="title">Codigo</h3>
                                                    <svg class="arrow" xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 224.24 559.19">
                                                        <path
                                                            d="m39.13,0c12.98,0,24.39,6.74,30.91,16.92.16.25.32.5.47.75,76.27,119.75,130.54,204.56,139.98,218.21.81,1.17,3.78,5.41,6.65,11.63,6.17,13.37,6.98,25.27,7.1,30.12v1.05c.08,10.51-2.12,18.4-2.98,21.23-1.96,6.46-6.88,15.46-6.88,15.46l-146.79,226.9-.18.28c-6.55,10.02-17.86,16.64-30.73,16.64-20.26,0-36.68-16.43-36.68-36.69,0-7.2,2.07-13.91,5.65-19.57l.55-.86.06-.08,61.83-95.47,82.79-127.84-81.51-126.97L8.22,56.46l-.13-.2c-3.58-5.66-5.65-12.37-5.65-19.57C2.44,16.43,18.87,0,39.13,0Z" />
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                         </div>`);
                        }

                        if (count > 3 && count <= 6) {
                            cardsTwo.insertAdjacentHTML(`afterbegin`, `<div class="cards__container-card">
                                        <img class="cards__container-card-image" src="./media/images/project_${imageRepository}.png" alt="Projecto del portafolio pagina web">
                    
                                        <div class="cards__container-card-hover hover">
                    
                                            <div class="hover__information">
                    
                                                <div class="hover__information-title">
                                                    <h3 class="hover__information-title-name">${nameRepository}</h3>
                    
                                                    <div class="hover__information-title-star">
                                                        <svg class="icon" viewBox="0 0 33 32" xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M11.9253 2.22132C12.22 1.80344 12.9373 0.814995 14.2612 0.305502C15.3668 -0.120414 16.3243 0.00655705 16.6923 0.0595957C16.9371 0.0949548 17.7262 0.228355 18.5994 0.747491C19.4087 1.22805 19.8812 1.79701 20.3163 2.31936C20.8293 2.93654 21.1662 3.50711 21.5077 4.08893C22.016 4.95201 21.9723 5.03398 22.3185 5.51454C22.4994 5.76527 22.9891 6.43388 23.7485 6.94016C24.1196 7.18767 24.3878 7.28411 26.0376 7.7261C28.1724 8.29988 28.3455 8.3047 28.8975 8.56186C29.4839 8.83509 30.1684 9.16296 30.8047 9.88782C31.3801 10.5452 31.6265 11.1993 31.7574 11.5577C31.8994 11.9451 32.5184 13.6359 31.8526 15.391C31.6608 15.8941 31.4253 16.2428 31.1368 16.6687C30.5645 17.5141 30.17 17.7713 29.5166 18.5363C28.8866 19.2725 28.4828 19.745 28.1818 20.4522C27.6781 21.6383 27.7389 22.8373 27.7997 24.0395C27.8231 24.5072 27.8684 24.856 27.8949 25.7094C27.9214 26.5516 27.9339 26.9727 27.8949 27.3311C27.7421 28.723 27.0279 29.7066 26.8937 29.8866C26.0969 30.9538 25.1145 31.383 24.7013 31.5565C24.3239 31.7157 23.2729 32.1448 21.9833 31.9503C21.5732 31.8892 21.7228 31.8523 19.3136 30.8686C19.3136 30.8686 19.167 30.8092 17.3582 30.0827C16.8155 29.9654 16.0015 29.8673 15.069 30.0827C14.6807 30.1727 14.4374 30.2788 13.7342 30.5745C12.1046 31.2608 11.2906 31.6031 11.1113 31.6562C10.486 31.841 9.23691 32.2091 7.82099 31.7542C6.62495 31.3701 5.90452 30.5874 5.62851 30.2804C5.42111 30.0506 4.68041 29.1875 4.34202 27.8229C4.11435 26.9084 4.17361 26.1659 4.29368 24.6776C4.43246 22.9498 4.65234 22.7328 4.48392 21.8762C4.32019 21.0452 3.95997 20.4602 3.53114 19.7627C2.98536 18.8755 2.73898 18.8481 1.91095 17.7472C1.20767 16.8134 0.855251 16.3457 0.576122 15.6337C0.429541 15.2576 -0.0398322 14.0168 0.242415 12.4401C0.326622 11.9676 0.527781 10.9229 1.33866 9.98265C1.96397 9.25779 2.66725 8.92831 3.24578 8.65668C3.4485 8.56186 3.72919 8.43971 5.24802 8.01861C7.35786 7.43197 7.43427 7.49305 7.91768 7.23267C8.84862 6.73283 9.42092 6.04654 9.82479 5.56276C10.3285 4.95844 10.6856 4.35251 11.3031 3.30299C11.8052 2.44955 11.7148 2.51705 11.9222 2.22132H11.9253Z" />
                                                        </svg>
                    
                                                        <h4 class="count"></h4>
                                                    </div>
                                                </div>
                    
                                                <p class="hover__information-paragraph"></p>
                    
                                                <div class="hover__information-skills skills"></div>
                                            </div>
                    
                                            <div class="hover__footer">
                                                <a class="hover__footer-visit" href="#" target="_blank">
                                                    <svg class="svg" viewBox="0 0 33 32" xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M9.1344 21.3669C15.0351 16.0926 20.9351 10.8175 26.8358 5.54322L13.1725 22.7649L27.1043 27.7463C27.1043 27.7463 28.1439 28.0602 28.4042 27.0535L32.0999 1.14538C32.0999 1.14538 32.1509 -0.418469 30.6247 0.108497C20.6186 5.57034 10.6125 11.0322 0.605696 16.4933C0.514745 16.5568 0.330624 16.7048 0.211575 16.9683C0.16499 17.0721 0.0644261 17.3023 0.113969 17.5991C0.123581 17.6549 0.170166 17.9044 0.37647 18.123C0.568724 18.326 0.787598 18.3849 0.872634 18.4027C3.62631 19.3908 6.37998 20.3781 9.1344 21.3661V21.3669Z" />
                                                        <path
                                                            d="M11.7705 27.7925L17.1566 29.7709C15.938 31.4983 14.7187 33.2264 13.5001 34.9538C13.4409 35.0243 13.2583 35.2219 12.9521 35.2917C12.8486 35.3149 12.575 35.3591 12.2962 35.2087C11.8474 34.9662 11.7764 34.4307 11.7705 34.3796V27.7933V27.7925Z" />
                                                    </svg>
                                                    <h3 class="title">Visitar</h3>
                                                    <svg class="arrow" xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 224.24 559.19">
                                                        <path
                                                            d="m39.13,0c12.98,0,24.39,6.74,30.91,16.92.16.25.32.5.47.75,76.27,119.75,130.54,204.56,139.98,218.21.81,1.17,3.78,5.41,6.65,11.63,6.17,13.37,6.98,25.27,7.1,30.12v1.05c.08,10.51-2.12,18.4-2.98,21.23-1.96,6.46-6.88,15.46-6.88,15.46l-146.79,226.9-.18.28c-6.55,10.02-17.86,16.64-30.73,16.64-20.26,0-36.68-16.43-36.68-36.69,0-7.2,2.07-13.91,5.65-19.57l.55-.86.06-.08,61.83-95.47,82.79-127.84-81.51-126.97L8.22,56.46l-.13-.2c-3.58-5.66-5.65-12.37-5.65-19.57C2.44,16.43,18.87,0,39.13,0Z" />
                                                    </svg>
                                                </a>
                    
                                                <a class="hover__footer-code" href="#" target="_blank">
                                                    <svg class="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 59.53 63.8">
                                                        <path
                                                            d="M-1365.68-2146.35V-2158a11,11,0,0,0-2.35-7.41c-0.44-.54.16-0.47,0.36-0.5,1.44-.21,2.88-0.45,4.29-0.8a19.47,19.47,0,0,0,9.09-4.62,17.61,17.61,0,0,0,5.06-10.3,25.4,25.4,0,0,0,.26-7.7,16,16,0,0,0-3.7-8.33,1.49,1.49,0,0,1-.3-1.57,15.45,15.45,0,0,0-.55-9.9,0.9,0.9,0,0,0-.93-0.62,11.69,11.69,0,0,0-4.94,1,30.11,30.11,0,0,0-5.63,3,1.64,1.64,0,0,1-1.42.22,40,40,0,0,0-11.57-1.2,35.56,35.56,0,0,0-8.14,1.13,2.44,2.44,0,0,1-2.14-.36,25.32,25.32,0,0,0-7.92-3.59,10,10,0,0,0-2.35-.21,0.91,0.91,0,0,0-1,.68,15.55,15.55,0,0,0-.44,9.91,1.38,1.38,0,0,1-.3,1.48,16.39,16.39,0,0,0-3.87,11,26,26,0,0,0,1.72,9.74,16.34,16.34,0,0,0,9.93,9.33,36.17,36.17,0,0,0,7.24,1.7c0.49,0.08.6,0.21,0.24,0.61a8.14,8.14,0,0,0-1.92,4.1A1.44,1.44,0,0,1-1388-2160a11.46,11.46,0,0,1-5.78.56,8.4,8.4,0,0,1-5.58-4,10.87,10.87,0,0,0-3.78-3.83,5.92,5.92,0,0,0-4.26-.84c-1,.22-1.19.9-0.48,1.65a16.36,16.36,0,0,0,2.06,1.54,13,13,0,0,1,3.91,5.56,9.8,9.8,0,0,0,7.68,6.06,15.65,15.65,0,0,0,5.91-.06c0.82-.14.94,0,1,0.76q0.06,2.54.11,5.09v0.65a3.79,3.79,0,0,1-.1.83h21.66s0-.08,0-0.13A1.85,1.85,0,0,1-1365.68-2146.35Z"
                                                            transform="translate(1408.33 2209.8)" />
                                                    </svg>
                                                    <h3 class="title">Codigo</h3>
                                                    <svg class="arrow" xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 224.24 559.19">
                                                        <path
                                                            d="m39.13,0c12.98,0,24.39,6.74,30.91,16.92.16.25.32.5.47.75,76.27,119.75,130.54,204.56,139.98,218.21.81,1.17,3.78,5.41,6.65,11.63,6.17,13.37,6.98,25.27,7.1,30.12v1.05c.08,10.51-2.12,18.4-2.98,21.23-1.96,6.46-6.88,15.46-6.88,15.46l-146.79,226.9-.18.28c-6.55,10.02-17.86,16.64-30.73,16.64-20.26,0-36.68-16.43-36.68-36.69,0-7.2,2.07-13.91,5.65-19.57l.55-.86.06-.08,61.83-95.47,82.79-127.84-81.51-126.97L8.22,56.46l-.13-.2c-3.58-5.66-5.65-12.37-5.65-19.57C2.44,16.43,18.87,0,39.13,0Z" />
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                         </div>`);
                        }

                        if (count === 6) {
                            count = 0;
                        }
                    }

                    count++;
                });

                //! Calcula cuantas seccion deben a ver en el container de las cards
                let lenght = Math.ceil((prueba.length / countCards()) / 2);

                //! Calcula el width para el container
                let widthTotal = Math.ceil(lenght * config());
                cardsOne.style.width = `${widthTotal}vw`;
                cardsTwo.style.width = `${widthTotal}vw`;

                //! Luego de tener todo las configuracion, agregamos las cards al DOM
                document.querySelector(`.cards`).appendChild(cardsOne);
                document.querySelector(`.cards`).appendChild(cardsTwo);

                //! Para esconder las flechas cuando no tenga mas de una seccion el container de las cards
                if (lenght > 1) {

                    //! Variable necesarias para ir guardando el estado del movimiento en el slide
                    let countMove = 1;
                    let translate = 0;

                    //! Pendiente al evento de la flecha derecha
                    rightButton.addEventListener(`click`, () => {

                        //! Si el movimiento es menor a la secciones calculadas puede trasladarse otro seccion mas
                        if (countMove < lenght) {
                            translate += config();
                            countMove++;
                            cardsOne.style.transform = `translateX(-${translate}vw)`;
                            cardsTwo.style.transform = `translateX(-${translate}vw)`;

                            //! Validad en cada movimiento si llegar al final de todas la secciones para rotar las flechas
                            if (countMove === lenght) {
                                setTimeout(() => {
                                    rightButton.classList.add(`final-arrow`);
                                }, 1500);
                            }

                            //! Por si el movimiento es mayor a la seccion, por ende la clase del final de las flecha debe estar activo debemos colocar todo por defecto
                        } else {
                            translate = 0;
                            countMove = 1;
                            cardsOne.style.transform = `translateX(-${translate}vw)`;
                            cardsTwo.style.transform = `translateX(-${translate}vw)`;
                            rightButton.classList.remove(`final-arrow`);
                        }
                    });

                    leftButton.addEventListener(`click`, () => {

                        if (countMove > 0) {
                            translate -= config();
                            countMove--;
                            cardsOne.style.transform = `translateX(-${translate}vw)`;
                            cardsTwo.style.transform = `translateX(-${translate}vw)`;
                        }

                        //! Si en dado caso el usuario llega al final y luego se devulve a la seccion anterior, hacemos que las flechas de las izquierda se elimen las clases
                        if (rightButton.classList.contains(`final-arrow`)) rightButton.classList.remove(`final-arrow`);
                    });

                    //! Si no las tienes, escondemos las flecha quitandole la clase
                } else {
                    leftButton.classList.remove(`active-arrow`);
                    rightButton.classList.remove(`active-arrow`);
                }

            } else {
                containerCards.innerHTML = ``;
                containerCards.insertAdjacentHTML(`afterbegin`, `<div class="cards__error">
                                                                    <svg class="cards__error-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 634.73 597.81">
                                                                        <path d="m634.37,497.32c-.25-2.76-1.08-10.84-4.28-20.94-3.44-10.85-8.08-19.23-11.77-24.92L398.65,48.2c-1.31-2.55-3.2-5.91-5.81-9.63-1.1-1.57-6.3-8.85-15.59-16.66-3.7-3.11-10.94-9.11-22.01-14.07-3.29-1.47-15.25-6.58-31.8-7.64-11.32-.73-20.14.74-24.15,1.53-4.01.79-12.01,2.65-21.4,7.03-10.15,4.74-17.15,10.2-20.49,13-3.03,2.53-9.14,7.99-15.29,16.35-5.01,6.83-8.34,13.28-10.54,18.35L25.35,435.11c-2.66,4.45-6.41,10.93-10.55,18.95-.95,1.85-6.66,12.95-9.32,19.57-8.83,21.92-4.54,45.13-3.67,49.53,5.01,25.23,19.19,41.34,25.68,47.84,16.77,16.79,35.08,22.32,39.44,23.54,10.81,3.05,20.26,3.43,26.75,3.22l446.52-.31c4.01.24,9.36.26,15.6-.61,6.28-.88,10.89-2.32,13.75-3.21,3.72-1.16,11.12-3.72,18.96-8.26,2.93-1.69,16.97-10.04,29.05-27.05,3.52-4.97,10.6-15.14,14.52-30.42.81-3.18,3.66-15.06,2.29-30.58Zm-316.89,26.14c-20.52,0-37.15-16.63-37.15-37.14s16.63-37.15,37.15-37.15,37.14,16.63,37.14,37.15-16.63,37.14-37.14,37.14Zm37.14-149.04c0,20.51-16.63,37.14-37.14,37.14s-37.15-16.63-37.15-37.14v-185.73c0-20.52,16.63-37.15,37.15-37.15s37.14,16.63,37.14,37.15v185.73Z"/>
                                                                    </svg>
                                                                    <h1 class="cards__error-title">No contiene ningun repositorio</h1>
                                                                 </div>`);
                leftButton.classList.remove(`active-arrow`);
                rightButton.classList.remove(`active-arrow`);
            }
        }

        //! Si capturamos algun error, toda la informacion la mandamos por defecto
    } catch (error) {
        containerCards.innerHTML = ``;

        if (error.message === `403`) {
            containerCards.insertAdjacentHTML(`afterbegin`, `<div class="cards__error">
                                                                <svg class="cards__error-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 634.73 597.81">
                                                                    <path d="m634.37,497.32c-.25-2.76-1.08-10.84-4.28-20.94-3.44-10.85-8.08-19.23-11.77-24.92L398.65,48.2c-1.31-2.55-3.2-5.91-5.81-9.63-1.1-1.57-6.3-8.85-15.59-16.66-3.7-3.11-10.94-9.11-22.01-14.07-3.29-1.47-15.25-6.58-31.8-7.64-11.32-.73-20.14.74-24.15,1.53-4.01.79-12.01,2.65-21.4,7.03-10.15,4.74-17.15,10.2-20.49,13-3.03,2.53-9.14,7.99-15.29,16.35-5.01,6.83-8.34,13.28-10.54,18.35L25.35,435.11c-2.66,4.45-6.41,10.93-10.55,18.95-.95,1.85-6.66,12.95-9.32,19.57-8.83,21.92-4.54,45.13-3.67,49.53,5.01,25.23,19.19,41.34,25.68,47.84,16.77,16.79,35.08,22.32,39.44,23.54,10.81,3.05,20.26,3.43,26.75,3.22l446.52-.31c4.01.24,9.36.26,15.6-.61,6.28-.88,10.89-2.32,13.75-3.21,3.72-1.16,11.12-3.72,18.96-8.26,2.93-1.69,16.97-10.04,29.05-27.05,3.52-4.97,10.6-15.14,14.52-30.42.81-3.18,3.66-15.06,2.29-30.58Zm-316.89,26.14c-20.52,0-37.15-16.63-37.15-37.14s16.63-37.15,37.15-37.15,37.14,16.63,37.14,37.15-16.63,37.14-37.14,37.14Zm37.14-149.04c0,20.51-16.63,37.14-37.14,37.14s-37.15-16.63-37.15-37.14v-185.73c0-20.52,16.63-37.15,37.15-37.15s37.14,16.63,37.14,37.15v185.73Z"/>
                                                                </svg>
                                                                <h1 class="cards__error-title">Limite de Acceso</h1>
                                                             </div>`);
            leftButton.classList.remove(`active-arrow`);
            rightButton.classList.remove(`active-arrow`);
        }

        if (error.message === `404`) {
            containerCards.insertAdjacentHTML(`afterbegin`, `<div class="cards__error">
                                                                <svg class="cards__error-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 634.73 597.81">
                                                                    <path d="m634.37,497.32c-.25-2.76-1.08-10.84-4.28-20.94-3.44-10.85-8.08-19.23-11.77-24.92L398.65,48.2c-1.31-2.55-3.2-5.91-5.81-9.63-1.1-1.57-6.3-8.85-15.59-16.66-3.7-3.11-10.94-9.11-22.01-14.07-3.29-1.47-15.25-6.58-31.8-7.64-11.32-.73-20.14.74-24.15,1.53-4.01.79-12.01,2.65-21.4,7.03-10.15,4.74-17.15,10.2-20.49,13-3.03,2.53-9.14,7.99-15.29,16.35-5.01,6.83-8.34,13.28-10.54,18.35L25.35,435.11c-2.66,4.45-6.41,10.93-10.55,18.95-.95,1.85-6.66,12.95-9.32,19.57-8.83,21.92-4.54,45.13-3.67,49.53,5.01,25.23,19.19,41.34,25.68,47.84,16.77,16.79,35.08,22.32,39.44,23.54,10.81,3.05,20.26,3.43,26.75,3.22l446.52-.31c4.01.24,9.36.26,15.6-.61,6.28-.88,10.89-2.32,13.75-3.21,3.72-1.16,11.12-3.72,18.96-8.26,2.93-1.69,16.97-10.04,29.05-27.05,3.52-4.97,10.6-15.14,14.52-30.42.81-3.18,3.66-15.06,2.29-30.58Zm-316.89,26.14c-20.52,0-37.15-16.63-37.15-37.14s16.63-37.15,37.15-37.15,37.14,16.63,37.14,37.15-16.63,37.14-37.14,37.14Zm37.14-149.04c0,20.51-16.63,37.14-37.14,37.14s-37.15-16.63-37.15-37.14v-185.73c0-20.52,16.63-37.15,37.15-37.15s37.14,16.63,37.14,37.15v185.73Z"/>
                                                                </svg>
                                                                <h1 class="cards__error-title">Usuario no registrado</h1>
                                                             </div>`);
            leftButton.classList.remove(`active-arrow`);
            rightButton.classList.remove(`active-arrow`);
        }
    }
};

//! Declaracion de variables para las funcion de las skills
const skills = document.querySelector(`.skills`);
const containerInformation = document.querySelector(`.skills__information`);
const information = {
    html: {
        title: `Que es HTML<span>?</span>`,
        summary: `HTML (HyperText Markup Language) es un lenguaje de marcado utilizado para crear páginas web. Es la columna vertebral de cualquier sitio web y se utiliza para estructurar el contenido de la página web y darle formato. HTML utiliza etiquetas para definir diferentes tipos de contenido, como encabezados, párrafos, imágenes, enlaces y formularios. Los navegadores web utilizan el código HTML para renderizar el contenido de una página web y mostrarlo al usuario final. Es una parte fundamental del desarrollo web y es esencial para cualquier desarrollador frontend.`,
        url: `#`,
    },

    css: {
        title: `Que es CSS<span>?</span>`,
        summary: `CSS (Cascading Style Sheets) es un lenguaje de diseño utilizado para dar estilo y presentación a páginas web escritas en HTML. CSS se utiliza para definir la apariencia visual de los elementos HTML en una página, como el color, el tamaño, la posición y la tipografía. Permite a los desarrolladores frontend separar la estructura y el contenido de una página web de su diseño visual, lo que hace que el código sea más fácil de mantener y actualizar. CSS se puede aplicar a elementos individuales en una página o a la página completa a través de un archivo externo. Es una herramienta esencial para cualquier desarrollador frontend que busque crear sitios web atractivos y visualmente atractivos.`,
        url: `#`,
    },

    sass: {
        title: `Que es Sass<span>?</span>`,
        summary: `Sass es un preprocesador de CSS que permite a los desarrolladores escribir hojas de estilo de manera más eficiente y con menos repetición de código. Ofrece características como anidamiento de estilos, mixins y variables, y puede generar hojas de estilo automáticamente cuando se realizan cambios. Aunque tiene una sintaxis más compleja que CSS, Sass tiene muchas herramientas y una gran comunidad de usuarios.`,
        url: `#`,
    },

    javascript: {
        title: `Que es JavaScript<span>?</span>`,
        summary: `JavaScript es un lenguaje de programación utilizado para crear aplicaciones web interactivas y dinámicas. Es un lenguaje de programación de alto nivel, interpretado y orientado a objetos que se ejecuta en el lado del cliente (en el navegador web) o en el lado del servidor (utilizando Node.js). JavaScript se utiliza para agregar interactividad a páginas web, como animaciones, validación de formularios, efectos de desplazamiento y mucho más. También se utiliza para crear aplicaciones web completas, incluidos juegos, aplicaciones de chat y aplicaciones empresariales. Es una herramienta esencial para cualquier desarrollador web y es una de las tecnologías más populares en la actualidad.`,
        url: `#`,
    },

    githud: {
        title: `Que es GitHud<span>?</span>`,
        summary: `GitHub es una plataforma de alojamiento de proyectos y código abierto que utiliza Git como sistema de control de versiones. Fue comprada por Microsoft en 2018 y permite a los desarrolladores crear repositorios para sus aplicaciones de forma gratuita, siempre y cuando sean de código abierto. Los usuarios pueden colaborar en proyectos dejando comentarios, informando errores y realizando mejoras. Además, ofrece herramientas adicionales como un wiki para cada proyecto, un sistema de seguimiento de problemas, herramientas de revisión de código y gráficos para ver actualizaciones y cambios. Es una herramienta esencial para muchos desarrolladores y cuenta con una interfaz fácil de usar.`,
        url: `#`,
    },

    illustrator: {
        title: `Que es Illustrator<span>?</span>`,
        summary: `Abode Illustrator es una aplicación de edición de gráficos vectoriales que se utiliza para la ilustración, el diseño grafico y la maquetación. Es desarrollado y comercializado por Adobe Systems y es el primer programa oficial de su tipo lanzado por la compañía. Adobe Illustrator contiene opciones creativas, un acceso mas sencillo a las herramientas y una gran versatilidad para producir rápidamente gráficos flexibles cuyos usos se dan en maquetación publicación, impresión, video, publicación en la Web y dispositivos móviles. Illustrator es compatible con otros programas de diseño y edición como Photoshop. El programa es muy conocido entre los diseñadores gráficos por la calidad de los colores en los archivos de salida.`,
        url: `#`,
    },

    photoshop: {
        title: `Que es Photoshop<span>?</span>`,
        summary: `Photoshop es una herramienta de diseño gráfico y edición de imágenes que se utiliza para crear y manipular gráficos para aplicaciones web o de escritorio. Es una de las herramientas más populares en la industria y permite a los desarrolladores crear imágenes de alta calidad para utilizar en aplicaciones, sitios web y otros proyectos. Photoshop es compatible con muchos formatos de archivo diferentes, lo que permite a los desarrolladores integrar fácilmente sus diseños en sus proyectos. También cuenta con una gran cantidad de características avanzadas, como capas, filtros y herramientas de edición de texto.`,
        url: `#`,
    },

    figma: {
        title: `Que es Figma<span>?</span>`,
        summary: `Figma es una herramienta de diseño de interfaces colaborativa que te permite crear, prototipar, desarrollar y recopilar comentarios en una sola plataforma. Con Figma puedes diseñar en un espacio compartido y trabajar en tiempo real con tu equipo, crear prototipos realistas que permitan iterar rápidamente sobre flujos y estados, probar la experiencia interactiva completa para obtener mejores comentarios, antes, acercar el diseño y el desarrollo con el modo Dev, un pizarrón en línea donde todos los que construyen productos pueden colaborar. Figma es una herramienta muy utilizada por equipos de diseño, desarrollo y producto que quieren construir productos significativos con facilidad y eficiencia.`,
        url: `#`,
    }


};

//! Plantilla para la informacion dentro de el contener de las skills
const template = (title, summary, url) => {
   
    return `<div class="skills__information-header">
        <h3>${title}</h3>
        <svg class="close" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
            <path class="cls-1"
                d="m31.26,26.69l-.1-.11-.22-.22-.12-.11-10.23-10.24,10.57-10.57c.27-.31.49-.66.63-1.06.14-.35.21-.73.21-1.13,0-1.79-1.46-3.25-3.25-3.25-.4,0-.78.07-1.14.21-.34.12-.65.31-.93.53h0s-.42.43-.42.43l-10.25,10.25L5.75,1.18l-.21-.22-.42-.36-.06-.04c-.22-.15-.46-.27-.72-.36-.34-.13-.71-.2-1.1-.2C1.5,0,.08,1.37,0,3.09v.33c.01.33.08.64.19.94.12.35.31.67.54.96l4.81,4.81,5.87,5.87-5.87,5.86L.95,26.45l-.02.02c-.32.33-.58.72-.74,1.16-.11.3-.18.62-.19.96v.33c.08,1.72,1.51,3.08,3.24,3.08.39,0,.77-.07,1.11-.2.45-.16.86-.42,1.19-.75l10.46-10.46,10.35,10.35.22.22c.3.28.65.49,1.04.63.36.14.74.21,1.14.21,1.79,0,3.25-1.45,3.25-3.25,0-.41-.08-.8-.22-1.16-.13-.33-.3-.63-.52-.9ZM13.82,13.59l-.12.12h0s.08-.09.12-.12Z" />
        </svg>
    </div>

    <div class="skills__information-content">
        <p>${summary}</p>
        <a href="${url}">Sitio Web</a>
    </div>`
};

//! Abrir y cerrar la skills
const skillsInformation = () => {

    //! Al seleccionar algunos de las opciones de las habilidades
    skills.addEventListener(`click`, (evento) => {

        //! Busca dento el evento cual es la etiqueta con la clase mas cercana
        const search = evento.target.closest(`.skills__container`);

        //! Ademas si la etiqueta buscada contiene una de estas clases, abre la ventana y agregarle la informacion 
        if (search?.classList.contains(`html`)) {
            containerInformation.innerHTML = template(information.html.title, information.html.summary, information.html.url);
            containerInformation.classList.toggle(`active`);
        }

        if (search?.classList.contains(`css`)) {
            containerInformation.innerHTML = template(information.css.title, information.css.summary, information.css.url);
            containerInformation.classList.toggle(`active`);
        }

        if (search?.classList.contains(`sass`)) {
            containerInformation.innerHTML = template(information.sass.title, information.sass.summary, information.sass.url);
            containerInformation.classList.toggle(`active`);
        }

        if (search?.classList.contains(`javascript`)) {
            containerInformation.innerHTML = template(information.javascript.title, information.javascript.summary, information.javascript.url);
            containerInformation.classList.toggle(`active`);
        }

        if (search?.classList.contains(`githud`)) {
            containerInformation.innerHTML = template(information.githud.title, information.githud.summary, information.githud.url);
            containerInformation.classList.toggle(`active`);
        }

        if (search?.classList.contains(`illustrator`)) {
            containerInformation.innerHTML = template(information.illustrator.title, information.illustrator.summary, information.illustrator.url);
            containerInformation.classList.toggle(`active`);
        }

        if (search?.classList.contains(`photoshop`)) {
            containerInformation.innerHTML = template(information.photoshop.title, information.photoshop.summary, information.photoshop.url);
            containerInformation.classList.toggle(`active`);
        }

        if (search?.classList.contains(`figma`)) {
            containerInformation.innerHTML = template(information.figma.title, information.figma.summary, information.figma.url);
            containerInformation.classList.toggle(`active`);
        }

        //! Evento para cerrar la ventana de las skills
        containerInformation.addEventListener(`click`, evento => {

            //! Al dar click en el boton de cerrar, quitamos la clase como tambien el contenido de lla
            if (evento.target.closest(`.close`)) {
                containerInformation.classList.remove(`active`);
        
                //! Un Timeout para que se borre el contenido sin que el usuario se pueda dar cuenta
                setTimeout(() => {
                    containerInformation.innerHTML = ``;
                }, 700);
            }
        });
    });
};

document.addEventListener(`DOMContentLoaded`, () => {
    profile();
    project$1();
    buttonTop();
});

search();
buttonMode();
skillsInformation();
