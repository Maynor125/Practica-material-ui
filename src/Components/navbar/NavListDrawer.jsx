import {List,ListItem,ListItemText,ListItemIcon,ListItemButton} from '@mui/material';
import { Box } from "@mui/system";


const NavListDrawer = ({navLinks}) => {
  return (
    <Box sx={{width:250}}>
     
      
      <nav>
        <List>
            {
                navLinks.map(item=>(
                    <ListItem disablePadding key={item.title}>
                    <ListItemButton component="a" href={item.path}>
                        <ListItemIcon>
                          {item.icon}
                        </ListItemIcon>
                        <ListItemText>{item.title}</ListItemText>
                    </ListItemButton>
                </ListItem>
                ))
            }
        </List>
      </nav>
    </Box>
  )
}

export default NavListDrawer
/*  <nav>
        <List>
            <ListItem>
                <ListItemIcon>
                    <InboxIcon/>
                </ListItemIcon>
                <ListItemText primary="Inbox"/>
            </ListItem>
            <ListItem>
                <ListItemIcon>
                    <DraftsIcon/>
                </ListItemIcon> 
                <ListItemText primary="Drafts"/>
            </ListItem>
        </List>
      </nav> */