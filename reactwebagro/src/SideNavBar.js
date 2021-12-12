import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
// import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Link from '@mui/material/Link';
import DummyComp from './DummyComp';
import { AiOutlineMenu } from "react-icons/ai";

// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';

export default function TemporaryDrawer() {
  // const navig=useNavigation().navigate
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const reNavToPage=(itemName)=>{
    console.log(itemName);console.log("Was clciked")
  }
  const links=["/projectDetails","/Contact","/IndustryPartner","/Register","/ListTractors","/timeestimate"]
  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
      <ListItem>
            <ListItemText primary="Agro Tech" />
      </ListItem>
      <Divider />
        {['Home', 'Contact','Industrial Partners','Register', 'Live Chart','Time Estimation'].map((text, index) => (
          <ListItem button key={text} onClick={()=>reNavToPage(text)}>
            <Link href={links[index]} underline="none" >
              {text}
            </Link>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );
  let anchor="left"
  return (
    <div>
      {
        <React.Fragment>
          <Button onClick={toggleDrawer(anchor, true)}>
          <AiOutlineMenu size={25}/>
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      }
    </div>
  );
}
