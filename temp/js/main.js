$(document).ready(function () {
    $('input:checkbox, select').styler();
    /*$('.page-numbers').click(function () {
       $('.page-numbers').removeClass('current');
       $(this).addClass('current');
    });*/
    $(".video-block").on("mouseover", "video", function(){
        this.play();
    });
    $(".video-block").on("mouseleave", "video", function(){
        this.pause();
    });
});