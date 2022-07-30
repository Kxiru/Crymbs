const {MongoClient} = require('mongodb');
const uri = "mongodb+srv://crymbed:Ilovebread1@cluster0.dnub9ug.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);
const gameDB = client.db("game_data");

async function main() {
    try {
        //Connect to the MongoDB cluster
        await client.connect();

        //Make the appropriate DB calls
        // await listDatabases(client);
        // await listCollections();
        await listRecords();
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

async function listDatabases(client){
    databasesList = await client.db().admin().listDatabases();

    console.log("Databases");
    databasesList.databases.forEach(db => {
        console.log(` - ${db.name}`)
    });
}

async function listCollections(){
    collectionsList = await gameDB.listCollections().toArray();

    console.log("Collections");
    collectionsList.forEach(col => {
        console.log(` - ${col.name}`)
    });
}

async function listRecords(){
    recordsList = await gameDB.collection("Locations").find({}).toArray();

    console.log("Records");
    console.log(recordsList);    
}

main().catch(console.error);