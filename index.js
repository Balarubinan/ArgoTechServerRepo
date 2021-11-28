var express = require('express');
var app = express();
var cors=require('cors')
const socket = require("socket.io");
var serverRouter=require('./SeperateRouter')
app.use(cors())



const PORT = 5000;

// all get,post method must be put before app.listen function for them to work
app.get('/getinfo', function(req, res){
  res.send({port:PORT,auth:"None"});
});

const server = app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}`);
  console.log(`http://localhost:${PORT}`);
});

// Static files
app.use(express.static("public"));

app.use("/restpath",serverRouter)

// Socket setup
const io = socket(server);

io.on("connection", function (socket) {
  console.log("Made socket connection");
}); 