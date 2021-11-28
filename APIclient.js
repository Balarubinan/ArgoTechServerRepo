let axios=require("axios")

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