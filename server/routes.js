path = require('path');
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

    /** Default Routing **/
    app.get('*', schema.allRecords);
}