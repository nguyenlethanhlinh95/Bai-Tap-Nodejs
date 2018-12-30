var express = require('express');

var app = express();

// Link trang chu
app.get('/', function(req,res){
    //output
    res.send('This is Express Application');
});

var server = app.listen(8000,function(){
    console.log('Server is running at: ' + server.address().port);
});