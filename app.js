var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var port = 5000;
var math = [];


app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/input', function(req, res) {
    console.log(req.body);
    var inputOne = req.body.inputOne;
    var inputTwo = req.body.inputTwo;
    var inputType = req.body.inputType;
    calculator(inputOne, inputTwo, inputType);
    console.log(math);
})

app.get('/input', function(req, res) {
    res.send(math);
})


app.listen(port, function() {
    console.log('listening on port', port);
});

function calculator(inputOne, inputTwo, inputType) {
    if (inputType == 'add') {
        math = [+inputOne + +inputTwo]; //+ =  parsInt
    } else if (inputType == 'subtract') {
        math = [+inputOne - +inputTwo];
    } else if (inputType == 'divide') {
        math = [+inputOne / +inputTwo];
    } else if (inputType == 'multiply') {
        math = [+inputOne * +inputTwo];
    }
    return math;
}