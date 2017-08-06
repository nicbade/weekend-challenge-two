var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var port = 5000;
var math = [];

function calculator(inputOne, inputTwo, inputType) {
    if (inputType === 'add') {
        math = [inputOne + inputTwo];
    }
    return math;
}
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