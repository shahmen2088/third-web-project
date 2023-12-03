$(function () {

    // Fixed header
    let header = $('#header');
    let intro = $('#intro');
    let introH = intro.innerHeight();// Высота блока intro
    let scrollPosition = $(window).scrollTop();// Проверка позиции скролла
    let nav = $('#nav');
    let navToggle = $('#navToggle');

    $(window).on('scroll resize', function () {// Функция для скролла страницы
        introH = intro.innerHeight();
        scrollPosition = $(this).scrollTop();
        checkScroll(introH, scrollPosition)
    })
    header.addClass('header__fixed');

    function checkScroll(introH, scrollPosition) {
        if (scrollPosition > introH) { // Если позиция скролла больше высоты блока интро, то мы добаляем класс INTRO 
            header.addClass('header__fixed');
        } else {
            header.removeClass('header__fixed');
        }
    }


    // Smooth scroll 

    $("[data-scroll]").on("click", function (event) {// Функия при клике отправляет в нужный блок
        event.preventDefault();// убираем стандартное поведение ссылки при клике
        let blockId = $(this).data("scroll");// Берем значение у элемента на которое мы нажали
        let blockOffset = $(blockId).offset().top;// Получаем позицию от верха страницы
        $("html, body").animate({
            scrollTop: blockOffset
        }, 500)
    })
});


