$(document).ready(function() {
    $('.switcher').click(function() {
        $('body').toggleClass('noche');
        $('.soy').text('soy más de noche');
        $('.noche .soy').text('soy más de día');
    });
});