var mongoose = require('mongoose');
var notifier = require('node-notifier');

/** Schema **/
var bodyType = mongoose.model('BodyType');

var schema = mongoose.Schema({
    type:String,
    name : String,
    detailss : String
});
var Workouts = mongoose.model('Workouts', schema);
var bodyType = mongoose.model('BodyType');

/**  All records ***/
module.exports.allrecords = function(req,res) {
    Workouts.find({}).exec(function(err, collections){
        var body =bodyType.find({}).exec(function(err,body){
            res.render('workouts/list',{data:collections,body:body});
        });
    });
}

/** Save Records **/
module.exports.saverecords = function(req, res) {
    Workouts.create(req.body, function(err) {
        notifier.notify({
            'title': 'Congratulation!',
            'message': 'Records successfully inserted'
        });
        res.redirect('/workouts');
    })
}


/*** Delete Records **/
module.exports.deleterecords = function(req, res) {
    Workouts.remove({_id:req.params.id}, function(err) {
        notifier.notify({
            'title': 'Bad news!',
            'message': 'Record Deleted'
        });
        res.redirect('/workouts');
    })
}