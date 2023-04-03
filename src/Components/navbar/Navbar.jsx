import  { useState } from 'react'
import NavListDrawer from './NavListDrawer'
import {Button,Drawer,AppBar,Toolbar,IconButton,Typography} from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu'

import InboxIcon from '@mui/icons-material/Inbox';
import  DraftsIcon  from '@mui/icons-material/Drafts';
import { Box } from '@mui/system';

const navLinks =[
    {
        title:"Home",
        path:"#",
        icon:<InboxIcon/>
    },
    {
        title:"Login",
        path:"#login",
        icon:<DraftsIcon/>
    },
    {
        title:"Register",
        path:"#register",
        icon:<MenuIcon/>
    },
]

const Navbar = () => {
    const [open,setOpen] = useState(false)
  return (
    <>
    <AppBar position='static'>
      <Toolbar>
         <IconButton sx={{ mr:3, display:{xs:"flex", sm:"none"}}} color="inherit" size="large"  onClick={()=> setOpen(true)} edge="start" >
            <MenuIcon/>
         </IconButton>
         <Typography  sx={{flexGrow:1}} variant='h6'>New</Typography>
         <Box sx={{display: {xs:"none",sm:"block"}}}>
          {
            navLinks.map(item=>(
                <Button color="inherit" key={item.title} component="a" href={item.path}>{item.title}</Button>
            ))
          }
         </Box>
      </Toolbar>
    </AppBar> 
 
    <Drawer open={open} anchor="left" onClose={()=>setOpen(false)} sx={{ mr:3, display:{xs:"flex", sm:"none"}}}>
     <NavListDrawer navLinks={navLinks}/> 
    </Drawer>
    
    </>
  )
}

export default Navbar