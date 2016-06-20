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
var config=require('./server/config/config.js')(app, express);

/*** Connect to database*/
require('./server/config/database.js')(mongoose);

require('./server/model/StaticSchema.js')(mongoose);

require('./server/routes.js')(app,config);

app.listen(port,function() {
   console.log('Fitness database is running on '+port+' port');
});