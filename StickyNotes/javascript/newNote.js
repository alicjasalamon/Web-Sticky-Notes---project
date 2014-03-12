$(document).ready(function () {
    $('#board').click(function (e) {

        var mainEvent = e ? e : window.event;

        $('#board div:first')
          .clone()
          .css('left', mainEvent.pageX)
          .css('top', mainEvent.pageY - 25)
          .appendTo($('#board'));

    });
});