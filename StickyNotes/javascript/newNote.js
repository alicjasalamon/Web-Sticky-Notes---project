$(document).ready(function () {

    $('body').on('click', '.note', function (e) {

        var source = $(e.target);
        source.css('z-index', 1);
        e.stopPropagation();
        e.preventDefault();
    });

    $('body').on('click', '#optionsButton', function (e) {

        e.stopPropagation();
        e.preventDefault();
    });

    $('body').on('click', '#sidebar', function (e) {

        e.stopPropagation();
        e.preventDefault();
    });

    $('body').on('click', '#board', function (e) {

        createEmptyNote(e);

    });

});