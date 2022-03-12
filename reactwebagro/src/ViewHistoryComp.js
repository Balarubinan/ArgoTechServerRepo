import React, { useEffect } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button'
import Stack from "@mui/material/Stack"
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { useState,useRef } from 'react';
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import {motion} from 'framer-motion'
import { forwardRef } from 'react';
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css';
import TextField from '@mui/material/TextField';
import axios from 'axios'
import { baseUrl } from './URLS';
// should be able to sort by Date
// should be able to sort by client ID
// Date Picker widget needed
// Total run Time amd Distance on 
// put options in a seprate Menu - or not!



function ViewHistoryComp() {
    let [historyData,setData]=useState([])
    let [searchText,setSearchText]=useState("")
    const [curDate, setCurDate] = useState(new Date());
    useEffect(()=>{
        //loading history data 
        axios.post(baseUrl+"/restApi/getRunData",{date:"all"})
        .then(data=>{
            console.log(data.data.runDataArr)
            setData(data.data.runDataArr)
        })
        .catch(err=>console.log(err))
    },[])

    const DateButton = forwardRef(({ value, onClick }, ref) => (
      <Button variant="contained" className="example-custom-input" onClick={onClick} ref={ref}>
        {value}
      </Button>
    ));

    const filterCondition=runData=>{
        let elemDate=new Date(runData.date)
        console.log("IN"+runData.clientId)
        console.log("Cli"+elemDate.toString())
        console.log(curDate)
        // date feature works fine!!
        //just finish UI decoration
        if(runData.clientId.includes(searchText)&&elemDate.getDay()==curDate.getDay()){
            console.log("found"+runData.clientId)
            return true
        }
        return false
    }

    const searchHandler=(e)=>{
        e.preventDefault()
        
        let text=e.target.value
        setSearchText(text)
    }
    const dateChangeHandler=(date)=>{
        console.log(searchText)
        console.log(curDate);
        setCurDate(date)
        // call method here
    }
    return (
      <Box>
          <Box><Typography variant="h3">History Data</Typography></Box>
          <Stack direction="row">
          <TextField id="standard-basic" label="Client Id" variant="standard" onChange={e=>searchHandler(e)}/>
            <DatePicker
            selected={curDate}
            onChange={(date) => dateChangeHandler(date)}
            customInput={<DateButton/>}
            />
          </Stack>
          <Box>
              {historyData.filter(filterCondition).map((runData,i,arr)=>{
                  return <div>
                      {/* converts this into card element */}
                      {runData.clientId}
                      {runData.activeTime}
                      {runData.movTime}
                      {runData.date}
                  </div>
              })}
          </Box>
      </Box>
    );
}

export default ViewHistoryComp