import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from "@mui/material/Stack"
import Typography from '@mui/material/Typography';
import DSTLogo from "./DSTlogo.png"
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
    <Box sx={{flexGrow: 1}} marginTop={3}>
         <Grid container spacing={2}>
        <Grid item xs={2} textAlign={"center"}>
          <img src={DSTLogo} height="150px" width="150px"/>
        </Grid>
        <Grid item xs={8}>
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
        <Grid item xs={2} textAlign={"center"}>
        <img src={DSTLogo} height="150px" width="150px"/>
        </Grid>
      </Grid>
    </Box>
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
