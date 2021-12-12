import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import TemporaryDrawer from './SideNavBar';
import { AccordionDetails } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background: '#2E3B55' }}>
        <Toolbar>
          <TemporaryDrawer/>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            AgroTech
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
// #9aaed6

// todo 
// finish linking the components
// create components => Time estimate,login, register , profile ,contact , project details 
// simply use JSON file for saving login info