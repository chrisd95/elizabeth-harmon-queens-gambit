// This code is not mine, it is taken from:
// https://bootstrapious.com/p/transparent-navbar

$(function () {
    $(window).on('scroll', function () {
        if ( $(window).scrollTop() > 400 ) {
            $('.navbar').addClass('active');
        } else {
            $('.navbar').removeClass('active');
        }
    });
});
