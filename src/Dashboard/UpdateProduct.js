
import React from 'react'
import SideBar from '../Sidebar'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


export default function UpdateProduct() {
  return (
        <Box sx={{display:'flex'}}>
          <SideBar />
          <Box component="main" sx={{ flexGrow: 1, p: 3 ,marginTop:"55px"}}>
            <Typography variant="h5">
             Product
            </Typography>
          </Box>
        </Box>
  )
}
