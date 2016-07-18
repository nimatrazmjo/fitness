var path = require('path');
var notifier = require('node-notifier'),
    multer = require('multer'),
    uploads = multer({dest: 'public/uploads'})
module.exports = function(app,config) {

    /*** Load Schema files ***/
    var rootpath = path.normalize(__dirname+'/../');
    var schema=require(rootpath+'/server/model/schema.js');
    var auth = require(rootpath+'/server/model/authenticate.js');
    var blog = require(rootpath+'/server/model/blog.js');
    var gallary = require(rootpath+'/server/model/gallary.js');

    /* Routing */
    app.get('/add_user', function(req, res) {
        res.render('profiles/add');
    });
    app.get('/list_user', schema.allRecords);
    app.get('/view_user/:id',schema.views);
    app.post('/user_add',schema.add);

    /** Body Size routing **/
    app.post('/new_size', schema.addBody);

    /** Workout Routing**/
    var workouts = require(rootpath+'/server/model/workouts');
    app.get("/workouts",workouts.allrecords);
    app.post('/add_workouts',workouts.saverecords);
    app.get('/workouts/:id',workouts.deleterecords);

    /** Contact Us **/
    app.get('/contact-us',function(req, res) {
       res.render('contact_us');
    });
    app.post('/contact_us',function(req, res) {
        notifier.notify({
            'title': 'Thank you!',
            'message': 'We recieve you email. We will get back to you within 24 hours'
        });
        res.redirect("/");
    });

    /** About Us **/
    app.get('/about_us', function(req, res) {
       res.render('about_us');
    });

    /*** Athenticate **/

    app.get('/login', auth.login);
    app.get('/signup', auth.signup);
    app.post('/signup', auth.signuppost);

    /** Blog  **/

    app.get('/blog', blog.listRecords);
    app.get('/new_post',blog.add);
    app.post('/post_record', blog.store);
    /** Gallary **/

    app.get('/gallary',gallary.list);
    app.post('/gallary-add',uploads.single('image_file'),gallary.add);
    /** Default Routing **/
    app.get('*', schema.allRecords);
}