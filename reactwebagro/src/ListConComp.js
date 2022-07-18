import React from 'react'
import { Component } from 'react'
import {InitSocketApi,SubtoSocket,GetSenderList,RefreshServer} from './BackendConnect'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import Button from '@mui/material/Button'
import {Navigate} from 'react-router-dom';
import TemporaryDrawer from './SideNavBar'
import ButtonAppBar from './TopNavBar'
import { isMobile } from 'react-device-detect'
var sharedVars=require("./SharedVariables")
// import { browserHistory } from 'react-router';





export default class ListConComp extends Component {
    constructor(props){
        super(props)
        this.state={dev_names:[],btn_clicked:false}
        this.updateList=this.updateList.bind(this)
        this.int_id=null
    }
    componentDidMount=()=>{
        console.log("n mout method")
        this.int_id=setInterval(this.updateList,1000)
    }
    componentWillUnmount=()=>{
        clearInterval(this.int_id)
    }
    updateList(){
        GetSenderList().then(data=>{
            console.log(data.data.senders)
            // this.setState({dev_names:data.data.senders})
            this.setState({dev_names:[...data.data.senders,"Demo Graph","Land leveler 1","Land leveler 2","Land leveler 3"]})
        },()=>{})
        console.log("dev name"+JSON.stringify(this.state.dev_names))
    }
    handleClick=(event,soc_name)=>{
        // event.preventDefault()
        console.log("popmt")
        console.log(soc_name)
        // cur_obj=soc_name
        console.log(sharedVars)
        sharedVars.set_obj(soc_name)
        clearInterval(this.int_id)
        this.setState({btn_clicked:true})
    }
    render() {
        return (
            <div className='d-flex justify-content-center' style={{
                "marginTop":!isMobile?"1%":"0%",
                "marginLeft":!isMobile?"25%":"0%",
                "marginRight":isMobile?"0%":"25%",
                "max-width":isMobile?"100%":"50%",
                "max-height":!isMobile?"70%":"100%",
                "display":"flex","flexDirection":"column",
                "backgroundColor":"lightgray","borderRadius":"10px"}}>
                <h2 className="navbar navbar-dark bg-dark text-white justify-content-center mb-5" style={{"padding":"30px",}}>Active Devices</h2>
                {this.state.dev_names.length>0&&this.state.dev_names.map((device,i,a)=>(
                    <div className="card text-white bg-dark mb-3" key={i}>
                        <div className="card-body m5">
                        <div className="row">
                        <div className="col">
                            <div className="row">
                                <div className="col">
                                    <h4 className="small font-weight-bold ml-5" style={{"fontSize": "26px"}}>{device}</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col" style={{ 
                            display: "flex",
                            justifyContent: "flex-end",
                            marginLeft: "auto",
                            marginRight: "0"}}>
                            <div className="row" style={{"fontSize": "27px","alignRight":"right"}}>
                                <div className="col" style={{"fontSize": "27px"}}>
                                <Button variant="contained" onClick={(event)=>this.handleClick(event,device)} soc_name={device}>Connect</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                        </div>
                </div>
                ))}
                {this.state.dev_names.length==0&&<h3 className="d-flex justify-content-center" style={{"color":"grey"}}>No senders active</h3>}
                {this.state.btn_clicked&&<Navigate to="/viewTractor"/>}
            </div>
        )
    }
}

