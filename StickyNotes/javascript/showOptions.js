$(document).ready(function () {
    $('#optionsButton').click(function () {

        if ($('#sidebar').css('display') == 'none') {
            $('#sidebar').show();
        }
        else
        {
            $('#sidebar').hide();
        }
        
    });

    $('#chalkBoard').click(function () {

        var image = $('#background');
        image.fadeOut(1000, function () {
            image.css("background", "url(images/chalkboard.jpg)");
            image.fadeIn(1000);
        });

        var notes= $('.note');
        notes.fadeOut(1000, function () {
            notes.css("background", "url(images/chalkNote.png)");
            notes.fadeIn(1000);
        });
        
       $('textarea').css('color', 'white');


    });

    $('#corkBoard').click(function () {

        var image = $('#background');
        image.fadeOut(1000, function () {
            image.css("background", "url(images/corkboard.jpg)");
            image.fadeIn(1000);
        });

        var notes = $('.note');
        notes.fadeOut(1000, function () {
            notes.css("background", "url(images/note.png)");
            notes.fadeIn(1000);
        });

        $('textarea').css('color', 'black');
    });


    $('#fridge').click(function () {

        var image = $('#background');
        image.fadeOut(1000, function () {
            image.css("background", "url(images/fridge.jpg)");
            image.fadeIn(1000);
        });

        var notes = $('.note');
        notes.fadeOut(1000, function () {
            notes.css("background", "url(images/fridgenote.png)");
            notes.fadeIn(1000);
        });

        $('textarea').css('color', 'black');
    });

});