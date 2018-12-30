var express = require('express');

var app = express();

app.get('/admin',function(req,res){
    req.accepts('text/html');
    // var contentType = req.get('Content-Type');

    //get name
    var name = req.param('name');
    res.send(name);

    // res.send(contentType);
});

var server = app.listen(8000, function(){
    console.log('Server is running at: ' + server.address().port);
});