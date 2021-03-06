let axios=require("axios")
let socket=null
const io=require("socket.io-client")
let URLS=require("./URLS.js")
let baseUrl=URLS.baseUrl

export function RefreshServer(){
  // no need to wait...because refresh operation is not sync
  // axios.get("http://localhost:5000/refresh")
  axios.get(URLS.baseUrl+"/refresh")
}

export function GetSenderList(){
 
  // return axios.get("http://localhost:5000/listSender")
  console.log("Calling listSenderAPI")
  console.log("newstuff")
  return axios.get(baseUrl+"/listSender")

}

// devname will be passed from the ListTractors component
export function InitSocketApi(devname){ 
  // socket=io("http://localhost:5000",{secure:true})
  socket=io(baseUrl+"/")
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

export function SubtoSocket(callBack=(data)=>{console.log(data)}){
    if(socket){
        socket.on('newValue',data=>{
            // console.log("I am the one callign the callBack haha is "+JSON.stringify(data))
            callBack(data)
        })
    }
}
export function UnSubFromSocket(callBack){
  if(callBack){
    // the specified callback will be removed from the list for newValue event
    // console.
    // tried off,removeListner and remmoveallListener
    socket.removeListener('newValue',callBack)
  }
}


console.log(baseUrl)
// baseURl without the ending '/'
// http://localhost:5000
// TestSocketApi("Tractor1")
// SubtoSocket()