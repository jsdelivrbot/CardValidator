var validator_app = angular.module('ValidatorApp', []);
/*recursive sum of two-digit number
Example: rec_sum(22) = 2 + 2 = 4
 */
function rec_sum(val) {
    if(val > 9){
        return (val % 10) + Math.floor(val / 10);
    }
    else {
        return val;
    }
}
//Luhn algoritmh for card number validation
function validation(card) {
    var arr = [];
    var res = 0;
    for (var i=0; i < card.length; i++){
        arr.push(parseInt(card.charAt(i)));
    }
    for (var i=0; i < arr.length; i += 2){
        arr[i] = arr[i] * 2;
    }
    for (var i=0; i < arr.length; i++){
        res += rec_sum(arr[i]);
    }
    return res % 10 == 0;
}

validator_app.filter('card', function () {
    return function (card) {
        if (!card) { return ''; }

        var value = card.toString().trim().replace(/^\+/, '');

        if (value.match(/[^0-9]/)) {
            return card;
        }
        var cardNum;
        var num1, num2, num3, num4;
        if (value.length === 16) {
            // stylesheet for card number
            $(document).ready(function () {
                if(validation(value)){
                    $('input').addClass('green-outline');
                    $('#validator').removeClass('unavalible').addClass('avalible valid').html('&#10003;');
                }
                else{
                    $('input').addClass('red-outline');
                    $('#validator').removeClass('unavalible').addClass('avalible unvalid').html('&#9679;');
                }
            });
        }
        // base stylesheet, when input number less than 16 symbols
        else if (value.length < 16){
            $(document).ready(function () {
                $('input').removeClass('green-outline red-outline');
                $('#validator').removeClass('avalible valid').addClass('unavalible').html('&#10003;');
                $('#validator').removeClass('avalible unvalid').addClass('unavalible').html('&#9679;');
            });
        }

        switch (value.length) {
            case 1:
            case 2:
            case 3:
            case 4:
                num1 = value;
                break;

            default:
                num1 = value.slice(0, 4);
                num2 = value.slice(4,8);
                num3 = value.slice(8,12);
                num4 = value.slice(12,16);
        }

        if(num2){
            if(num3){
                if(num4){
                    return (num1 + "-" + num2 + "-" + num3 + "-" + num4);
                }
                return (num1 + "-" + num2 + "-" + num3);
            }
            return (num1 + "-" + num2);
        }

        else{
            return num1;
        }

    };
});
