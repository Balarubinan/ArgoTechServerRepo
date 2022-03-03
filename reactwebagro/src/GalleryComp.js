import * as React from 'react';
import { useState,useEffect } from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Box } from '@mui/system';
import {baseUrl} from './URLS'
import axios from 'axios'
import PopupModalComp from './PopupModalComp'
import Modal from '@mui/material/Modal';
import {
    BrowserView,
    MobileView,
    isBrowser,
    isMobile
  } from "react-device-detect";
  

const style = {
  position: 'absolute',
//   top: '50%',
  left: '25%',
  maxWidth: 400,
  maxHeight: 400,
};

export default function GalleryComp() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [curContent,setContent] = React.useState(null)
    let device=null,cols=4,margin=15,height=700,width=1000,modalMargin=15;

    let [itemNameArr,setItemArr]=useState([])
    useEffect(() => {
        //set device here
        if(!isMobile==true){
            // mobile not working properly
            console.log("Mobile mode")
            cols=2;margin=5;height=400;width=400;modalMargin=0;
        }
        axios.get(`${baseUrl}/restApi/imagesList`).then(d=>{
            let itemNameArr=d.data.imageUrls
            console.log(d.data.imageUrls)
            let newItemData=itemNameArr.map(x =>{return{img:baseUrl+`/gallery/${x}`,title:x}})
            setItemArr(newItemData)
            console.log(newItemData)
        }).catch(e=>console.log("Error fecthing imageList \n"+e))
    }, [])
    let imageHandle=(i)=>{

        setOpen(true)
        let item=itemNameArr[i]
        let jsx=<img 
        src={`${item.img}`}
        // srcSet={`${item.img}`}
        alt={item.title}
        loading="lazy"
        height={`${height}px`} width={`${width}px`}
        style={{borderRadius:"10%"}}/>
        setContent(jsx)
    }
  return (
    <Box marginLeft={`${margin}%`} marginRight={`${margin}%`}>
        <ImageList sx={{ maxWidth: 1000, maxHeight:700 }} cols={`${cols}`} rowHeight={300}>
      {itemNameArr.map((item,i,arr) => (
          <div onClick={()=>imageHandle(i)}>
              <Box sx={{height: 300,}} mt={1} ml={1} >
            <ImageListItem key={item.img}>
          <img 
            src={`${item.img}`}
            // srcSet={`${item.img}`}
            alt={item.title}
            loading="lazy"
            style={{borderRadius:"10%"}}
          />
            </ImageListItem>
        </Box>
            </div>
      ))}
        </ImageList>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={ {
  position: 'absolute',
  top: '0%',
  left:modalMargin+"%",
  maxWidth: 400,
  maxHeight: 400,
}}>
          {curContent}
        </Box>
      </Modal>
    </Box>
  );
}