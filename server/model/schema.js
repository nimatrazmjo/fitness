var mongoose = require('mongoose');
var notifier = require('node-notifier');
var userSchema = mongoose.Schema({
    fullname : String,
    fathername : String,
    username : String,
    password : String,
    email : String,
    age : Number,
    other : String
});
var User = mongoose.model('User',userSchema);

/** Add records to DB **/

module.exports.add = function(req,res, next) {
    var rec = records_json(req);
    User.create(rec, function(err) {
        if(err) return next(err);
        notifier.notify({
            'title': 'Congratulation!',
            'message': 'Records successfully inserted'
        });
        res.redirect('/list_user');
    });
}

var records_json = function(req) {
    var user = {};
    user.fullname = req.param('fullname');
    user.fathername = req.param('fathername');
    user.username = req.param('username');
    user.password = req.param('password');
    user.email = req.param('email');
    user.age = req.param('age');
    user.other = req.param('other');
    return user;
}

/** List all records **/

module.exports.allRecords = function(req, res, next) {
    User.find({}).exec(function(err, collection) {
        res.render('profiles/list',{records : collection});
    });
}

/** View selected records **/

module.exports.views = function (req, res, next) {
    var id = req.param('id');
    User.findById(id).exec(function(err, collection) {
       if(err) return next(err);
       res.render('profiles/view',{data:collection});
    });
}