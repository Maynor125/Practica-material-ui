import { Button,Container,Grid } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import AppleIcon from '@mui/icons-material/Apple';
import AndroidIcon from '@mui/icons-material/Android';
import Producto from "./Components/Producto";

import PCard from "./Components/Card";
import Navbar from "./Components/navbar/Navbar";


export default function App() {
  return(
    <>
     <Navbar/> 
    <Container sx={{mt:5}}>
       
       <PCard/>
    </Container></>
   
    
  )
}

/* !Practica con css grid 
<Container>
      <Grid container spacing={3}>
         <Grid item xs={12} sm={6} md={4}>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi officia molestias aperiam facilis odio perspiciatis error quasi, aspernatur corrupti voluptatum soluta dolorum atque porro laboriosam illum minus velit suscipit facere?</p>
         </Grid>
         <Grid item xs={12} sm={6} md={4}>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi officia molestias aperiam facilis odio perspiciatis error quasi, aspernatur corrupti voluptatum soluta dolorum atque porro laboriosam illum minus velit suscipit facere?</p>
         </Grid>
         <Grid item xs={12} sm={12} md={4}>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi officia molestias aperiam facilis odio perspiciatis error quasi, aspernatur corrupti voluptatum soluta dolorum atque porro laboriosam illum minus velit suscipit facere?</p>
         </Grid>
      </Grid>
      <Producto/>
  </Container>
*/


/*!Codigo de prueba con contenedores */
/*  <Box
  sx={{
    border: 2,
    borderColor: "peru",
    p: 2,
    bgcolor: "#111",
    color: "white",
    mb:3,
  }}
  >
     <Typography align="center">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum saepe quas
    laudantium, enim praesentium maiores beatae impedit vero dolorum
    dignissimos, assumenda ipsam? Similique, mollitia commodi ducimus aliquid
    voluptate molestias laborum!
    </Typography>
  </Box>
   <Button variant="contained" startIcon={<AppleIcon/>}
   >Mi primer boton</Button>
   <Button  variant="outlined" color="error" endIcon={<AndroidIcon/> }>Mi Segundo boton</Button>  */