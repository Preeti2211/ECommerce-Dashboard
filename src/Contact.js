import { Box, Button, Grid, IconButton, TextField } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import CallIcon from '@mui/icons-material/Call';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useState } from "react";

export default function Contact(){
    const [data,setData] = useState({lname:"",
        fname:"",
        email:"",
        contact:"",
        msg:"",
    });
    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Box style={{ margin:'auto',width:'50%',marginBottom:"50px" }} >
                    <span style={{ fontSize:"30px",fontWeight:"bold",color:"white" }}>Contact Us</span><br/>
                    <p style={{ fontSize:"15px",fontWeight:"bold",color:"white" }}>Any Question or Remark just write us a message</p>
                </Box>
            </Grid>
            <Grid item xs={12}>
            <Box style={{ background:"white",width:'70%', margin:'auto',height:'auto'}}>
                <Grid container spacing={1} style={{ margin:'10px',padding:'10px' }}>
                    <Grid item xs={5} spacing={2} style={{ background:"black",color:"white" }}>
                        <Grid item xs={12} style={{ textAlign:"left" }}>
                            <span style={{fontSize:'20px',fontWeight:"bold" ,}}>Contact Information</span>
                            <p style={{ marginBottom:"20px"  }}>say somthing to start a live chat</p>
                        </Grid>
                        <Grid item xs={12} style={{ textAlign:"left" }}>
                            <span><IconButton><CallIcon sx={{ color: 'white' }}/></IconButton> +91 8796857463</span>
                        </Grid>
                        <Grid item xs={12} style={{ textAlign:"left" }}>
                            <span><IconButton><AttachEmailIcon sx={{ color: 'white' }}/></IconButton> shopping@gmail.com</span>
                        </Grid>
                        <Grid item xs={12} style={{ textAlign:"left" }}>
                            <span><IconButton><LocationOnIcon sx={{ color: 'white' }}/></IconButton> An Authorized Developer , Authentication Street , house No 200 server port ,platform 1</span>
                        </Grid>
                        <Box style={{  marginTop:"30px",textAlign:"left" }}>
                            <span><IconButton><InstagramIcon sx={{ color: 'white' }}/></IconButton></span>
                            <span><IconButton><FacebookIcon sx={{ color: 'white' }}/></IconButton></span>
                            <span><IconButton><TwitterIcon sx={{ color: 'white' }}/></IconButton></span>
                        </Box>
                    </Grid>
                    <Grid item xs={7}>
                        <Grid container>
                        <Grid item xs={6}>
                            <TextField type="text" id="standard-basic" margin="normal" name="fname" value={data.fname} label="First Name"/>
                        </Grid>
                        <Grid item xs={6}>
                            <TextField type="text" id="standard-basic" margin="normal" name="lname" value={data.lname} label="Last Name"/>
                        </Grid>
                        <Grid item xs={6}>
                            <TextField type="email" id="standard-basic" margin="normal" name="email" value={data.email} label="Your Email"/>
                        </Grid>
                        <Grid item xs={6}>
                            <TextField type="number" id="standard-basic" margin="normal" name="contact" value={data.contact} label="Your Contact No."/>
                        </Grid>
                        <Grid item xs={1}></Grid>
                        <Grid item xs={10}>
                            <TextField type="textarea" id="standard-basic" margin="normal" name="msg" value={data.msg} label="Write Your Message Here" row={3} fullWidth/>
                        </Grid>
                        <Grid item xs={1}></Grid>
                        <Grid item xs={12}>
                            <Button variant="contained" color="success" startIcon={<SendIcon/>}>Send Message</Button>
                        </Grid>
                        </Grid>
                        
                    </Grid> 
                </Grid>
            </Box>
            </Grid>


        </Grid>
    )
}