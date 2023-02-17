window.onload = function() {
    let botaoLightDark = document.querySelector('#light-dark');
    let iconeMenu = document.querySelector('.icone-menu');
    
    botaoLightDark.addEventListener('click', () => {
    
        // MUDANÇA DO ÍCONE LIGHT/DARK
        let lightDarkIcon = document.querySelector('.material-symbols-outlined');
        let icon = lightDarkIcon.innerText;
        if (icon == 'light_mode') {
            lightDarkIcon.innerText = 'dark_mode';
        } else {
            lightDarkIcon.innerText = 'light_mode';
        }

        lightDarkIcon.classList.toggle('light-dark_lightmode');

        // BODY BGCOLOR = WHITE
        let body = document.querySelector('body');
        body.classList.toggle('lightmode');
    
        // NAVBAR BGCOLOR = WHITE
        // let navbar = document.querySelector('.navbar');
        // navbar.classList.toggle('navbar_lightmode');
    
        // NAVBAR ITENS COLOR = BLACK
        lightDarkIcon.classList.toggle('item-menu_lightmode');
        
        let navbarItems = document.querySelectorAll('.navbar a');
        navbarItems.forEach(item => {
            item.classList.toggle('item-menu_lightmode');
        });

        let itemDestaque = document.querySelector('.destaque');
        itemDestaque.classList.toggle('destaque_lightmode');
        
        // ICONE DE MENU COLOR = BLACK
        iconeMenu.classList.toggle('icone-menu_lightmode');
        
        // SOBRE MIM
        let logo = document.querySelector('.logo');
        logo.classList.toggle('logo_lightmode');

        let sobre = document.querySelector('.sobre-mim');
        sobre.classList.toggle('sobre-mim_lightmode');
        
        let banner = document.querySelector('.banner-bg');
        banner.classList.toggle('banner-bg_lightmode');

        // PROJETOS BGCOLOR = WHITE
        let projetos = document.querySelector('.projetos');
        projetos.classList.toggle('projetos_lightmode');
    
        // CARTÕES
        let cartao = document.querySelectorAll('.cartao');
    
        cartao.forEach(cartao => {
            cartao.classList.toggle('cartao_lightmode');
        });
    
        // EXPERIÊNCIAS
        let experiencias = document.querySelector('.experiencias');
        experiencias.classList.toggle('experiencias_lightmode');

        let experiencia = document.querySelectorAll('.experiencia');
        experiencia.forEach(experiencia => {
            experiencia.classList.toggle('experiencia_lightmode');
        });

        // CONTATO
        let contato = document.querySelector('.contato');
        contato.classList.toggle('contato_lightmode');

    });
}
