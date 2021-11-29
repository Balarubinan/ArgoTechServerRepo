var express = require('express');
var app = express();
var cors=require('cors')
const socket = require("socket.io");
var serverRouter=require('./SeperateRouter')
app.use(cors())

var dataSenders=[]
var dataViewers=[]

const PORT = process.env.PORT||5000;

// all get,post method must be put before app.listen function for them to work
app.get('/getinfo', function(req, res){
  res.send({port:PORT,auth:"None"});
});

app.get("/refresh",(req,res)=>{
    dataSenders=[]
    dataViewers=[]
    res.send({arrays:[dataSenders,dataViewers]})
})
// Static files
app.use(express.static("public"));

app.use("/restpath",serverRouter)


const server = app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}`);
  console.log(`http://localhost:${PORT}`);
});

// Socket setup
const io = socket(server);

io.on("connection", function (socket) {
  console.log("Made socket connection: "+socket.id);
  io.emit("ready",{})
  socket.on("valueUpdate",data=>{console.log(data)})
  socket.on("typeUpdate",data=>{
      if(data.type=="send"){
          dataSenders.push(socket)
          console.log("Accepted a Sender")
      }
      else if(data.type=="view"){
          dataViewers.push(socket)
          console.log("Accepted a Viewer")
          if(dataSenders.length){
            // to support selecting the Socket get the socket name 
            //  and implement a filter here
              dataSenders[0].on("valueUpdate",data=>{
                  socket.emit("newValue",data)
              })
          }else{
              console.log("in no senders")
              socket.emit('nosenders',{senders:dataSenders})
          }
      }
      socket.emit('success',{})
  })
  socket.on('disconnect',()=>{
      console.log("socket disconnected "+socket.id )
  })
}); 

