var express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
var cors=require('cors')
const socket = require("socket.io");
var serverRouter=require('./src/seperaterouter');

var app = express();
app.use(cors())
app.use("/restApi",serverRouter)

var dataSenders=[]
var dataViewers=[]

//  alll objects inside dataSender will be Sensor
function SensorSocket(name,socket){
    this.socname=name
    this.socket=socket
}

const PORT = process.env.PORT||5000;

app.use(express.static(path.join(__dirname, 'reactwebagro/build')));
app.use(express.static('reactwebagro/public'));
app.use(express.json()); // was originally body-parser.json()

// app.use(express.static(path.join(__dirname, 'StaitcBootStrap')));
app.use(express.static('StaitcBootStrap'));
// bascially what the below lines mean is that wheneve /assets is access it is redirected to /StaticBoot...

app.use("/assets", express.static(__dirname + "/StaitcBootStrap/assets"));
app.use(express.json()); // was originally body-parser.json()


app.use("/gallery", express.static(__dirname + "/galleryImages"));
app.use(express.json()); // was originally body-parser.json()

app.get("/refresh",(req,res)=>{
    dataSenders=[]
    dataViewers=[]
    res.send({arrays:[dataSenders,dataViewers]})
})



app.get("/listSender",(req,res)=>{
    console.log(dataSenders)
    res.send({senders:Array.from(dataSenders.map(soc=>soc.socname))})
})

const server = app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}`);
  console.log(`http://localhost:${PORT}`);
});

// serving react
console.log(`${process.cwd()}`)

// express by deafult serves the file name index.html inside the static folder...even if a route is not defined for it
app.get('/tempBoot', (req,res) => {
    res.sendFile(path.join(__dirname, 'StaitcBootStrap/index.html'));
});


app.get('*', (req,res) => {
    res.sendFile(path.join(__dirname, 'reactwebagro/build/index.html'));
});

// Socket setup
const io = socket(server);

io.on("connection", function (socket) {
  console.log("Made socket connection: "+socket.id);
  socket.emit("ready",{})
 
  socket.on("typeUpdate",data=>{
      if(data.type=="send"){
        socket.on("valueUpdate",data=>{console.log(data)})
        dataSenders.push(new SensorSocket(data.devicename,socket.id))
        console.log("Accepted a Sender")
        //do here : emit a signal to all the viewers and make them recieve it so that 
        // restapi need no be called everysingle time
      }
      else if(data.type=="view"){
          dataViewers.push(socket)
          console.log("Accepted a Viewer")
          if(dataSenders.length){
            // to support selecting the Socket get the socket name 
            // and implement a filter here
                
                let selSock=data.selSock
                console.log(selSock)
                console.log(dataSenders.find(soc=>soc.socname==selSock))
                let needSock= io.sockets.connected[dataSenders.find(soc=>soc.socname==selSock).socket]
                if(needSock){
                    console.log("In socket found")
                    needSock.emit("ping",{})
                    needSock.on("valueUpdate",data=>{
                        console.log("Sending to viewer")
                        socket.emit("newValue",data)
                    })
                    needSock.on('disconnect',()=>{
                        console.log("needsock disconnect"+needSock.id)
                        needSock.disconnect()

                    })
                }
                else{
                    console.log("socket not found")
                    socket.emit("nosenders",{"msg":`${data.selSock} not found`})
                }
            }else{
                console.log("in nosender ")
                socket.emit("nosenders",{"msg":`${data.selSock} not found`})
            }
          }
      socket.emit('success',{})
  })
  socket.on('disconnect',()=>{
      dataSenders=dataSenders.filter(soc=>soc.socket!=socket.id) 
      console.log("socket disconnected "+socket.id )
  })
  
}); 

