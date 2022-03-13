import React, { useEffect } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button'
import Stack from "@mui/material/Stack"
import Typography from '@mui/material/Typography';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';
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
import Checkbox from '@mui/material/Checkbox';
import axios from 'axios'
import { baseUrl } from './URLS';
// should be able to sort by Date
// should be able to sort by client ID
// Date Picker widget needed
// Total run Time amd Distance on 
// put options in a seprate Menu - or not!



function ViewHistoryComp() {
    let styleObj={width:"100%"}
    let [historyData,setData]=useState([])
    let [searchText,setSearchText]=useState("")
    let [dateEnabled,setDateEnabled]=useState(false)
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
        if(runData.clientId.includes(searchText)){

            console.log("found"+runData.clientId)
            if(!dateEnabled)
                return true
            if(dateEnabled&&elemDate.getDay()==curDate.getDay())
                return true
            return false
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
      <Box textAlign={"center"}  width="80%" marginLeft="10%" maxWidth={1000}>
          <Box textAlign={"center"} style={{alignItems:"center"}}>
              <Typography variant="h3">History Data</Typography>
          </Box>
          <Stack direction="row" >
            <Stack direction="row" sx={styleObj}>
                {!isMobile&&<Typography variant="h5" sx={styleObj} >Client Id:</Typography>}
                <TextField id="standard-basic" label="Client Id"
                variant="standard" onChange={e=>searchHandler(e)} sx={styleObj}
                />
            </Stack>
            <Stack direction="row" sx={styleObj}>
                <Checkbox onChange={e=>{setDateEnabled(!dateEnabled)}}/>
                <Typography variant="h5" >Date:</Typography>
                <DatePicker
                selected={curDate}
                onChange={(date) => dateChangeHandler(date)}
                customInput={<DateButton/>}
                />
            </Stack>
          </Stack>
          <Box>
              {historyData.filter(filterCondition).map((runData,i,arr)=>{
                  return <div>
        <motion.div initial={{ opacity: 0,x:"-10%" }}
        animate={{ opacity: 1,x:"0%" }} whileHover={{scale:1.1}} whileTap={{scale:1.1}}  key={i}>
        <Box marginTop="2%">
        <Card sx={{ flexgrow:1 }}>
      <CardActionArea>
        <CardContent >
            <Stack>
                <Box>
                    <Stack direction="row"> 
                        <Typography gutterBottom variant="h7" component="div" sx={styleObj}>
                        Client Id : {runData.clientId}
                        </Typography>
                         
                        <Typography gutterBottom variant="h7" component="div"  sx={styleObj}>
                        Date : {runData.date}
                        </Typography>
                    </Stack>
                </Box>
                <Box>
                    <Stack direction="row">
                        <Typography gutterBottom variant="h7" component="div"  sx={styleObj}>
                            ON-Time: {runData.activeTime}
                        </Typography>
                         
                        <Typography gutterBottom variant="h7" component="div"  sx={styleObj}>
                        Moving-Time: {runData.movTime}
                        </Typography>
                    </Stack>
                </Box>
            </Stack>
        </CardContent>
      </CardActionArea>
        </Card>
        </Box>
        </motion.div>
                  </div>
              })}
          </Box>
      </Box>
    );
}
// the component applies filter at the beginning and hence doesn't show any data 
// of that particular date
export default ViewHistoryComp