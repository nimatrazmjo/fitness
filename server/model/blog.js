var mongoose = require('mongoose');

var Comment = mongoose.Schema({
	fullname : String,
	email : String,
	comment : String,
	created_at : date
});

var Blog = mongoose.Schema({
	title : String,
	body : String,
	user_id : String,
	created_at : date,
	updated_at : date,
	comment : [Comment]
});

var Blog = mongoose.model('Blog', Blog);

module.exports.listRecords = function(req, res, next) {
	Blog.find({}).exec(function(err, collection){
		res.send(collection);
	});
}