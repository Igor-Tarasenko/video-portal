$(document).ready(function () {
    $('input:checkbox, select').styler();
    $('.page-link').click(function () {
       $('.pagination').find('.page-link').removeClass('active');
       $(this).addClass('active');
    });
});