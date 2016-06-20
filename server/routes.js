var path = require('path');
var notifier = require('node-notifier');
module.exports = function(app,config) {

    /*** Load Schema files ***/
    var rootpath = path.normalize(__dirname+'/../');
    var schema=require(rootpath+'/server/model/schema.js');

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

    app.get('/about_us', function(req, res) {
       res.render('about_us');
    });

    /** Default Routing **/
    app.get('*', schema.allRecords);
}