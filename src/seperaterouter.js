var DBop=require('./dbconnect')
var express = require('express');
const fs = require('fs');
var router = express.Router();



router.use(express.json())
// router.use(express.urlencoded())

router.get('/isValid/:email/:pass',function(req, res){
    // response is sent as an actual object
    let isValid=false
    console.log(req.params)
   //  req.on(data=>console.log(data))
   let users=null;
   // try{users=fs.readFileSync("UserData/user.txt");}catch(err){console.log("erroe herw"+err)}
   // users=JSON.parse(users)
   let result=DBop.getUser(req.params.email)
   console.log(typeof result)
   if(result!=null&&result.pass==req.params.pass)
   res.send({status:true})
   else
   res.send({status:false});
   }
);

router.post("/texting",(r,ee)=>{
   console.log("This is on")
   console.log(r.body)
   console.log(r.data)
   ee.send({"imma ere":"yoooy yoo"})
})

router.post('/saveUser/:name/:pass/:email',function(req, res){
      console.log(req.params)
   // create a JSON object
   const user = {
      "name": req.params.name,
      "email":req.params.email,
      "pass": req.params.pass,
   };
   DBop.saveNewUser(user.name,user.email,user.pass)
   res.send({stat:"saved"})
   // convert JSON object to string
   // const data = JSON.stringify(user);
   // predata=predata?predata:[]
   // console.log(typeof predata);console.log("****");
   // predata.push(data)
   // console.log(predata);console.log("****");
   

   // // write JSON string to a file
   // fs.writeFileSync('UserData/user.txt',JSON.stringify(predata)+"\n", (err) => { // STARTHERE
   //    if (err) {
   //       throw err;
   //    }
   //    console.log("JSON data is saved.");
   // });
   
});

// all get,post method must be put before router.listen function for them to work
router.get('/getinfo', function(req, res){
   res.send({port:`${process.env.PORT}`,auth:"None"});
 });
 
 // Static files
 // router.use(express.static("public"));
//  add method for using contact Database
//  add method for login as seperate component
router.post('/saveNewContact/:name/:email/:number/:detail',function(req,res){
   console.log(req.params)
   DBop.storeContact(req.params.name,req.params.email,req.params.phone,req.params.detail)
   res.send({"stst":"check"})
})

router.get('/getAllSavedContacts',(req,res)=>{
   res.send({"results":DBop.getAllContacts()})
})

module.exports = router;
