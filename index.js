const body = document.querySelector('body');
const hamburgerMenu = document.querySelector('.hamburger-menu');
const closeIcon = document.querySelector('.close-icon');
const hamburgerIcon = document.querySelector('.hamburger');
closeIcon.addEventListener('click', () => {
    hamburgerMenu.close();
    // hamburgerMenu.classList.remove('open-menu');
    // hamburgerMenu.classList.add('close-menu');
});
hamburgerIcon.addEventListener('click', () => {
    hamburgerMenu.showModal();
    // hamburgerMenu.classList.remove('close-menu');
    // hamburgerMenu.classList.add('open-menu');
});