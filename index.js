/**
 * @author : Nimatullah Razmjo <nimatullah.razmjo@gmail.com>
 * @date : June 04, 2016
 * @type {*|exports}
 */

var express = require('express'),
    app = express(),
    mongoose = require('mongoose'),
    port = 9000;

/*** Configuration files ***/
require('./server/config/config.js')(app, express);

/*** Connect to database*/
require('./server/config/database.js')(mongoose);

/*** Load Schema files ***/
var schema=require('./server/model/schema.js');
var bodySchema = require('./server/model/bodySchema.js');


/* Routing */
app.get('/add_user', function(req, res) {
    res.render('profiles/add');
});
app.get('/list_user', schema.allRecords);
app.get('/view_user/:id',schema.views);
app.post('/user_add',schema.add);

/** Body Size routing **/

app.post('/new_size', bodySchema.add);

//---generate Schema

app.get('*', schema.allRecords);

app.listen(port,function() {
   console.log('Fitness database is running on '+port+' port');
});