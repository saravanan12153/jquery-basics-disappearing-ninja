count = 0;

$(document).ready(function() {
    function unbindButton() {
        $("img").unbind('click').one("click", function() {
            $(this).fadeOut('fast');
            count++;
            if (count >=8) {
             $('.success').removeClass('hide');
            }
        });
    }

    unbindButton();

    $(".btn-success").on("click", function() {
        $('.success').addClass('hide');
        $('img').show();
        unbindButton();
        count=0;
    });
});