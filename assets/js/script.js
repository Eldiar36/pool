/*$(document).ready(function(){
    $(".info-body-slider").owlCarousel({
        items: 1,
        loop:true,
    });
});*/
jQuery(($) => {
    $('.select').on('click', '.select__head', function () {
        if ($(this).hasClass('open')) {
            $(this).removeClass('open');
            $(this).next().fadeOut();
        } else {
            $('.select__head').removeClass('open');
            $('.select__list').fadeOut();
            $(this).addClass('open');
            $(this).next().fadeIn();
        }
    });

    $('.select').on('click', '.select__item', function () {
        $('.select__head').removeClass('open');
        $(this).parent().fadeOut();
        $(this).parent().prev().text($(this).text());
        $(this).parent().prev().prev().val($(this).text());
    });

    $(document).click(function (e) {
        if (!$(e.target).closest('.select').length) {
            $('.select__head').removeClass('open');
            $('.select__list').fadeOut();
        }
    });
});
$(document).ready(function() {
    $('.content_toggle').click(function () {
        $('.content_block').removeClass('hide');
        return false;
    });
});
function burgerMenu(selector) {
    let menu = $(selector);
    let button = menu.find(".burger-menu_button");
    let links = menu.find("menu_link");
    let overlay = menu.find("burger-menu_overlay");
    button.on("click",(e) => {
        e.preventDefault();
        toogleMenu();
    });
    links.on("click", () => toogleMenu());
    overlay.on("click", () => toogleMenu());
    function toogleMenu() {
        menu.toggleClass('burger-menu_active');

        if (menu.hasClass('burger-menu_active')) {
            $('body').css("overflow","hidden");
        }else  {
            $("body").css("overflow","visible")
        }
    }
}
burgerMenu('.burger-menu');

$('.menu_link').on('click',function () {
    $('.burger-menu').removeClass('burger-menu_active')
    $('.burger-menu_nav').removeClass('burger-menu_active')

});
