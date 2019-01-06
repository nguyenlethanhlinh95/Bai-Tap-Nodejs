var express = require('express');
var app = express();

app.get('/', function(req,res){
    console.log('This is homepage');
    res.send('Home page');
});
app.post('/', function(req,res){
    console.log('This is homepage post');
    res.send('Home page post');
});
app.delete('/del_student', function(req,res){
    console.log('Delete student page');
    res.send('Delete student page');
});
var server = app.listen(8000, function(){
    console.log('Server is running at: ' + server.address().port);
});