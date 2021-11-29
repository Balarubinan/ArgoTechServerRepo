var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
    // response is sent as an actual object
   res.send({"pulse":100});
});
router.post('/', function(req, res){
   res.send(' Router POST route on things.');
});

// all get,post method must be put before router.listen function for them to work
router.get('/getinfo', function(req, res){
   res.send({port:PORT,auth:"None"});
 });
 
 router.get("/refresh",(req,res)=>{
     dataSenders=[]
     dataViewers=[]
     res.send({arrays:[dataSenders,dataViewers]})
 })
 // Static files
 // router.use(express.static("public"));
 
 


module.exports = router;