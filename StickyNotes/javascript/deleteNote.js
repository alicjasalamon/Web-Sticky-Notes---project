$(document).ready(function () {

    $('body').on('click', '.delete', function (e) {
        var note = $(e.target).parent().parent();
        note.remove();
    });



});

