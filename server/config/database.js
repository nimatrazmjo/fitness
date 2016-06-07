module.exports = function() {
    mongoose.connect('mongodb://localhost/fitness');
    var con = mongoose.connection;
    con.once('connected', function () {
        console.log('Database has been connected to fitness Mongodb');
    });
}