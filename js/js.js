$(function () {
    $('.delivery_list').click(function () {
        $(".carts_list").slideToggle('fast');
    });
    $('ul.carts_list li').click(function () {
        var tx = $(this).html();
        var tv = $(this).attr('alt');
        $(".carts_list").slideUp('fast');
        $(".delivery_list span").html(tx);
        $(".delivery_text").html(tv);
    });
    $('.lang_list').click(function () {
        $(".change_list").slideToggle('fast');
    });
    $('ul.change_list li').click(function () {
        var tx = $(this).html();
        var tv = $(this).attr('alt');
        $(".change_list").slideUp('fast');
        $(".lang_list span").html(tx);
    });


    $('.center-menu').each(function(){
        var menu = $(this),
            menuText = menu.find('span'),
            list = menu.siblings(".header-it-list"),
            items = list.find('li');

        menu.click(function(){
            list.slideToggle('fast');
        });

        items.click(function(){
            var tx = $(this).html();
            list.slideUp('fast');
            menuText.html(tx)
        });
    });
})/**
 * Created by aplle on 22.10.15.
 */
