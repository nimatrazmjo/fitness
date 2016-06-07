var mongoose = require('mongoose');

var Schema = mongoose.Schema;

module.exports = function() {
    var userSchema = new Schema({
        fullname : String,
        fathername : String,
        username : String,
        password : String,
        email : String,
        age : Number,
        other : String
    });
    var User = mongoose.model('userModel',userSchema);
}