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
import {motion} from 'framer-motion'
import {
  onSwiped,
  onSwipedLeft, 
  onSwipedRight,
  onSwipedUp,
  onSwipedDown, 
  onSwipeStart, 
  onSwiping,
  onTap
} from "react-swipeable";
import { useSwipeable } from "react-swipeable";

const style ={ 
// top: '50%',
// left: '50%',
transform: 'translate(0%, 50%)',
// width: 100,
// height:100,
// bgcolor: 'background.paper',
// border: '2px solid #000',
}

export default function GalleryComp() {
    const [open, setOpen] = React.useState(false);
    let [curIndex,setIndex]=useState(0)
    const [curContent,setContent] = React.useState(null)
    let [itemNameArr,setItemArr]=useState([])
    let device=null,cols=4,margin=15,height=700,width=900,modalMargin=15;

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handlers = useSwipeable({
      onSwipedLeft: () =>leftSwipe(),
      onSwipedRight: () => rightSwipe(),
      preventDefaultTouchmoveEvent: true,
      trackMouse: true
    });

    const leftSwipe=(SwipeData)=>{
      imageHandle(curIndex+1>=itemNameArr.length?curIndex:curIndex+1)
      // console.log("Before call"+(curIndex+1))
    }

    const rightSwipe=(SwipeData)=>{
      imageHandle(curIndex-1<0?curIndex:curIndex-1)
      // console.log("Before call"+(curIndex+1))
    }

    useEffect(() => {
        //set device here
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
        console.log("Received as"+i)
        setIndex(i)
        let item=itemNameArr[i]
        let h=isMobile?400:height;
        let w=isMobile?400:width;
        let jsx=<img 
        src={`${item.img}`}
        // srcSet={`${item.img}`}
        alt={item.title}
        loading="lazy"
        height={`${h}px`} width={`${w}px`}
        // height={`400px`} width={`400px`}
        style={{borderRadius:"10%"}}/>
        setContent(jsx)
    }
  return (
   <Box>
      <BrowserView>
      <Box marginLeft={"15%"} marginRight={"15%"}>
        <ImageList sx={{ maxWidth: 1000, maxHeight:700 }} cols={4} rowHeight={300}>
      {itemNameArr.map((item,i,arr) => (
          <motion.div initial={{scale:0.5}} animate={{scale:1}} onClick={()=>imageHandle(i)}>
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
            </motion.div>
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
          <motion.div initial={{scale:0.1}} animate={{scale:1}}>
          {curContent}
        </motion.div>
        </Box>
      </Modal>
      </Box>
      </BrowserView>
      {/* let device=null,cols=4,margin=15,height=700,width=1000,modalMargin=15; */}
      <MobileView>
      <Box marginLeft={`5%`} marginRight={"5%"} >
      
        <ImageList sx={{maxHeight:700 }} cols={2} rowHeight={250}>
      {itemNameArr.map((item,i,arr) => (
          <div onClick={()=>imageHandle(i)}>
              <Box  mt={1} ml={1} >
            <ImageListItem key={item.img}>
          <img 
            src={`${item.img}`}
            // srcSet={`${item.img}`}
            height="250"
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
        <Box style={style} {...handlers}>
        <motion.div initial={{scale:0.5}} animate={{scale:1}}>
          {curContent}
        </motion.div>
        </Box>
      </Modal>
      </Box>
      </MobileView>
   </Box>
  );
}