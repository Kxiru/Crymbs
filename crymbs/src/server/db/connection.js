const {MongoClient} = require('mongodb');
const Db = process.env.ATLAS_URI;

const client = new MongoClient(Db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

var _db;

module.exports = {
    connectToServer: function(callback) {
        client.connect(function (err, db) {
            if(db){
                _db = db.db("game_data");
                console.log("Sucessfully connected to MongoDB");
            } return callback(err);
        });
    },

    getDb: function() {
        return _db;
    },
};

// async function listDatabases(client){
//     databasesList = await client.db().admin().listDatabases();

//     console.log("Databases");
//     databasesList.databases.forEach(db => {
//         console.log(` - ${db.name}`)
//     });
// }

// async function listCollections(){
//     collectionsList = await gameDB.listCollections().toArray();

//     console.log("Collections");
//     collectionsList.forEach(col => {
//         console.log(` - ${col.name}`)
//     });
// }

// async function listRecords(){
//     recordsList = await gameDB.collection("Locations").find({}).toArray();

//     console.log("Records");
//     console.log(recordsList);    
// }

// main().catch(console.error);