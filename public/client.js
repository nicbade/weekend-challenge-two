console.log('JS sourced');

$(document).ready(function() {
    console.log('jQuery sourced');
    // getInput(); //refreshes get upon DOM loading
    $('.button').on('click', function() {
            getInput();
            console.log('Button clicked!');
            //pulls value of input cells and also the button type
            var inputOne = $('#inputOne').val();
            var inputTwo = $('#inputTwo').val();
            var inputType = $(this).attr('type');
            // console.log(inputType);
            var inputObject = {
                inputOne: inputOne,
                inputTwo: inputTwo,
                inputType: inputType,
            }
            console.log(inputObject);
            $.ajax({
                    method: 'POST',
                    url: '/input',
                    data: inputObject,
                    success: function(response) {
                        console.log('client.js POST', response);
                        getInput();
                    }
                }) //ajax post
        }) // button click event listener
    $('#clear').on('click', function() {
        $('#inputOne').val('');
        $('#inputTwo').val('');
        $('#answer').empty();

    })
})


function getInput() {
    $.ajax({
            method: 'GET',
            url: '/input',
            success: function(response) {
                console.log('client.js GET', response);
                $('#answer').append('<p id="answer">' + response + '</p>');
                clearInput(response);
            }
        }) // end ajax get
} // end getInput function

function clearInput(finalAnswer) {
    $('#answer').empty();
    $('#answer').html(finalAnswer);
}