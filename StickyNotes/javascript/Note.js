var map = {};
map['corkBoard'] = 'corkNote';
map['chalkBoard'] = 'chalkNote';
map['fridgeBoard'] = 'fridgeNote';

function createEmptyNote(e)
{
    var notes = $('.note');
    notes.css('position', 'absolute');

    var prototype = $('#notePrototype');
    var newNote = prototype.clone();

    var container = $('#noteContainer');
    var board = $('#board');

    newNote.css('left', e.pageX);
    newNote.css('top', e.pageY);
    newNote.removeAttr('id');
    newNote.attr('id', 'note' + $.now());
    newNote.draggable();

    var key = board.attr('class').split(' ')[1];
    newNote.addClass(map[key]);
    newNote.appendTo(container);

}

function renderNote(db_note)
{
    var notes = $('.note');
    notes.css('position', 'absolute');

    var prototype = $('#notePrototype');
    var newNote = prototype.clone();

    var container = $('#noteContainer');
    var board = $('#board');

    newNote.css('left', db_note.x);
    newNote.css('top', db_note.y);
    newNote.removeAttr('id');
    newNote.attr('id', db_note.id);

    var textarea = newNote.find('textarea');
    textarea.html(db_note.text);

    newNote.draggable();

    var key = board.attr('class').split(' ')[1];
    newNote.addClass(map[key]);
    newNote.appendTo(container);
}