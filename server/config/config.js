var bodyParser = require('body-parser'),
    stylus = require('stylus'),
    path = require('path');
var rootpath = path.normalize(__dirname+'/../../');
module.exports = function (app, express) {

    /* basic configuration */
    app.set('views',rootpath+'/server/views');
    app.set('view engine','jade');

    /*set basic routing for static files */
    app.use(express.static(rootpath+'/public'));
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

}


