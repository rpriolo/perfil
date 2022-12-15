let botaoLightDark = document.querySelector('#light-dark');

botaoLightDark.addEventListener('click', () => {

    let navbar = document.querySelector('.navbar');
    navbar.classList.toggle('navbar_light');

    let lightDarkIcon = document.querySelector('.material-symbols-outlined');
    lightDarkIcon.classList.toggle('material-symbols-outlined_light');

    let navbarItems = document.querySelector('.item-menu');
    navbarItems.classList.toggle('item-menu_light')
});