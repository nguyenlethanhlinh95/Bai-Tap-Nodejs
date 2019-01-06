var express = require('express');
var bodyParser = require('body-parser');
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

//reder template in folder user/index.pug
app.get('/users', function(req,res){
    res.render('users/index',
    {
        users: db.get('users').value()
    });
});

// users create get form
app.get('/users/create', function(req,res){
    res.render('users/create');
});

// users create post form
app.post('/users/create', function(req,res){
    db.get('users')
    .push(req.body)
    .write()
    
    res.redirect('/users');
});

// Query string
app.get('/users/search',function(req,res){
    //get query with parameter is q
    var q = req.query.q;

    // find user in list users
    var matchedUsers = db.get('users').value().filter(function(user){
        return user.name.toLowerCase().indexOf(q.toLowerCase) !== -1;
    });

    res.render('users/index',{
        users: matchedUsers
    });
});


// user detail
app.get('/users/:id', function(req,res){
    var id = parseInt(req.params.id);
    console.log(typeof id);
    
    var user = db.get('users')
    .find({ id: id })
    .value()

    res.render('users/detail',{
        user: user
    });
});

//listenning
app.listen(port);
console.log("Server is running at "+ port);
