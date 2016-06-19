var mongoose = require('mongoose');
var notifier = require('node-notifier');


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
    left_calf: Number
});

var userSchema = mongoose.Schema({
    fullname : String,
    fathername : String,
    username : String,
    password : String,
    email : String,
    age : Number,
    other : String,
    sizes : [sizeSchema]
});

var User = mongoose.model('User',userSchema);



    module.exports.addBody = function(req, res, next) {

        var user = User.findById(req.body._creator, function(err, collection){
            var usr = collection;
            usr.sizes.push(req.body);
            usr.save(function(err, result) {
                res.json(result);
            });
        });
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

    {
        _id: "576656ca5eb67d110bf541a5",
            fullname: "Advin Razmjo",
        fathername: "Nimatullah",
        username: "anna_admin",
        password: "123123123",
        email: "nimatullah.razmjo@gmail.com",
        age: 21,
        other: "1211312",
        __v: 2,
        sizes: [
        {
            neck: 10,
            shoulder: 11,
            chest: 11,
            right_arm: 15,
            left_arm: 12,
            waist: 12,
            hips: 13,
            righ_thigh: 12,
            left_thigh: 14,
            right_calf: 14,
            left_calf: 12,
            _id: "57665f2c2678827c0b0960fc"
        },
        {
            neck: 10,
            shoulder: 11,
            chest: 11,
            right_arm: 15,
            left_arm: 12,
            waist: 12,
            hips: 13,
            righ_thigh: 12,
            left_thigh: 14,
            right_calf: 14,
            left_calf: 12,
            _id: "57665f3d2678827c0b0960fd"
        }
    ]
    }


