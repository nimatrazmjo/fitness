var mongoose = require('mongoose');
var notifier = require('node-notifier');
var Comment = mongoose.Schema({
	fullname : String,
	email : String,
	comment : String,
	created_at : Date
});

var Blog = mongoose.Schema({
	title : String,
	body : String,
	user_id : String,
	created_at : Date,
	updated_at : Date,
	comment : [Comment]
});

var Blog = mongoose.model('Blog', Blog);

/** List all posts **/
module.exports.listRecords = function(req, res, next) {
	Blog.find({}).exec(function(err, collection){
		res.render('blog/list',{records:collection})
	});
}

/** Add new Post  **/
module.exports.add = function (req, res, next) {
	res.render('blog/add');
}

/** Store post **/

module.exports.store = function (req, res, next) {
	Blog.create(post_json(req), function (err) {
		if (err) return next(err)
		notifier.notify({
			'title': 'Congratulation!',
			'message': 'Records successfully inserted'
		});
		res.redirect('/blog');
	});
}

function post_json(req) {
	var postjson = {};
	postjson.title = req.param('title');
	postjson.body = req.param('content');
	return postjson;
}