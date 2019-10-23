/*========== wow js init ===*/
$(function () {
    new WOW().init();
});
/*========== navigation links smooth move down*/
$(function () {
    $('a.scroll-smoothly').click(function (e) {
        e.preventDefault();
        var section = $(this).attr('href');
        $('html,body').animate({
            scrollTop: $(section).offset().top
        }, 1250, "easeInOutExpo");
    });
});
/*========== scrolling top */
$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('#btn-back-top').css('display', 'block');
        } else {
            $('#btn-back-top').css('display', 'none');
        }
    });
});