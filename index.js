$(document).ready(function() {
    $('.switcher').click(function() {
        $('body').toggleClass('noche');
        $('.soy').text('soy más de noche');
        $('.noche .soy').text('soy más de día');
    });
    $('.boton-css').click(function() {
        $('.boton-css').toggleClass('seleccionado');
        $('.html').toggleClass('none');
        $('.javascript').toggleClass('none');
        $('.jquery').toggleClass('none');
    });
});