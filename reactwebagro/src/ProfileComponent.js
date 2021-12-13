import React from 'react'

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AvatarImg from "./Avatar.png"
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import CardHeader from '@mui/material/CardHeader';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';


function ProfileComponent() {
    return (
        <div className="row">
            <Box minWidth="80%" marginLeft="10%">
            <div className='col-10 pt-3 pb-2' >
            <Card minWidth="80%">
            <CardHeader
        title="Profile Details"
      />
      <Divider/>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div"  pb={1}>
          Username:
        </Typography>
        <Typography variant="body2" color="text.secondary"  pb={1}>
            IIPC
        </Typography>
        <Typography gutterBottom variant="h5" component="div" pb={1}>
          Password:
        </Typography>
        <Typography variant="body2" color="text.secondary">
            IIPCadmin
        </Typography>
      </CardContent>
    </Card>
            </div>
            </Box>
            <Box minWidth="80%" marginLeft="10%">
            <div className='col-10 pt-3 pb-2' >
            <Card minWidth="80%">
            <CardHeader
        title="Edit Profile"
      />
      <Divider/>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div"  pb={1}>
          Username:
        </Typography>
        <TextField label="user name" color="primary" focused pb={1}  fullWidth/>
        <Typography gutterBottom variant="h5" component="div" pb={1}>
          Password:
        </Typography>
        <TextField label="password " color="primary" focused pb={1} fullWidth/>
      </CardContent>
    </Card>
            </div>
            </Box>
        </div>
    )
}

export default ProfileComponent
