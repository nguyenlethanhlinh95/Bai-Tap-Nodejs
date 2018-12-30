var express = require('express');

var app = express();

app.get('/',function(req,res){
    
    // tra ve cookie
    res.cookie('sample','test res cookie');

    // goi du lieu client
    // res.send('This is sample');

    //tra ve json
    res.json({
        name: 'Linh',
        age : 24
    });

    // ket thuc phien lam viec
    res.end();

    //get name
    var name = req.param('name');
    res.send(name);

    // res.send(contentType);
});

var server = app.listen(8000, function(){
    console.log('Server is running at: ' + server.address().port);
});