module.exports = exports =function(mongoose) {
    var bodyType = mongoose.Schema(
        {
            name : String
        }
    );
    var bodyType = mongoose.model('BodyType',bodyType);
    bodyType.find({}).exec(function(err, collection) {
       if(collection.length === 0 ) {
            bodyType.create({name: "Shoulder"});
            bodyType.create({name: "Chest"});
            bodyType.create({name: "Biceps"});
            bodyType.create({name: "Triceps"});
            bodyType.create({name: "Back"});
            bodyType.create({name: "Neck"});
            bodyType.create({name: "Forarm"});
            bodyType.create({name: "Abs"});
            bodyType.create({name: "Legs"});
            bodyType.create({name: "Calf"});
       }
    });

    var weekDays = mongoose.Schema(
        {
            name: String
        }
    )

    var Days = mongoose.model('Days', weekDays);
    Days.find({}).exec(function(err, collection) {
       if(collection.length == 0) {
           Days.create({name: "Saturday"});
           Days.create({name: "Sunday"});
           Days.create({name: "Monday"});
           Days.create({name: "Tuesday"});
           Days.create({name: "Wednesday"});
           Days.create({name: "Thursday"});
           Days.create({name: "Friday"});
       }
    });
}