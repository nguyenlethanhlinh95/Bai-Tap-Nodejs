var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var port = 8000;

var userRouter = require('./routers.js/user.route');


// user template in view folder with index.pug
app.set('view engine', 'pug');
app.set('views','./views');

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get('/', function(req,res){
    // res.send('<h1>Hello Coders.Tolyo</h1><a href="/users">User list</a>');
    res.render('index',{
        'name': 'aaa'
    });
});

// call user router
app.use('/users',userRouter);

//listenning
app.listen(port);
console.log("Server is running at "+ port);
