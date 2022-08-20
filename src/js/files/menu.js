export function openMenu()  {
        $('.hamburger').click(function() {
            $('.menu__list_container').toggleClass("active");
            $(this).toggleClass("open");
            $('body').toggleClass('lock');
        });
}

export function dropMenu()  {
    $('#dropBtn').click(function() {
        $('#dropDown').toggleClass("show");
        $('.fa').toggleClass("fa-caret-up");
    });
}

export function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        $('.menu__content').addClass("scroll");
        $('.menu__logo').addClass("scroll__logo");
        $('.menu__drop').addClass("scroll__drop");
    } else {
        $('.menu__content').removeClass("scroll");
        $('.menu__logo').removeClass("scroll__logo");
        $('.menu__drop').removeClass("scroll__drop");
    }
}