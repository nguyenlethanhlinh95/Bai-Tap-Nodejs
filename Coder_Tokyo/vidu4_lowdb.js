var express = require('express');
var bodyParser = require('body-parser');
var shortid = require('shortid'); // id identity
var app = express();
var port = 8000;

// import lowdb
var low = require('lowdb');
var FileSync = require('lowdb/adapters/FileSync');
var adapter = new FileSync('db.json');

db = low(adapter)

// Set some defaults (required if your JSON file is empty)
db.defaults({ users: [] })
  .write()


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

//listenning
app.listen(port);
console.log("Server is running at "+ port);
