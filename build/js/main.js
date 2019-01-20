$(document).ready(function () {
    $('.page-link').click(function () {
       $('.pagination').find('.page-link').removeClass('active');
       $(this).addClass('active');
    });
});