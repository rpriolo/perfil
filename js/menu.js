// window.onload = function() {
    let botaoMenu = document.querySelector('.navbar-toggler');
    
    botaoMenu.addEventListener('click', () => {
        let iconeMenu = document.querySelector('.fa-solid.fa-bars.icone-menu');
        iconeMenu.classList.toggle('fa-xmark');
    });
// }