var mongoose = require('mongoose');

var bodySchema = mongoose.Schema({
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
var Body = mongoose.model('Body',bodySchema);
module.exports.add = function(req, res, next) {
    Body.create(req.body, function(err) {
        res.red
    })
}