$(document).ready(function () {
    //function for clean button. If a user input some text to form, the clean button wil be visible
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