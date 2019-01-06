var express = require('express');
var app = express();
var port = 8001;


app.get('/', function(req,res){
    res.send("Hello world");
});

app.listen(port,function(){
    console.log("Server is running at port " + port);
});