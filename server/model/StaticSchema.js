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
}