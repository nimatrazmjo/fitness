var mongoose = require('mongoose');
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

module.exports.add = function(req,res, next) {
    var rec = records_json(req);
    User.create(rec, function(err) {
        if(err) return next(err);
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
module.exports.allRecords = function(req, res, next)
{
    User.find({}).exec(function(err, collection) {

        console.log(collection);
        res.render('profiles/list',{records : collection});
    });
}