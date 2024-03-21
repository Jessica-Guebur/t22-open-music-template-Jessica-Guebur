export function renderDarkMode(){
    const darkModeButton = document.querySelector(`.header_theme-btn`);
    const html = document.querySelector(`html`);


    if(darkMode){

        html.classList.add("dark-mode");
    }

    darkModeButton.addEventListener(`click`, (event) => {

        darkModeButton.classList.toggle(`.header_theme-btn--sun`);

        html.classList.contains(`dark-mode`)

    });
}