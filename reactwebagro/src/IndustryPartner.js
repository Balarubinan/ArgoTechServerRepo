import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Box from "@mui/material/Box"
function IndustryPartnerComp() {
    return (
        <Box width="80%" marginLeft="10%"> 
            <Box marginTop="5%">
            <Card sx={{ flexgrow:1 }} margin="10px">
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
            </Card>
            </Box>
            <Box marginTop="5%">
            <Card sx={{ flexgrow:1 }} margin="10px">
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          M/S Kannan Tools and Dies India Pvt Ltd
          </Typography>
          <Typography variant="body2" color="text.secondary">
          DVP Industrial Estate, SF No. 6/4A,
Athipalayam Road,
Chinnavedampatti, Coimbatore,Tamilnadu, India.

          </Typography>
        </CardContent>
      </CardActionArea>
            </Card>
            </Box>     
        </Box>
    )
}

export default IndustryPartnerComp
