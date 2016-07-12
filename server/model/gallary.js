var mongoose = require('mongoose'),
    notifier = require('node-notifier');
    ;

var gallarySchema = mongoose.Schema({
    name : String,
    title : String,
    details:String
});

var Gallary = mongoose.model('Gallary',gallarySchema);

/** List Images **/
module.exports.list = function (req, res, next) {
    Gallary.find({}).exec(function (err, collection) {
        if(err || !collection) return next(err)
        res.render('gallary/list',{rec: collection})
    });
}

/** Add Image **/
module.exports.add = function (req, res, next) {
    var g={};
    g.name = req.file.filename;
    g.title = req.body.title;
    g.details = req.body.details;
    Gallary.create(g, function (err) {
        notifier.notify({
            'title': 'Congratulation!',
            'message': 'Records successfully inserted'
        });
        res.redirect('/gallary');
    })
}