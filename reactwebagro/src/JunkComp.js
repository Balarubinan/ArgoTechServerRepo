// import React from 'react'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
// import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import React, { Component } from 'react'

export default class JunkComp extends Component {
    constructor(props){
        super(props)
        this.state={users:[],data:null};
    }
    handleChange=i=>{
        this.setState({data:this.state.users[i].name})
    }
    onClick=()=>{
        let obj={name:"Added "+new Date().getSeconds()}
        this.setState({users:[...this.state.users,obj]})
    }
    render() {
        return (
            <div className='row'>
            <div className='col-12'>
                {this.state.users&&this.state.users.map((user,i,a)=>(
                    <Button variant="text" onClick={e=>this.handleChange(i)}>{user.name}</Button>
                ))}
            </div>
            <div className='col-12'>
                <p>{this.state.data}</p>
            </div>  
            <button onClick={this.onClick}>Add Tab</button>
        </div>
        )
    }
}

