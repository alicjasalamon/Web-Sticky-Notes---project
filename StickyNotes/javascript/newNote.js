$(document).ready(function () {

    var map = {};
    map['corkBoard'] = 'corkNote';
    map['chalkBoard'] = 'chalkNote';
    map['fridgeBoard'] = 'fridgeNote';

    $('body').on('click', '.note', function (e) {

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

        var notes = $('.note');
        notes.css('position', 'absolute');

        var prototype = $('#notePrototype');
        var newNote = prototype.clone();

        var container = $('#noteContainer');
        var board = $('#board');

        newNote.css('left', e.pageX);
        newNote.css('top', e.pageY - 25);
        newNote.removeAttr('id');
        newNote.draggable();

        var key = board.attr('class').split(' ')[1];
        newNote.addClass(map[key]);
        newNote.appendTo(container);

    });

});