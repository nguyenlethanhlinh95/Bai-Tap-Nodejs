var express = require('express');

var app = express();
var bodyParser = require('body-parser');


var urlendcodeParser = bodyParser.urlencoded({extended:false});

// form get
app.post('/process_post', urlendcodeParser, function(req,res){
    
    var response = {
        first_Name: req.body.fristName,
        last_Name: req.body.lastName
    };

    console.log(response);

    // ket thuc phien lam viec
    res.end(JSON.stringify(response));
});

var server = app.listen(8000, function(){
    console.log('Server is running at: ' + server.address().port);
});