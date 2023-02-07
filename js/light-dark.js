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
    
        // NAVBAR BGCOLOR = WHITE
        let navbar = document.querySelector('.navbar');
        navbar.classList.toggle('navbar_lightmode');
    
        // NAVBAR ITENS COLOR = BLACK
        lightDarkIcon.classList.toggle('item-menu_lightmode');
        
        let navbarItems = document.querySelectorAll('.item-menu-link');
        navbarItems.forEach(item => {
            item.classList.toggle('item-menu_lightmode');
        });
        
        // ICONE DE MENU COLOR = BLACK
        iconeMenu.classList.toggle('icone-menu_lightmode');
        
        // SOBRE MIM
        let sobre = document.querySelector('.sobre-mim');
        sobre.classList.toggle('sobre-mim_lightmode');
        
        let banner = document.querySelector('.banner-bg');
        banner.classList.toggle('banner-bg_lightmode');

        // PORTFOLIO BGCOLOR = WHITE
        let portfolio = document.querySelector('.portfolio');
        portfolio.classList.toggle('portfolio_lightmode');
    
        // CARTÕES
        let cartao = document.querySelectorAll('.cartao');
    
        cartao.forEach(cartao => {
            cartao.classList.toggle('cartao_lightmode');
        });
    
        // EXPERIÊNCIAS
        let experiencias = document.querySelector('.experiencias');
        experiencias.classList.toggle('experiencias_lightmode');

        // CONTATO
        let contato = document.querySelector('.contato');
        contato.classList.toggle('contato_lightmode');



    });
}
