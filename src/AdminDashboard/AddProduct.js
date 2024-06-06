import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import { useState } from "react";
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import { styled } from "@mui/material/styles";
import DeleteIcon from "@mui/icons-material/Delete";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';


function Copyright(props) {

  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


const defaultTheme = createTheme();

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

export default function AddProduct() {
    const [data,setData] = useState({
        pro_name:"",
        description:"",
        price:"",
        details:"",
        image:[],

    })
    function handleFileChange(e){
        const files = e.target.files;
        setData("image",[...data.image, ...files]);
    }

    function handleDelete(index){
        const updatedFiles = [...data.image];
        updatedFiles.splice(index, 1);
        setData("image",updatedFiles);
    }
    const handleChange =(e) =>{
        setData({...data,[e.target.name]:e.target.value});
    }

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="pro_name"
              label="Product Name"
              name="pro_name"
              autoComplete="pro_name"
              autoFocus
              value={data.email} onChange={handleChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="description"
              label="Description"
              type="text"
              id="decsription"
              value={data.description} onChange={handleChange}
            />
            <Grid item xs={12}>
                            <Typography variant="subtitle2" fontWeight={"bold"}>Images</Typography>
                            <Button component="label" variant="contained" startIcon={<CloudUploadIcon />}>Upload file
                            <VisuallyHiddenInput type="file" multiple  onChange={handleFileChange} />
                            </Button>
                            <Grid container spacing={2} padding={"30px 20px"}>
                                {data.image.map((file, index) => (
                                    <Grid item xs={12} md={4} sm={6} key={index}>
                                        <Box style={{ position: "relative"}}>
                                            <a href={URL.createObjectURL(file)} target="_blank">
                                                <img src={URL.createObjectURL(file)}
                                                    alt={`selected-${index}`}/>
                                            </a>
                                            <Button style={{ position:"absolute",
                                                top: 0, right: 0,
                                                background:"transparent"}}
                                                onClick={() =>
                                                    handleDelete(index)
                                                }
                                            >
                                                <DeleteIcon color="error" />
                                            </Button>
                                        </Box>
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
             Upload Product
            </Button>
           
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}