console.log('navigator conected')

proyectMenu.addEventListener('click', () => {
    location.hash = '#proyects';
})
aboutMenu.addEventListener('click', () => {
    location.hash = '#about';
})
backwardsArrow.addEventListener('click', () => {
    header.classList.remove('--inactive');
    backwardsArrow.classList.add('--inactive');
    location.hash = '#home';
})
headerProyectsButton.addEventListener('click', () => {
    location.hash = '#proyects';
})
sideMenuX.addEventListener('click', () => {
    asideMenu.classList.add('--inactive');
    menuHam.classList.remove('--inactive');
})
menuHam.addEventListener('click', () => {
    asideMenu.classList.remove('--inactive');
    menuHam.classList.add('--inactive');
})

movieApp.addEventListener('click', () => {
    window.open('https://iturraldegit.github.io/movie-app/')
})
todosApp.addEventListener('click', () => {
    window.open('https://iturraldegit.github.io/todo-list-app/')
})
travelSite.addEventListener('click', () => {
    window.open('https://iturraldegit.github.io/CursoDeTailwind/')
})
storeApp.addEventListener('click', () => {
    window.open('https://quiet-scone-6eb339.netlify.app/')
})

window.addEventListener('DOMContentLoaded', navigator, false);
window.addEventListener('hashchange', navigator, false);

function navigator() {
    if (location.hash.startsWith('#proyects')) {
        proyects();
    } else if (location.hash.startsWith('#about')) {
        aboutMe();
    } else {
        home();
    }
}

function home() {
    header.classList.remove('--inactive');
    aboutMeSection.classList.add('--inactive');
    proyectsSection.classList.add('--inactive');
    hamButton.classList.add('ham-button-alone');
}

function aboutMe() {
    backwardsArrow.classList.remove('--inactive');
    header.classList.add('--inactive');
    aboutMeSection.classList.remove('--inactive');
    proyectsSection.classList.add('--inactive');
    hamButton.classList.remove('ham-button-alone');
}

function proyects() {
    backwardsArrow.classList.remove('--inactive');
    header.classList.add('--inactive');
    aboutMeSection.classList.add('--inactive');
    proyectsSection.classList.remove('--inactive');
    hamButton.classList.remove('ham-button-alone');
}

