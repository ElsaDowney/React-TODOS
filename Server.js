var bodyParser = require('body-parser');
var express = require('express');
var app = express();
app.use(bodyParser.json());

app.use(express.static('./view'));
app.use(express.static('./src'));

app.listen(3000, 'localhost', function(err) {
    if (err) {
        console.log(err);
        return;
    }
    console.log('Listening at http://localhost:3000');
});