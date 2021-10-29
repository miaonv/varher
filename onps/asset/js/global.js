
// 移动端导航显示隐藏控制
$(".open_menu").click(function(){
    $(this).hide();
    $(this).addClass("uk-animation-slide-left-small");
    $(".close_menu").show();
    $(".onpsnav .right").show();
    $(".onpsnav .right").animate({height:"100vh"});
});
$(".close_menu").click(function(){
    $(this).hide();
    $(this).addClass("uk-animation-slide-left-small");
    $(".open_menu").show();
    $(".onpsnav .right").css("height","0");
});
