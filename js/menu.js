let botaoMenu = document.querySelector('.navbar-toggler');

botaoMenu.addEventListener('click', () => {
    let iconeMenu = document.querySelector('i.fa-solid.fa-bars.icone-menu')
    iconeMenu.classList.toggle('fa-xmark');
});