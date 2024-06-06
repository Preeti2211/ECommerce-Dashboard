import React, { useState } from "react";
import {
  AppBar,
  Badge,
  Box,
  Drawer,
  IconButton,
  Link,
  Toolbar,
  Typography,
} from "@mui/material";
import Cart from "./Cart";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import "../Style/header.css";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from '@mui/icons-material/Favorite';


const TopBar = ({ onOrderedQuant, onReset }) => {
  const [showCart, setShowCart] = useState(false);

  const [mobileopen, setMoobileopen] = useState(false);

  const handledrwaerToggle = () => {
    setMoobileopen(!mobileopen);
  };

  const drawer = (
    <Box onclick={handledrwaerToggle} sx={{ textAlign: "center" }}>
      <>
        <Typography
          color={"goldenrod"}
          variant="h6"
          component={"div"}
          sx={{ flexGrow: 1 }}
        >
          Loot Lo
        </Typography>

        <ul className="mobile-navigationUl">
          <li>
            <Link href="/login">Login</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          
        </ul>
      </>
    </Box>
  );
  return (
    <>
      <Box>
        <AppBar component="nav" sx={{ bgcolor: "white",color:"black" }}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              sx={{ mr: 2, display: { sm: "none" } }}
              onClick={handledrwaerToggle}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              color={"goldenrod"}
              variant="h6"
              component={"div"}
              sx={{ flexGrow: 1 }}
            >
              <FastfoodIcon />
              Loot Lo  
          </Typography>
             
          <Box>

          <ul className="navigationUl">
                <li>
                  <Link href="/login">Login</Link>
                </li>
                <li>                    
                    <IconButton
            disableRipple
            onClick={() => {
              setShowCart(!showCart);
            }}
          >
            <Badge
              invisible={onOrderedQuant === 0}
              badgeContent={onOrderedQuant}
              variant="standard"
              sx={{
                color: "#fff",
                fontFamily: "Kumbh sans",
                fontWeight: 700,
                "& .css-fvc8ir-MuiBadge-badge ": {
                  fontFamily: "kumbh sans",
                  fontWeight: 700,
                },
              }}
            >
              <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                  fill="#69707D"
                  fillRule="nonzero"
                  sx={{ color:"black" }}
                />
                {/* <ShoppingCartIcon /> */}
              </svg>
            </Badge>
          </IconButton>
           {showCart && (
            <Cart
              onOrderedQuant={onOrderedQuant}
              onReset={onReset}
              onShow={setShowCart}
            />
          )}
                </li>
                <li>
                <IconButton >
                  <Link href="mailto:contact@example.com"><FavoriteIcon/></Link>
                </IconButton>
                </li>
              </ul>                               
          </Box>
          </Toolbar>

        </AppBar>
        <Box component="nav">
          <Drawer
            variant="temporary"
            open={mobileopen}
            onClose={handledrwaerToggle}
            sx={{ display: { xs: "block", sm: "none" } }}
          >
            {drawer}
          </Drawer>
        </Box>
       <Box sx={{ p:1 }}> <Toolbar/></Box>
      </Box>
      <Box>
        <Box sx={{ display: "flex", justifyContent: "center",marginBottom:"20px",background:"lightblu" }}>
          <Box sx={{ display: { xs: "none", sm: "block", } }}>
              <ul className="navigationUl">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/catefory">Category</Link>
                </li>
                <li>
                  <Link href="/new_collection">New Collection</Link>
                </li>
                <li>
                  <Link href="/new_arrival">New Arrival</Link>
                </li> 
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
                <li>
                  <Link href="/about">About</Link>
                </li>
              </ul>
            </Box>
        </Box>
      </Box>
    </>
  );
};

export default TopBar;
