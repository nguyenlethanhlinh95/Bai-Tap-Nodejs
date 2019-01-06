var http = require('http');
var server = http.createServer(function(req,res){
    //read html
    res.writeHead(200,{
        'Content-Type': 'text/html'
    });
    res.write("Hello world");

    //output url
    res.write(req.url);
    res.end();
});

server.listen(8000);

console.log("Server is running !!");