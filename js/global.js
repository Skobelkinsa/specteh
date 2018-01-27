function autoSize(element) {

    $element = $(element);

    console.log('height():', $element.height());
    console.log('getComputedStyle height:', parseInt(getComputedStyle(element).height, 10));
    console.log('scrollHeight:', element.scrollHeight);

    element.style.overflowY = 'hidden';

    var paddingTopBottom = $element.innerHeight() - $element.height();
    console.log('paddingTopBottom:', paddingTopBottom);
    console.log('scrollHeight - paddingTopBottom:', element.scrollHeight - paddingTopBottom);

    element.style.height = 'auto';

    $element.height(element.scrollHeight - paddingTopBottom);
}
$(document).ready(function() {
    $('header .toggle-menu').on('click', function(){
        $('header .menu').toggleClass('open');
        return false;
    });
    $('.gray-header .search button:not(.gray-header .search button.noclick)').on('click', function(){
        $('.gray-header').toggleClass('open');
        $('.gray-header .search input').focus();
        if($(this).hasClass('noclick'))
            $('.gray-header .search').submit();
        else
            $(this).toggleClass('noclick');
        return false;
    });
    $('.lk-page .h1 .left-open').on('click', function(){
        $('.lk-page .left-block').toggleClass('open');
        $('body').toggleClass('noscroll');
        return false;
    });
    $('.lk-page .left-block .menu').on('click', function(){
        return false;
    });
    $('.lk-page .left-block').on('click', function(){
        $(this).toggleClass('open');
        $('body').toggleClass('noscroll');
    });
});

$('.auto-size').each(function() {
    autoSize(this);
}).on('input', function() {
    autoSize(this);
});