import { styled } from "@mui/material/styles";
import { Button, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import reactimg from '../assets/react.svg'
import { Component } from "react";

const Producto = () => {
  
  const Img = styled("img")({
    width: 200,
    height: "100%",
    objectFit: "cover",
    objectPosition: "center",
  });

  return (
    <Paper 
    sx={{
      display: "flex",
      alignItems: "center",
      gap: 2,
      overflow: "hidden",
      mt: 5,
    }}>
        <Img src={reactimg} alt="una imagen que todavia no consigo jijijij" />
        <Box sx={{flexGrow:1}}>
          <Typography variant="h4">Product Name</Typography>
          <Typography variant="body1">Product Description</Typography>
          <Button variant="contained">Add to card</Button>
        </Box>
        <Box sx={{mr:2}} Component="p">$20.00</Box>
    </Paper>
  )
}

export default Producto