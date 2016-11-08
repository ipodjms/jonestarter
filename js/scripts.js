// A $( document ).ready() block.
$( document ).ready(function() {
    console.log( "Pronto para detonar!" );
    larguraTela = $(window).width();
    console.log ("Largura da tela é " + larguraTela);
    alturaTela = $(window).height();
    console.log ("Altura da tela é " + alturaTela);

    console.log ("Informações utueis para saber se o cara esta no desktop, celular, tablet, iphone, android, safari, chrome, etc...")
    console.log ("Browser CodeName: " + navigator.appCodeName );
    console.log ("Browser Name: " + navigator.appName );
    console.log ("Browser Version: " + navigator.appVersion );
    console.log ("Cookies Enabled: " + navigator.cookieEnabled );
    console.log ("Browser Language: " + navigator.language );
    console.log ("Browser Online: " + navigator.onLine );
    console.log ("Platform: " + navigator.platform );
    console.log ("User-agent header: " + navigator.userAgent );

console.log ("alterando altura do body para dar scroll... NAO SE ESQUEÇA DE DELETAR ESSA LINHA E E DE BAIXO");
$("body").css("height","4000px");

// muito util para fazer menu fixos...
$( window ).scroll(function() {
    var scrollTop = $( "html" );
    var distanciaTopo = scrollTop.scrollTop();
    console.log( "distancia do topo: " + distanciaTopo );
});


    // plugins indicados

    /* http://idangero.us/swiper/ */  // use para swiper, carrosels, já é responsivo
    /* https://jqueryvalidation.org/ */  // use para para validação
    /* https://gist.github.com/diegoprates/5047663 */  // use para para traduzir automaticamente  as mensagens padrdão do jquery validate, só colar no fim do arquivo js, este ou o do jquery validate.
    /* https://igorescobar.github.io/jQuery-Mask-Plugin/ */  // use para para traduzir automaticamente  as mensagens padrdão.
    /*http://isotope.metafizzy.co/filtering.html*/   // Filtro com efeito css .. pode ser usado com select, link, button, li a, etc...
    /* https://jqueryui.com/selectmenu/ */   // select menu... eh o que apresetna menos bug... o ponto negativo eh a porrada de coisa que vem no css....
    /* http://adam.co/lab/jquery/customselect/ */   // esse nunca usei mais tem gente usando serve pra mesma coisa ... select box


});