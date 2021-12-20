const aboutTitle = document.querySelector('#about-title');
const contactTitle = document.querySelector('#contact-title');

const windoAboutOp = document.querySelector('#ab-window-container');

//Reload page and show icon
setTimeout(() => {
    document.querySelector('#logo-img').style.opacity='0';
}, 4000);

setTimeout(() => {
    document.querySelector('#logo-img').style.transform='scale(0)';
}, 5000);

const openAbout = () => {
    windoAboutOp.style.transform = 'scale(1)';
}

const closeAbout = () => {
    windoAboutOp.style.transform = 'scale(0)';
}