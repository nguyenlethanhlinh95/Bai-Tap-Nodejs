var fs = require('fs');
var http = require('http');

var server = http.createServer(function(req,res){
    //read file
    fs.readFile('demoHtml.html',function(err,data){
        res.writeHead(200,{
            'Content-Type': 'text/html'
        });
        res.write(data);
        res.end();
    });
});

server.listen(8000);

console.log('Server is running !');
