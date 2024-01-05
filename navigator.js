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
}

function aboutMe() {
    backwardsArrow.classList.remove('--inactive');
    header.classList.add('--inactive');
    aboutMeSection.classList.remove('--inactive');
}

function proyects() {
    backwardsArrow.classList.remove('--inactive');
    header.classList.add('--inactive');
    aboutMeSection.classList.add('--inactive');
}