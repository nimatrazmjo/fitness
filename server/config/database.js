module.exports = function(mongoose) {

    mongoose.connect('mongodb://localhost/fitness');

    var con = mongoose.connection;

    con.on('error', console.error.bind('Database does not connected'));

    con.once('open', function callback() {
        console.log('Database has been connected to fitness Mongodb');
    });

}
