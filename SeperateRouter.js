var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
    // response is sent as an actual object
   res.send({"pulse":100});
});
router.post('/', function(req, res){
   res.send(' Router POST route on things.');
});


module.exports = router;