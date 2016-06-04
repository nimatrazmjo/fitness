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
    port = 2000;

//--- basic configuration
app.set('views',__dirname+'/server/views');
app.set('view engine','jade');

//---set basic routing for static files
app.use(express.static(__dirname+'/public'));

app.get('*', function(req, res) {

    res.render('layout',{title: 'Fitness Records - Nimatullah'});
});

app.listen(port,function() {
   console.log('Fitness database is running on '+port+' port');
});