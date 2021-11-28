let axios=require("axios")
let socket=null
const io=require("socket.io-client")
function TestRestApi(){
    axios.get("http://localhost:8080/homepage")
    .then(r=>{
        console.log("Data recieved from home")
        console.log(r.data.pulse)
    },err=>console.log(err))

    axios.get("http://localhost:8080/serverAPI")
    .then(r=>{
        console.log(r.data.pulse)
        console.log("data recieved ")
    },err=>console.log(err))
}

function TestSocketApi(){ 
  socket=io("http://localhost:5000",{secure:true})
//   socket=io("https://argo-server-1.herokuapp.com/",{secure:true})
  socket.on('connect',function(){
    console.log("Socket connected to server")
  })
  socket.on('ready',()=>{
      socket.emit('typeUpdate',{type:"view"})
  })
  socket.on('disconnect',()=>console.log("Disconnected from server"))
  socket.on('success',()=>console.log("type update done"))
  socket.on('valueUpdate',({data})=>{
    console.log("data recieved is");console.log(data);
  })
  socket.on('nosenders',()=>console.log("No senders ready"))
  socket.on('error',()=>console.log("Error while trying to connect"))
}

function SubtoSocket(callBack=(data)=>{console.log(data)}){
    if(socket){
        socket.on('newValue',data=>{
            console.log("data recieved is "+JSON.stringify(data))
            callBack(data)
        })
    }
}

TestSocketApi()
SubtoSocket()