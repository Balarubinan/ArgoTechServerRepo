import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from "@mui/material/Stack"
import Typography from '@mui/material/Typography';
import DSTLogo from "./DSTlogo.png"
import KLNlogo from "./KLNlogoBg.png"
import tractImg from "./images/tractorImage.jpeg"
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { useState } from 'react';
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import {motion} from 'framer-motion'

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));




export default function ProjectDetailsComp() {
  let curh,seth=useState(window.height)
  let curw,setw=useState(window.width)

  console.log(curh)
  return (
    <>
    <BrowserView>
    <>
    <div className='row'>
      <div className="col-2"><img src={KLNlogo} height="150px" width="120px"/></div>
      <div className="col-8"><Stack direction="column">
        <Typography variant="h3" gutterBottom component="div" textAlign={"center"} style={{ "color": '#2E3B55' }} pt={3}>
        Laser Based Land Leveler 
      </Typography>
      <Typography variant="h5" textAlign={"center"}   style={{ "color": '#2E3B55' }} gutterBottom>
      with Remote Monitoring
      </Typography>
      <Typography variant="h5" textAlign={"center"}  style={{ "color": '#2E3B55' }} gutterBottom>
      DEPARTMENT OF SCIENCE & TECHNOLOGY (DST), New Delhi
      </Typography>
        </Stack></div>
      <div className="col-2"><img src={DSTLogo} height="150px" width="150px"/></div>
    </div>
    <Box>
      <Stack direction='row'>
        <Box sx={{width:"50%"}}>
                <motion.div initial={{ opacity: 0,x:"10%" }}
                  animate={{ opacity: 1,x:"0%" }}>
                <Box direction="column" marginTop={6}>
                  <Typography variant="h5" textAlign={"center"}  style={{ "color": '#2E3B55' }} mb={6} gutterBottom>
                  Principal Investigator (PI): Dr. S.PARTHASARATHY, Prof / EEE, 
                  Head Industrial Relations & IIPC - Chief Coordinator
                    </Typography>
                    <Typography variant="h5" textAlign={"center"}  style={{ "color": '#2E3B55' }}  mb={6} gutterBottom>
                    Co-Principal Investigator (Co-PI): Dr.A.V.Ram Prasad, Prof / ECE  
                    </Typography>
                    <Typography variant="h5" textAlign={"center"}  style={{ "color": '#2E3B55' }} mb={6} gutterBottom>
                    Co-Principal Investigator (Co-PI): Prof.S.Nallathambi,AP/Mech
                    </Typography><Typography variant="h5" textAlign={"center"}  style={{ "color": '#2E3B55' }} gutterBottom>
                    Project Period: 2019-2021
                    </Typography>
                    <Typography variant="h5" textAlign={"center"}  style={{ "color": '#2E3B55' }} gutterBottom>
                    Order No:  DST/TDT/AGRO-12/2019
                    </Typography>
              </Box>
              </motion.div>
        </Box>
        <Box sx={{width:"50%"}}>
          <motion.div initial={{ opacity: 0,x:"-10%" }}
        animate={{ opacity: 1,x:"0%" }} whileHover={{scale:1.1}} className="d-flex justify-content-center mt-5">
          <img src={tractImg} style={{borderRadius:"50px"}} height="350px" maxwidth="300px"/>
          </motion.div>
        </Box>
      </Stack>
    </Box>
    </>
    </BrowserView>
    <MobileView>
    <div className='row'>
      <div className="col-2"><img src={KLNlogo} height="70px" width="50px"/></div>
      <div className="col-8"><Stack direction="column">
        <Typography variant="h6" gutterBottom component="div" textAlign={"center"} style={{ "color": '#2E3B55' }} pt={3}>
        LASER BASED LAND LEVELER 
      </Typography>
      <Typography variant="h7" textAlign={"center"}   style={{ "color": '#2E3B55' }} gutterBottom>
      with Remote Monitoring
      </Typography>
      <Typography variant="h7" textAlign={"center"}  style={{ "color": '#2E3B55' }} gutterBottom>
      DEPARTMENT OF SCIENCE & TECHNOLOGY (DST), New Delhi
      </Typography>
        </Stack></div>
      <div className="col-2"><img src={DSTLogo} height="70px" width="50px"/></div>
    </div>
    <Box>
      {/* <Stack> */}
      <Box alignItems="center">
          <motion.div initial={{ opacity: 0,x:"-10%" }}
            animate={{ opacity: 1,x:"0%" }} whileHover={{scale:1.1}} className="d-flex justify-content-center">
          <img src={tractImg} style={{borderRadius:"25px"}} height="200" width="350"/>
          </motion.div>
        </Box>
        <Box>
                <motion.div initial={{ opacity: 0,x:"10%" }}
        animate={{ opacity: 1,x:"0%" }}>
                <Box direction="column" marginTop={6}>
                  <Typography variant="h5" textAlign={"center"}  style={{ "color": '#2E3B55' }} mb={6} gutterBottom>
                  Principal Investigator (PI): Dr. S.PARTHASARATHY, Prof / EEE, 
                  Head Industrial Relations & IIPC - Chief Coordinator
                    </Typography>
                    <Typography variant="h5" textAlign={"center"}  style={{ "color": '#2E3B55' }}  mb={6} gutterBottom>
                    Co-Principal Investigator (Co-PI): Dr.A.V.Ram Prasad, Prof / ECE  
                    </Typography>
                    <Typography variant="h5" textAlign={"center"}  style={{ "color": '#2E3B55' }} mb={6} gutterBottom>
                    Co-Principal Investigator (Co-PI): Prof.S.Nallathambi,AP/Mech
                    </Typography><Typography variant="h5" textAlign={"center"}  style={{ "color": '#2E3B55' }} gutterBottom>
                    Project Period: 2019-2021
                    </Typography>
                    <Typography variant="h5" textAlign={"center"}  style={{ "color": '#2E3B55' }} gutterBottom>
                    Order No:  DST/TDT/AGRO-12/2019
                    </Typography>
              </Box>
              </motion.div>
        </Box>
      {/* </Stack> */}
    </Box>
    </MobileView>
    </>
  );
}
{/* <Box sx={{flexGrow: 1}} marginTop={3} width="80%" marginLeft="10%">
         <Grid container spacing={2} minWidth="150px">
        <Grid item width="10%" textAlign={"center"}>
          <img src={KLNlogo} height="150px" width="150px"/>
        </Grid>
        <Grid item width="80%">
        <Stack direction="column">
        <Typography variant="h3" gutterBottom component="div" textAlign={"center"} style={{ "color": '#2E3B55' }} pt={3}>
        Laser Based Land Leveler 
      </Typography>
      <Typography variant="h5" textAlign={"center"}   style={{ "color": '#2E3B55' }} gutterBottom>
      with Remote Monitoring
      </Typography>
      <Typography variant="h5" textAlign={"center"}  style={{ "color": '#2E3B55' }} gutterBottom>
      DEPARTMENT OF SCIENCE & TECHNOLOGY (DST), New Delhi
      </Typography>
        </Stack>
        </Grid>
        <Grid item  width="10%" textAlign={"center"}>
        <img src={DSTLogo} height="150px" width="150px"/>
        </Grid>
      </Grid>
    </Box> */}
