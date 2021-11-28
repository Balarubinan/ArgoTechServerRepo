const {MongoClient} = require('mongodb');
// mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false
const uri = "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false"
let DB=null
async function main(){
    const client=new MongoClient(uri)
    try{ 
        await client.connect()
        console.log("Connected")
        await ListDbs(client)
        console.log("Just aftr listDBS")
        DB=client.db("DBForCryptoApp").collection("CryptoSubs")
        await insertPair(null,"neww@ji.com",["BTC","ETH"])
        await updateUserPref("neww@ji.com","NEWcoin")
    }catch(err){
        console.log("In catch")
        console.log(err)
    }
    finally{
        console.log("in finally")
        // await client.close()
        console.log("Client Closed")
    }
}
async function ListDbs(client){
    dblist=await client.db().admin().listDatabases();
    console.log("databases :")
    dblist.databases.forEach(db=>console.log(" "+db.name))
}
async function insertPair(client=null,email,prefArry){
    // console.log(DB)
    // Both methhods work
    if(client)
    client.db("DBForCryptoApp").collection("CryptoSubs").insertOne({email:email,pref:JSON.stringify(prefArry)})
    else
    DB.insertOne({email:email,pref:prefArry})
    // DB.findOne()
    console.log("Insert Success")
    // console.log(DB.find())
}

async function updateUserPref(email,coinName){
    let pref=DB.findOne({email:email})['pref']
    console.log(pref)
    DB.updateOne({email:email},{$set:{pref:[...pref,coinName]}})
}

async function fetchPref(email){
    return DB.findOne({email:email})
}

main().catch(console.error)
// insert
