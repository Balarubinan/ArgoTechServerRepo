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

// devname will be passed from the ListTractors component
function TestSocketApi(devname){ 
  socket=io("http://localhost:5000",{secure:true})
//   socket=io("http://argo-server-1.herokuapp.com/")
  socket.on('connect',function(){
    console.log("Socket connected to server")
  })
  socket.on('ready',()=>{
    // socket.emit('requestList',{list:""})
    socket.emit('typeUpdate',{type:"view",selSock:devname})
  })
  socket.on('disconnect',()=>console.log("Disconnected from server"))
  socket.on('success',(d)=>console.log("type update done"+JSON.stringify(d)))
  socket.on('valueUpdate',({data})=>{
    console.log("data recieved is");console.log(data);
  })
  socket.on('nosenders',(d)=>console.log("No senders ready"+JSON.stringify(d)))
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



TestSocketApi("Tractor1")
SubtoSocket()