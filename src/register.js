import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {useState} from 'react';

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

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function Register() {
    const intialValues ={ fname:"",
    lname:"",
    email:"",
    password:"",
    confirm_password:"",
    city:"",
    state:"",
    address:"",
    zip_code:"",}
    const [data,setData] = useState(intialValues);
    const [errors, setErrors] = useState({});

    const handleChange =(e)=>{
        setData({...data,[e.target.name] : e.target.value});
        console.log(e.target.value ,"value");
        setErrors((prevErrors) => ({
            ...prevErrors,
            [e.target.name]: e.target.value ? "" : prevErrors[e.target.name],
        }));
    }
    
  const validateForm = () => {
        let isValid = true;
        const newErrors = {};

        if (!data.fname.trim()) {
            newErrors.name = " first Name is required";
            isValid = false;
        }

        if (!data.email.trim()) {
            newErrors.email = "Email is required";
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(data.email)) {
            newErrors.email = "Email is invalid";
            isValid = false;
        }
        if (!data.password.trim()) {
            newErrors.name = "password is required";
            isValid = false;
        }

        if (data.password.trim() !== data.confirm_password.trim()) {
            newErrors.name = "password filed missmatched";
            isValid = false;
        }
        if (!data.confirm_password.trim()) {
            newErrors.name = "confirm_password is required";
            isValid = false;
        }

        if (!data.state.trim()) {
            newErrors.name = "state is required";
            isValid = false;
        }
        if (!data.city.trim()) {
            newErrors.name = "city is required";
            isValid = false;
        }
        if (!data.address.trim()) {
            newErrors.name = "address is required";
            isValid = false;
        }
        if (!data.zip_code.trim()) {
            newErrors.name = "zip_code is required";
            isValid = false;
        }
        setErrors(newErrors);
        return isValid;
    };
 const handleSubmit = (e) => {
    e.preventDefault();
    const formValue = new FormData(e.currentTarget);
    if(validateForm()){
        alert("successfully registerd");
        console.log("Form submitted successfully:", data);
        setData(intialValues);
    } else {
        alert("form Submission failed"   + errors[e.target.name]);
        console.error("Form submission failed. Validation errors:", errors);
    }
    // let result = fetch("http://127.0.0.1:8000/api/register",{
    //   method:"post",
    //   header:{
    //     'Content-Type':'application/json',
    //     'Accept':'application/json',
    //   },
    //   body:JSON.stringify(data),
    // }).then(response=>{
    //   result = response.json();
    //   console.log(result ,'result');
    // })
    
    console.log({
      email: formValue.get('email'),
      password: formValue.get('password'),
    });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main">
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
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="fname"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  value ={data.fname}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lname"
                  autoComplete="family-name"
                  value ={data.lname}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value ={data.email}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  value ={data.password}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="confirm_password"
                  label="Confirm Password"
                  type="password"
                  id="password"
                  value ={data.confirm_password}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
              <TextField type="text" name="state" value ={data.state} fullWidth margin="normal" onChange={handleChange} label="Enter State" helperText={errors.state}/>

              </Grid>
              <Grid item xs={12}>
              <TextField type="text" name="city" value ={data.city} fullWidth margin="normal" onChange={handleChange} label="Enter City" helperText={errors.city}/>

              </Grid>
              <Grid item xs={12}>
              <TextField type="text" name="zip_code" value ={data.zip_code} fullWidth margin="normal" onChange={handleChange} label="Enter Zip Code" helperText={errors.zip_code}/>

              </Grid>
              <Grid item xs={12}>
              <TextField type="text" name="address" value ={data.address} fullWidth margin="normal" onChange={handleChange} label="Address" helperText={errors.address}/>

              </Grid>
              <Grid item xs={12}>
                
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}