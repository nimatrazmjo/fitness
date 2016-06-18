var mongoose = require('mongoose');
var notifier = require('node-notifier');
var userSchema = mongoose.Schema({
    fullname : String,
    fathername : String,
    username : String,
    password : String,
    email : String,
    age : Number,
    other : String,
    sizes : [{type: mongoose.Schema.Types.ObjectId, ref:'Size'}]
});

var sizeSchema = mongoose.Schema({
    neck: Number,
    shoulder: Number,
    chest: Number,
    right_arm: Number,
    left_arm: Number,
    waist: Number,
    hips: Number,
    righ_thigh: Number,
    left_thigh: Number,
    right_calf: Number,
    left_calf: Number,
    _creator : { type: Number, ref: 'User' },
    fans     : [{ type: Number, ref: 'User' }]
});

var Size = mongoose.model('Size',sizeSchema);

var User = mongoose.model('User',userSchema);



module.exports.addBody = function(req, res, next) {

    Size.populate(req.body,{path:"_creator"}, function (err, collection) {
        console.log('collection'+collection);
        users.push({
            _creator:"10212102120102100"
        });
    })
    res.redirect('/');
}


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