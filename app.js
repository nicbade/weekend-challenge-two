var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var port = 5000;
var math = [];


app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/input', function(req, res) {
    var required = req.body;
    calculator(required.inputOne, required.inputTwo, required.inputType);
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
        math = [inputOne + inputTwo];
    } else if (inputType == 'subtract') {
        math = [inputOne - inputTwo];
    } else if (inputType == 'divide') {
        math = [inputOne / inputTwo];
    } else if (inputType == 'multiply') {
        math = [inputOne * inputTwo];
    }
    return math;
}