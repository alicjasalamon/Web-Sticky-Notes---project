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
        
       // $('body').css('background-image', 'url(' + "images/chalkboard.jpg" + ')');
        // $(".note").css('background-image', 'url(' + "images/chalkNote.png" + ')');

        $('body').animate({'background-image' : 'url(' + "images/chalkboard.jpg" + ')'}, 1000);
        $(".note").animate({'background-image': 'url(' + "images/chalkNote.png" + ')'}, 1000);

    });

    $('#corkBoard').click(function () {

        $('body').css('background-image', 'url(' + "images/corkboard.jpg" + ')');
        $(".note").css('background-image', 'url(' + "images/note.png" + ')');
    });


/*    $('#fridgeBoard').click(function () {

        $('body').css('background-image', 'url(' + "images/fridge.jpg" + ')');
        $(".note").css('background-image', 'url(' + "images/fridgenote.png" + ')');
    });*/
});