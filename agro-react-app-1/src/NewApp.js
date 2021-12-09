// import logo from './logo.svg';
// import './App.css';
// import React from 'react';
// import ReactDom from 'react-dom';
// import Button from '@mui/material/Button'
// import Alert from '@mui/material/Alert'
// import {Router,Route,Link,browserHistory,IndexRoute } from 'react-router'
// // import {FectchFromBackend,WriteToBackend} from './BackendConnect';

// // this variable will hold form objects
// class DBoperation{
//     constructor(props){
//         this.cur_form_data=[
//             {
//                 title:'form1',
//                 name:'Bala',
//                 num:9629902359,
//                 addr:"51,scl cross st"
//             }
//         ]
//     }
//     Fetch_old_forms(){
//         // this function must do DB operation and 
//         //  return an array of form objects
//         // cur_form_data is just for DEBUG
//         return this.cur_form_data
//     }
//     save_form(newForm){
//         // Implement DB write here
//         console.log("save form called")
//         // this.cur_from_data.append(newForm)

//     }
// }
// class RTT_checker extends React.Component{
//     constructor(props){
//         super(props)
//         this.state={RTT:0,time:null}
//         this.RTT_update=this.RTT_update.bind(this)
//         // setInterval(() =>this.RTT_update(), 0);
//         this.sendReq=this.sendReq.bind(this)
//         // setTimeout(()=>this.sendReq,5)
//         this.sendReq()
//         this.setState({RTT:"Sending Packet in 5"})
//     }
//     sendReq(){
//         console.log("in hedfre")
//         WriteToBackend({tid:"4001","name":"MR.Doodle"}).then(()=>{console.log("in accept")},()=>{})
//     }
//     componentDidMount(){
//         this.setState({time:new Date().getTime()})
//     }
//     RTT_update(){
//         FectchFromBackend().then(r=>{
//             let v=this.state.time,n=new Date().getTime()
//             this.setState({time:n,RTT:n-v})
//         })
//     }
//     render(){
//         return(<div>RTT:{this.state.RTT}</div>)
//     }
// }
// class FormCreator extends React.Component{
//     constructor(props){
//         super(props)
//         this.state={fields:0,cmpnts:[],active:true,teachinfo:[]}
//         this.add_field=this.add_field.bind(this)
//         this.save_form=this.save_form.bind(this)
//         this.add_field()
//         this.teacher_names=FectchFromBackend()
//         // can you reuse the results of a resolved promise??
//         //  ie can this.teacher_name be used again somthing like this.teacher_names.results??
//         // see How to disable CORS in ReactApp, DjangoCORS is disabled => Django alone is enough
//         this.teacher_names.then(r=>{
//             let res=JSON.parse(r)
//             console.log(res.results)
//             // for some reason returned result is string
//             for(let obj of res.results){
//                 this.state.teachinfo.push(<p>Teacher id :{obj.tid} Teacher Name : {obj.name}</p>)
//             }
//         })
//     }
//     add_field(){
//         let i=this.state.fields
//         let v=<div>
//             Enter field {i+1} Name:
//             <input type="text" id={i+1}/>
//         </div>;
//         this.setState({
//             fields:this.state.fields+1,
//             cmpnts:[...this.state.cmpnts,v]
//         })
//         console.log("This is called "+this.state.fields)
//     }
//     save_form(){
//         if(this.state.fields){
//             let formObj={}
//             let arr=this.state.cmpnts
//             formObj['title']=arr[0]
//             formObj['fields']=[]
//             for(let com of this.state.cmpnts){
//                 console.log(com)
//                 formObj.fields.push(com.value)
//             }
//             this.setState({active:false})
//             console.log(formObj)
//             new DBoperation().save_form()
//         }
//         this.setState({fields:0,cmpnts:[]})
//         console.log("Save form called")
//     }
//     render(){
//         return(
//             <div>
//             {this.state.active &&
//             <div>
//                 <h2>New Form</h2>
//                 {this.state.cmpnts}
//                 <Button onClick={this.add_field} variant="contained">Add field</Button>
//                 <Button onClick={this.save_form} variant="contained">Save form</Button>
//                 {this.state.teachinfo.length>0 && 
//                 this.state.teachinfo.map((v)=>v)}
//             </div>}
//             </div>
//         )
//     }
// }
// class NewApp extends React.Component{
//     constructor(props){
//         super(props)
//         this.state={forms:new DBoperation().Fetch_old_forms(),newform:false}
//         this.handler=this.handler.bind(this)
//     }
//     handler(){
//         this.setState({newform:true})
//     }
//     render(){
//         return(
//             <div>
//                 <RTT_checker/>
//                 <h1>Form Creator</h1>
//                 {this.state.forms.length>0 && <h1>Forms are {this.state.forms[0].title}</h1>}
//                 {!this.state.newform}
//                 <Button variant="contained" onClick={this.handler}>Create New form</Button>
//                 {this.state.newform && <FormCreator/>}
//             </div>
//         )
//     }
// }
// export default NewApp;

// // As this app is already linked to Django
// // Use this to finish the form application
// // then move on to Node