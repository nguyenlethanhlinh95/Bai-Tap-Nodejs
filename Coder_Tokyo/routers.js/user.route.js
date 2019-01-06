var express = require('express');
var router = express.Router();
var db = require('../db');
var shortid = require('shortid'); // id identity

//reder template in folder user/index.pug
router.get('/', function(req,res){
    res.render('users/index',
    {
        users: db.get('users').value()
    });
});

// users create get form
router.get('/create', function(req,res){
    res.render('users/create');
});

// users create post form
router.post('/create', function(req,res){
    req.body.id = shortid.generate(); //  id indentity
    db.get('users')
    .push(req.body)
    .write()
    
    res.redirect('/users');
});


// Query string
router.get('/search',function(req,res){
    //get query with parameter is q
    var q = req.query.q;

    // find user in list users
    var matchedUsers = db.get('users').value().filter(function(user){
        return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
    });

    res.render('users/index',{
        users: matchedUsers
    });
});


// user detail
router.get('/:id', function(req,res){
    var id = req.params.id;
    var user = db.get('users')
    .find({ id: id })
    .value()

    res.render('users/detail',{
        user: user
    });
});

module.exports = router;