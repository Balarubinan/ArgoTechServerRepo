const db = require('diskdb');
db.connect('./UserData', ['dataStore','user']);

// if (!db.dataStore.find().length) {
//     const movie = { id: "tt0110357", name: "The Lion King", genre: "animation" };
//     db.dataStore.save(movie);
//  }

if(db.dataStore==null||db.user==null){
    console.log("Db intialise error!")
}else{
    console.log("DB setup complete")
    // console.log(db.dataStore.find());
    // console.log(db.user.find())
}

 function storeContact(name,email,phone,info){
     db.dataStore.save({
         name:name,
         email:email,
         phone:phone,
         info:info
     })
     console.log("Save success!!")
 }
 
 function saveNewUser(name,email,pass){
     db.user.save({
         id:email,
         name:name,
         email:email,
         pass:pass
     })
     console.log("New User save Success")
 }

 function getUser(email){
    let results=db.user.find({email:email})
    console.log("In get User") // returns empty
    console.log(results)
     if(results.length>0)
        return results[0]
    else
        return null
 }

 function getAllContacts(){
     let results=db.dataStore.find()
     console.log(results)
     return results
 }

//  saveNewUser("Balarubinan","bala@gmail.com","MyPass")
//  console.log(getUser("bala@gmail.com"))

//  storeContact("bala","bala#hfh.com","930909094","i am mr rao")
module.exports={
    storeContact:storeContact,
    getUser:getUser,
    saveNewUser:saveNewUser,
    getAllContacts:getAllContacts
}