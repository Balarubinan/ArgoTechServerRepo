var express = require('express');
const fs = require('fs');
var router = express.Router();


router.use(express.json())

router.get('/isValid/:user/:pass',function(req, res){
    // response is sent as an actual object
    let isValid=false
    console.log(req.body)
   //  req.on(data=>console.log(data))
   let users=null;
   try{users=fs.readFileSync("UserData/user.txt");}catch(err){console.log("erroe herw"+err)}
   users=JSON.parse(users)
   for(let user of users){
      // i stored the user as a jsonstring while writing
      user=JSON.parse(user)
      if(req.params.user==user.name&&req.params.pass==user.pass)
      {res.send({status:true});return;}
   }
   res.send({status:false});
   }
);

router.post("/texting",(r,ee)=>{
   console.log("This is on")
   ee.send({"imma ere":"yoooy yoo"})
})

router.post('/saveUser/:name/:pass/:email',function(req, res){
      console.log(req.params)
      let predata=null;
      predata=fs.readFileSync("UserData/user.txt")
      predata=JSON.parse(predata)
   // preData is an array of users
     console.log(predata+"ddsdsfdd")
   // create a JSON object
   const user = {
      "name": req.params.name,
      "email":req.params.email,
      "pass": req.params.pass,
   };

   // convert JSON object to string
   const data = JSON.stringify(user);
   predata=predata?predata:[]
   console.log(typeof predata);console.log("****");
   predata.push(data)
   console.log(predata);console.log("****");
   

   // write JSON string to a file
   fs.writeFileSync('UserData/user.txt',JSON.stringify(predata)+"\n", (err) => { // STARTHERE
      if (err) {
         throw err;
      }
      console.log("JSON data is saved.");
   });
   res.send({stat:"saved"})
});

// all get,post method must be put before router.listen function for them to work
router.get('/getinfo', function(req, res){
   res.send({port:`${process.env.PORT}`,auth:"None"});
 });
 
 // Static files
 // router.use(express.static("public"));
//  add method for using contact Database
//  add method for login as seperate component
router.post('/saveNewContact',function(req,res){
   console.log(req.data)
   res.send({"stst":"check"})
})

 


module.exports = router;