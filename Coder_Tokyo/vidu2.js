var express = require('express');
var app = express();
var port = 8000;

// user template in view folder with index.pug
app.set('view engine', 'pug');
app.set('views','./views');

app.get('/', function(req,res){
    // res.send('<h1>Hello Coders.Tolyo</h1><a href="/users">User list</a>');
    res.render('index',{
        'name': 'aaa'
    });
});

//reder template in folder user/index.pug
app.get('/users', function(req,res){
    res.render('users/index',
    {
        users:
        [
            {id: 1,name: 'Linh'},
            {id: 2,name: 'Hien'}
        ]
        
    }
    );
});


app.listen(port);
console.log("Server is running at "+ port);
