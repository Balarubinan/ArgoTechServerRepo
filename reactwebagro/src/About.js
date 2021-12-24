import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Box from "@mui/material/Box"
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import {AiOutlineFundProjectionScreen} from 'react-icons/ai'
import {IoMdAnalytics} from "react-icons/io"
function AboutComp() {
    return (
        <Box width="80%"  marginLeft="10%">
        <Typography gutterBottom variant="h5" component="div"  style={{"font-size":"50px",color: '#2E3B55'}} align="center">
          <AiOutlineFundProjectionScreen/> Project Concept
        </Typography>
        <Typography variant="body1" color="text.primary" textAlign="justify">
        The developed prototype has a dual role device for leveling of the land with the help a LASER based leveler and a plough unit along with remote monitoring system. In the existing system, the mechanical scraper will be of fixed size of 2 meters length, but in the proposed system, 
        this mechanical scraper can be extended twice the existing length. This covers more area of land which in turn saves time of leveling. The laser transmitter transmits a laser beam, which is intercepted by the laser receiver mounted on the leveling scraper. The control panel
        mounted on the tractor interprets the signal from the receiver and opens or closes the hydraulic control valve, which will raise or lower the scraper. Once the leveling is completed, the leveler is converted into the required plough device. The major advantage of this proposed methodology
         is that, it is dual purpose unit and economical too. As the scraper length is larger it saves more time, also with the help of remote monitoring system, graphical representation of the land level condition 
        </Typography>

        <Box pt={3} pb={3}><Divider paddingTop="10px"/></Box>

        <Typography gutterBottom variant="h5" component="div"  style={{"font-size":"50px",color: '#2E3B55'}} align="center">
        <IoMdAnalytics/>Techno-economic analysis
        </Typography>
        <Typography variant="body1" color="text.primary" textAlign="justify">
        The proposed project “Laser Based Hydraulic Controlled Variable Length Land Leveler Cum Plough Device With Remote Monitoring System” ensures about the modification of the existing design of a laser based land leveler. This will have an impact on the agricultural 
        sector as the proposed design, works as a dual purpose unit of both leveling as well as plough. This leads to save a lot of time in leveling as well as plough. As the scraper length is twice the existing system, half of the time is reduced for leveling of the land. Also this design 
        can be used for small scale land and very large scale lands. This leads to an economical operation in terms of man 
        power and machine operation time. As the proposed system has a periodical monitoring in a remote location, it leads to the time saving of the land owner as his physical presence is not necessary continuously
        </Typography>

        <Box pt={3} pb={3}><Divider paddingTop="10px"/></Box>
        <Typography gutterBottom variant="h5" component="div"  style={{"font-size":"50px",color: '#2E3B55'}} align="center">
          Innovative Elements
        </Typography>
        <Typography variant="body1" color="text.primary">
        <Box textAlign="center">
        
            <Typography gutterBottom variant="h5" component="div"  style={{"font-size":"25px"}}>
            Variable length Mechanical Scraper blade (land Leveler)
        </Typography>
        <Typography gutterBottom variant="h5" component="div"  style={{"font-size":"25px"}}>
        Periodical Remote Monitoring of LASER leveling
        </Typography>
        <Typography gutterBottom variant="h5" component="div"  style={{"font-size":"25px"}}>
        Dual purpose unit (leveler cum plough)
        </Typography>
        </Box>
        <Box pt={3} pb={3}><Divider paddingTop="10px"/></Box>
        
        <Typography gutterBottom variant="h5" component="div"  style={{"font-size":"50px",color: '#2E3B55'}} align="center">
        Deliverables
        </Typography>
        <Box textAlign="center">
            <Typography gutterBottom variant="h5" component="div"  style={{"font-size":"25px"}}>
            Product with both leveler and plough
        </Typography>
        <Typography gutterBottom variant="h5" component="div"  style={{"font-size":"25px"}}>
        Larger area of leveling and plough at minimum time
        </Typography>
        <Typography gutterBottom variant="h5" component="div"  style={{"font-size":"25px"}}>
        Reduce the water squandering
        </Typography>
        <Typography gutterBottom variant="h5" component="div"  style={{"font-size":"25px"}}>
        Reduce the weed
        </Typography>
        <Typography gutterBottom variant="h5" component="div"  style={{"font-size":"25px"}}>
        Increases the yield
        </Typography>
        </Box>
        <Box pt={3} pb={3}><Divider paddingTop="10px"/></Box>

        <Typography gutterBottom variant="h5" component="div"  style={{"font-size":"50px",color: '#2E3B55'}} align="center">
        Target Beneficiaries
        </Typography>
        <Box textAlign="center">
            <Typography gutterBottom variant="h5" component="div"  style={{"font-size":"25px"}}>
            Agricultural sectors
        </Typography>
        <Typography gutterBottom variant="h5" component="div"  style={{"font-size":"25px"}}>
        Construction agencies
        </Typography>
        <Typography gutterBottom variant="h5" component="div"  style={{"font-size":"25px"}}>
        High way Roads construction
        </Typography>
        </Box>

        <Box pt={3} pb={3}><Divider paddingTop="10px"/></Box>

        <Typography gutterBottom variant="h5" component="div"  style={{"font-size":"50px",color: '#2E3B55'}} align="center">
        Novelty
        </Typography>
        <Box textAlign="center">
            <Typography gutterBottom variant="h5" component="div"  style={{"font-size":"25px"}}>
            Adjustable Scraper unit – from 2m to 4m
        </Typography>
        <Typography gutterBottom variant="h5" component="div"  style={{"font-size":"25px"}}>
        Two in one leveler cum plough unit
        </Typography>
        <Typography gutterBottom variant="h5" component="div"  style={{"font-size":"25px"}}>
        Periodical Remote Monitoring of leveling
        </Typography>
        <Typography gutterBottom variant="h5" component="div"  style={{"font-size":"25px"}}>
        Time saving unit
        </Typography>
        <Typography gutterBottom variant="h5" component="div"  style={{"font-size":"25px"}}>
        Cost Effective
        </Typography>
        </Box>
        <Box pt={3} pb={3}><Divider paddingTop="10px"/></Box>
        </Typography>
    </Box>
    )
}

export default AboutComp
