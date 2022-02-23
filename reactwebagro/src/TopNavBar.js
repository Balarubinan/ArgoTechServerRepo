import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import TemporaryDrawer from './SideNavBar';
import { AccordionDetails } from '@mui/material';
import LogoIcon from "./AgriLogo.png"
import KLNlogo from "./KLNlogo.jpg"
// import MenuIcon from '@mui/icons-material/Menu';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}  width="100%" marginLeft="0%">
      <AppBar position="static" style={{ background: '#2E3B55'}}>
      {/* ,position: 'fixed' adding this makes the bar stay at top...but all it hides some parts under it*/}
        <Toolbar>
          <TemporaryDrawer/>
          <img src={LogoIcon} height="70px" width="70px"/>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            AgroTech
          </Typography>
          {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            KLNCE
          </Typography> */}
          <img src={KLNlogo} height="70px" width="70px" style={{"borderRadius":"100px"}}/>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
// #9aaed6

// todo 
// figure out y the topnavbar is extending out of control in some pages
// make the register and update page functional
