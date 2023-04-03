import React from 'react'
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material'

const PCard = () => {
  return (
    <Card sx={{
        transition:".2s",
        "&:hover":{transform:"scale(1.05)"},

    }}>
     <CardActionArea>
     <CardMedia component="img" image="https://via.placeholder.com/100x200" height="200" alt="una imagen" />
     <CardContent>
        <Typography variant="h5">Card Title</Typography>
        <Typography component="p" variant="body2"
         >Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, sint voluptatum dolorem repudiandae consectetur, corrupti facere dolores aliquam consequuntur incidunt ipsa, beatae ipsum pariatur cupiditate a ducimus harum optio. In!</Typography>
     </CardContent>
     </CardActionArea>
     
     <CardActions>
        <Button variant='contained'>Add</Button>
        <Button variant='outlined' color='error'>Remove</Button>
     </CardActions>
    </Card> 
  )
}

export default PCard