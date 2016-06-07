/**
 * @author : Nimatullah Razmjo <nimatullah.razmjo@gmail.com>
 * @date : June 04, 2016
 * @type {*|exports}
 */

var express = require('express'),
    app = express(),
    mongoose = require('mongoose'),
    port = 2000;

/*** Configuration files ***/
require('./server/config/config.js')(app, express);

/*** Connect to database*/
require('./server/config/database.js');

/*** Load Schema files ***/
require('./server/model/schema.js');


/* Routing */
app.get('/add_user', function(req, res) {
    res.render('profiles/add');
});
app.get('/list_user', function(req, res ) {
   res.render('profiles/list');
});
app.post('/user_add',function(req, res, next) {
   var user = {};
    user.fullname = req.param('fullname');
    user.fathername = req.param('fathername');
    user.username = req.param('username');
    user.password = req.param('password');
    user.email = req.param('email');
    user.age = req.param('age');
    user.other = req.param('other');
    var User = mongoose.model('userModel');
    res.send(User);

});

//---generate Schema

app.get('*', function(req, res) {

    res.render('layout',{title: 'Fitness Records - Nimatullah'});
});

app.listen(port,function() {
   console.log('Fitness database is running on '+port+' port');
});