$(document).ready(function () {
    $('#clean').addClass('unavalible');
    $('input').keyup(function(){
        var val = $('input').val();
        if(val.length > 0){
            $('#clean').addClass('avalible').removeClass('unavalible');
        }
        else {
            $('#clean').addClass('unavalible').removeClass('avalible');
        }
    });

});