var http = require('http');

var server = http.createServer(function(req,res){
    var url = req.url;
    switch(url)
    {
        case '/':
            // set reponse header
            res.writeHead(200,{'Content-Type':'text-html'});
            //set repose content
            res.write('<html><body><p>This is home page.</p></body></html>')
            res.end();
            break;
        case '/student':
            // set reponse header
            res.writeHead(200,{'Content-Type':'text-html'});
            res.write('<html><body><p>This is Student page.</p></body></html>')
            res.end();
        break;
        case '/admin':
            // set reponse header
            res.writeHead(200,{'Content-Type':'text-html'});
            res.write('<html><body><p>This is admin page.</p></body></html>')
            res.end();
        break;
        default:
            res.end('Invalid Request !');
        break;
    }
});
server.listen(8081);
console.log('Server is running !');