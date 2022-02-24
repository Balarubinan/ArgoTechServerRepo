// react comp to show all the gathered contacts
import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Box from "@mui/material/Box"
import axios from 'axios';
import {useState,useEffect} from 'react'

function SavedContactComp() {
    const [contacts, setcontacts] = useState([])
    useEffect(() => {
        console.log('Useeffect Logs')
        // axios.get("http://localhost:5000/restApi/getAllSavedContacts").then(d=>{console.log(d.data);setcontacts(d.data.results)})
        axios.get("http://argo-server-1.herokuapp.com/restApi/getAllSavedContacts").then(d=>{console.log(d.data);setcontacts(d.data.results)})
    }, [])

  return (
    <Box width="80%" marginLeft="10%" maxWidth={1000}> 
        
            {contacts.length>0&&contacts.map((e,i,arr)=>(
        <Box marginTop="2%">
        <Card sx={{ flexgrow:1 }}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h7" component="div" key={i}>
            Name: {e.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Query: {e.info}
          </Typography>
          <Typography gutterBottom variant="h7" component="div" key={i}>
            Phone: <Typography  color="text.secondary">{e.number}</Typography>
            Email: <Typography  color="text.secondary">{e.email}</Typography>
          </Typography>
        </CardContent>
      </CardActionArea>
        </Card>
        </Box>
            ))
        }
    </Box>
  )
}

export default SavedContactComp


{/* <Card sx={{ flexgrow:1 }} margin="10px">
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          K.L.N Engineering Technological Solutions (KLNETS)
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Shri Krishna Gardens,
          Pottapalyam – 630 612,
          Sivagangai District,Tamil Nadu, India

          </Typography>
        </CardContent>
      </CardActionArea>
    </Card> */}