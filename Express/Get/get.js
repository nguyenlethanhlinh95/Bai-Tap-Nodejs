var express = require('express');

var app = express();

// form get
app.get('/process_get',function(req,res){
    
    var response = {
        first_Name: req.query.fristName,
        last_Name: req.query.lastName,
    };

    console.log(response);

    // ket thuc phien lam viec
    res.end(JSON.stringify(response));
});

var server = app.listen(8000, function(){
    console.log('Server is running at: ' + server.address().port);
});