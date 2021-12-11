var express = require('express');
const fs = require('fs');
var router = express.Router();


router.use(express.json())
router.get('/isValid/:user/:pass', async function(req, res){
    // response is sent as an actual object
    let isValid=false
    console.log(req.body)
   //  req.on(data=>console.log(data))
    fs.readFileSync("UserData/user.json", function(err, data) {
      if (err) throw err;
      const users = JSON.parse(data);
      console.log(users);
       if(users[req.body.username]==req.body.pass)
       isValid=true;
  });
  if(req.params.user=="IIPC"&&req.params.pass=="IIPCadmin")
      res.send({status:true})
   else
      res.send({status:false})
   
});
router.post('/saveUser/:name/:pass/:email', function(req, res){
      console.log(req.params)
      let predata=null;
      fs.readFileSync("UserData/user.json", function(err, data) {
         if (err) throw err;
         const users = JSON.parse(data);
         predata=users
         console.log("sff")
         console.log(users);
     })
   // preData is an array of users
     console.log(predata)
   // create a JSON object
   const user = {
      "name": req.params.name,
      "email":req.params.email,
      "pass": req.params.pass,
   };

   // convert JSON object to string
   const data = JSON.stringify(user);
   predata.push(data)

   // write JSON string to a file
   fs.writeFileSync('UserData/user.json', predata, (err) => {
      if (err) {
         throw err;
      }
      console.log("JSON data is saved.");
   });
   res.send({status:"saved "})
});

// all get,post method must be put before router.listen function for them to work
router.get('/getinfo', function(req, res){
   res.send({port:`${process.env.PORT}`,auth:"None"});
 });
 

 // Static files
 // router.use(express.static("public"));
 
 


module.exports = router;