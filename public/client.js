console.log('JS sourced');

$(document).ready(function() {
    console.log('jQuery sourced');

    $('.button').on('click', function() {
        console.log('Button clicked!');
        //pulls value of input cells and also the button type
        var inputOne = $('#inputOne').val();
        var inputTwo = $('#inputTwo').val();
        var inputType = $(this).attr('type');
        //console.log(inputType);
        var inputObject = {
            inputOne: inputOne,
            inputTwo: inputTwo,
            inputType: inputType,
        }
        $.ajax({
            method: 'POST',
            url: '/input',
            data: inputObject,
            success: function(response) {
                console.log('client.js POST', response);
            }
        })
    })
})

function getInput() {
    $.ajax({
        method: 'GET',
        url: '/input',
        success: function(response) {
            console.log('client.js GET', response);
        }
    })
}