var express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
var cors=require('cors')
const socket = require("socket.io");
var serverRouter=require('./SeperateRouter')

var app = express();
app.use(cors())
app.use("/restApi",serverRouter)

var dataSenders=[]
var dataViewers=[]

const PORT = process.env.PORT||5000;

app.use(express.static(path.join(__dirname, 'agro-react-app/build')));
app.use(express.json()); // was originally body-parser.json()


const server = app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}`);
  console.log(`http://localhost:${PORT}`);
});

//  serving react
app.get('*', (req,res) => {
    res.sendFile(path.join(__dirname, 'agro-react-app/build/index.html'));
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

