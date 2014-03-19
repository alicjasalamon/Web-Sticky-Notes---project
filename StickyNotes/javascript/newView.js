$(document).ready(function () {

    $('body').on('click', '#corkBoard', function(){
        updateStyle('corkBoard', 'corkNote');
    });

    $('body').on('click', '#chalkBoard', function () {
        updateStyle('chalkBoard', 'chalkNote');
    });

    $('body').on('click', '#fridge', function () {
        updateStyle('fridgeBoard', 'fridgeNote');
    });

});


function updateStyle(boardStyle, noteStyle) {

    var board = $('.board');
    board.removeClass();
    board.addClass('board');
    board.addClass(boardStyle);

    var notes = $('.note');
    notes.removeClass();
    notes.addClass('note');
    notes.addClass(noteStyle);

    $('body').hide().fadeIn('slow');
}
