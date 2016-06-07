/**
 * @author : Nimatullah Razmjo <nimatullah.razmjo@gmail.com>
 * @date : June 04, 2016
 * @type {*|exports}
 */

var
    http = require('http'),
    express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    stylus = require('stylus'),
    port = 2000;

/* basic configuration */
app.set('views',__dirname+'/server/views');
app.set('view engine','jade');
//---set basic routing for static files
app.use(express.static(__dirname+'/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

function compile(str, path) {
    return stylus(str).set('filename', path);
}
app.use(stylus.middleware({
    src: __dirname+'/public',
    compile : compile
}));

/* Routing */

app.get('/add_user', function(req, res) {
    res.render('profiles/add');
});
app.get('/list_user', function(req, res ) {
   res.render('profiles/list');
});
app.post('/user_add',function(req, res, next) {
   res.send('Under process');
});
/* Connect to database*/
mongoose.connect('mongodb://localhost/fitness');
var con = mongoose.connection;
con.once('connected', function () {
   console.log('Database has been connected to fitness Mongodb');
});

app.get('*', function(req, res) {

    res.render('layout',{title: 'Fitness Records - Nimatullah'});
});

app.listen(port,function() {
   console.log('Fitness database is running on '+port+' port');
});