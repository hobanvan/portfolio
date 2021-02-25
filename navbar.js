$('#toggle').click(function () {
    $(this).toggleClass('is-active');
    $('#navbarCollapse').toggleClass('is-active');
    $('.main').toggleClass('.main ml');
});
