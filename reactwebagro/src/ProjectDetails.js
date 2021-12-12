import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from "@mui/material/Stack"
import Typography from '@mui/material/Typography';
import DSTLogo from "./DSTlogo.png"
import KLNlogo from "./KLNlogo.jpg"
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


export default function ProjectDetailsComp() {
  return (
    <>
    <Box sx={{flexGrow: 1}} marginTop={3} width="80%" marginLeft="10%">
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
    </Box>
    <Stack direction="column" marginTop={6}>
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
    </Stack>
    </>
  );
}
{/* <img src={DSTLogo} height="150px" width="150px"/>
        <Stack direction="column" marginLeft={5}>
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
        <img src={DSTLogo} height="150px" width="150px"/> */}
