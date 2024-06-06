import React from "react";
import { Box, Typography } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = () => {
  return (
    <>
   
   <Box sx={{ textAlign: "center", bgcolor: "black", color: "white", }}>
        <Box
          sx={{
            my: 3,
            "&svg": {
              fontSize: "60px",
              cursor: "pointer",
              mr: 10,
            },
            "& svg:hover": {
              color: "goldenrod",
              transform: "translateX(5px)",
              transition: "all 400ms",
            },
          }}
        >
          <InstagramIcon />
          <TwitterIcon />
          <GitHubIcon />
        </Box>

        <Typography
          variant="h5"
          sx={{
            "@media (max-width:600px)": {
              fontSize: "1rem",
            },
          }}
        >
          All Right Reserved &copy; to Preeti Singh
        </Typography>
      </Box>  
    </>
  );
};

export default Footer;

