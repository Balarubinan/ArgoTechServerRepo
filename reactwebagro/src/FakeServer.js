const io=require("socket.io")(3000)//=>V2
function InitClient(callBack){
    io.on('connection',socket=>{
        console.log("A socket connected"+socket.id)
        socket.on('clientReady',()=>console.log("Ready stat Recieved from client!"))
        socket.on('valueUpdate',function(resp){
            console.log("new value recieved "+resp.value);console.log(resp)
        })
    })
    io.on('error',(error)=>console.log("Errored out"))
}

function TestCustomNameSpace(){
    const scnNamespace=io.of("/test")
    scnNamespace.on("connect",t=>{console.log("Someone connected to the test Namespace")})
    scnNamespace.on("mass",data=>console.log(data))
}

InitClient()

TestCustomNameSpace()















// io.listen(3220)

// each tractor has a unique id => liscene plate num??
// That will be registered while monitoring the device
// each new tractor will be given a module box with a unique/key

class SensorInputClient{
    constructor(tractorId,boardId){
        this.tractorId=tractorId
        this.boardId=boardId
    }
    initConnection(){

    }
    sendValue(){

    }

}

