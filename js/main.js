$(function(){
    $('.menu_btn_block img').click(function () {
        if ($('nav>ul').css('display') == 'none'){
            $('nav ul').fadeIn(1000);
        }else {
            $('nav ul').fadeOut(1000);
        }
    });
});