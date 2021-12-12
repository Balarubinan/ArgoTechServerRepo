import * as React from 'react';
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


const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


export default function MediaCard() {
  return (
    <Box>
        <Grid  container spacing={1} marginTop={5} marginLeft={1}>
         <Grid item xs={4}>
        <Card sx={{ maxWidth: 345  ,minHeight:380}}>
      <CardMedia
        component="img"
        height="140"
        image={AvatarImg}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div"  textAlign="center">
          Balarubinan N
        </Typography>
        <Typography variant="body2" color="text.secondary"  textAlign="center" paddingTop={5}>
        4th Year CSE Student<br/>
        K.L.N. College of Engineering, Pottapalyam, Sivagangai District,Tamil Nadu<br/>
        9629902359<br/>
        balarubinan2000@gmail.com<br/>
        </Typography>
      </CardContent>
        </Card>
        </Grid>
    <Grid item xs={4}>
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={AvatarImg}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div"  textAlign="center">
        Dr. S.Parthasarathy
        </Typography>
        <Typography variant="body2" color="text.secondary" textAlign="center">
        Professor/EEE<br/>
        Head Industrial Relations & IIPC - Chief Coordinator<br/>
        K.L.N. College of Engineering, Pottapalyam, Sivagangai District, 
        Tamil Nadu<br/>9443402901<br/>sarathy_sps@yahoo.co.in<br/>iipc@klnce.edu<br/>
        </Typography>
      </CardContent>
    </Card>
    </Grid>
    <Grid item xs={4}>
        <Card sx={{ maxWidth: 345 ,minHeight:380}}>
      <CardMedia
        component="img"
        height="140"
        image={AvatarImg}
        alt="green iguana"
      />
      <CardContent pt={3}>
        <Typography gutterBottom variant="h5" component="div"  textAlign="center">
          Clement Paul K
        </Typography>
        <Typography variant="body2" color="text.secondary"  textAlign="center" paddingTop={5}>
        4th Year EEE Student<br/>
        K.L.N. College of Engineering, Pottapalyam, Sivagangai District,Tamil Nadu<br/>
        9262020705<br/>
        clementpaulprabhu@gmail.com<br/>
        </Typography>
      </CardContent>
    </Card>
    </Grid>
    </Grid>
    </Box>
  );
}

// export default MediaCard
