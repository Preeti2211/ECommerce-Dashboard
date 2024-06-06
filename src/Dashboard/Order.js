import { Box, Typography } from "@mui/material";
import SideBar from "../Sidebar";

function Order()
{
    return (
        <Box sx={{display:'flex'}}>
      <SideBar />
      <Box component="main" sx={{ flexGrow: 1, p: 3 ,marginTop:"55px"}}>
        
      <Typography variant='h4'>
           Order Product
        </Typography>
      </Box>
    </Box>
    )
}
export default Order;