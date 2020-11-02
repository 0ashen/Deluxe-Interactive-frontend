// *********************
// MENU TOGGLER
// *********************
let lastClickTime = new Date();
const toggleMenu = function () {
    if (new Date() - lastClickTime < 800) return;
    lastClickTime = new Date();
    document.querySelector('.header__pupup-main-menu-toggle').classList.toggle('header__menu-button-toggle--is-active')
    document.querySelector('.pupup-main-menu').classList.toggle('pupup-main-menu--show')
}
document.querySelector('.header__pupup-main-menu-toggle').addEventListener('click', toggleMenu)
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('pupup-main-menu--show')) toggleMenu()
})
