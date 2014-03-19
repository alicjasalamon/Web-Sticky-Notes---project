$(document).ready(function () {

    $('#optionsButton').click(hideShowSideBar);

});

function hideShowSideBar()
{
    if ($('#sidebar').css('display') == 'none') {
        $('#sidebar').show();
    }
    else {
        $('#sidebar').hide();
    }
}