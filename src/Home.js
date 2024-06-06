import React from "react";
import {
  Container,
  Grid,
  Typography,
  Button,
  IconButton,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
} from "@mui/material";
import { styled } from "@mui/system";
import CloudCircleIcon from "@mui/icons-material/CloudCircle";
import { List } from "./image/DataImage";
import { Category } from "./image/DataImage";
import { Offer } from "./image/DataImage";
import { slider } from "./image/DataImage";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Slider from "@mui/material/Slider";
import { useState } from "react";
import slider7 from './image/slider7.jpg';
import { Link } from "react-router-dom";


const useStyles = styled((theme) => ({
  section: {
    marginBottom: theme.spacing(4),
  },
  product: {
    marginBottom: theme.spacing(2),
    textAlign: "center",
  },
  productImage: {
    width: "100%",
    maxWidth: "100%",
    height: 270,
    objectFit: "cover",
  },
}));

const Home = () => {
  const classes = useStyles();
  
  return (
    <main>
      <Container>
        <section>
          <Grid item xs={12} sm={6} md={3}>
            <div>
              <img src={slider7} alt="Product"  style={{ height:"500px",width:"100%" ,boxSizing:"cover"}}/>
            </div>
          </Grid>
        </section>
        <section>
          <Typography variant="h2" gutterBottom>
            Our Collection
          </Typography>
          <Grid container spacing={3}>
            {Category.map((cat) => (
              <Grid item xs={3} spacing={2}>
                <img
                  src={cat.img}
                  alt={cat.name}
                  className="img-fluid rounded-circle mb-4"
                  style={{}}
                />
                <Typography variant="h5" className="mb-4 text-center">
                  {cat.category_name}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </section>

        <section className={classes.section}>
          <Typography variant="h2" gutterBottom>
            Diwali Offer Our Items
          </Typography>
          <Grid container spacing={3}>
            {Offer.map((menu) =>( 
              <Grid item xs={4}>
                <Card>
                  <CardActionArea>
                    <CardMedia
                      sx={{ height: "250px", boxSizing: "100%" }}
                      component={"img"}
                      src={menu.img}
                      alt={menu.name}
                    />
                    <CardContent>
                      <Grid container>
                        <Grid item xs={8}>
                          <Typography gutterBottom>{menu.name}</Typography>
                        </Grid>
                        <Grid item xs={4}>
                          <IconButton>
                            <FavoriteBorderIcon />
                          </IconButton>
                        </Grid>
                        <Grid item xs={8}>
                          <Typography variant="body2">
                            Rs {menu.price}
                          </Typography>
                        </Grid>
                        <Grid item xs={4}>
                          <Typography variant="body2" component={"del"}>
                            Rs {menu.old_price}
                          </Typography>
                        </Grid>
                        <Grid item xs={12}>
                          <Link to={{ pathname:'/shop' , state:{menu} }}>
                          <Button color="primary" variant="contained">
                            Shop Now
                          </Button>
                          </Link>
                        </Grid>
                      </Grid>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Button
            href="#"
            color="primary"
            variant="contained"
            style={{ marginTop: "20px" }}
          >
            View All
          </Button>
        </section>
        <section className={classes.section}>
          <Typography variant="h2" gutterBottom>
            <a
              href="./most_popular"
              target="_blank"
              style={{ color: "red", textDecoration: "none" }}
            >
              Most Popular
            </a>{" "}
            |
            <a
              href="./best_seller"
              target="_blank"
              style={{ color: "black", textDecoration: "none" }}
            >
              Best Seller
            </a>
            |
            <a
              href="/new_aarival"
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              New Arrival
            </a>
          </Typography>
          <Grid container spacing={3}>
            {List.map((menu) => (
              <Grid item xs={3}>
                <Card>
                  <CardActionArea>
                    <CardMedia
                      sx={{ minHeight: "400px", boxSizing: "cover" }}
                      component={"img"}
                      src={menu.img}
                      alt={menu.name}
                    />
                    <CardContent>
                      <Grid container>
                        <Grid item xs={8}>
                          <Typography gutterBottom>{menu.name}</Typography>
                        </Grid>
                        <Grid item xs={4}>
                          <IconButton>
                            <FavoriteBorderIcon />
                          </IconButton>
                        </Grid>
                        <Grid item xs={8}>
                          <Typography variant="body2">
                            Rs {menu.price}
                          </Typography>
                        </Grid>
                        <Grid item xs={4}>
                          <Typography variant="body2" component={"del"}>
                            Rs {menu.old_price}
                          </Typography>
                        </Grid>
                        <Grid item xs={12}>
                          <Button color="primary" variant="contained">
                            Shop Now
                          </Button>
                        </Grid>
                      </Grid>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Button
            href="#"
            color="primary"
            variant="contained"
            style={{ marginTop: "20px" }}
          >
            View All
          </Button>
        </section>

        <section className={classes.section}>
          <Typography variant="h2" gutterBottom>
            Features
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={4}>
              <div style={{ textAlign: "center" }}>
                <IconButton>
                  <CloudCircleIcon
                    className="icon-with-background"
                    sx={{ fontSize: 160, color: "skyblue" }}
                  />
                </IconButton>
                <Typography variant="h5">Feature Name 1</Typography>
                <Typography>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </Typography>
                <Button variant="contained" color="primary">
                  Learn More
                </Button>
              </div>
            </Grid>
            <Grid item xs={12} sm={4}>
              <div style={{ textAlign: "center" }}>
                <IconButton>
                  <CloudCircleIcon
                    className="icon-with-background"
                    sx={{ fontSize: 160, color: "skyblue" }}
                  />
                </IconButton>
                <Typography variant="h5">Feature Name 1</Typography>
                <Typography>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </Typography>
                <Button variant="contained" color="primary">
                  Learn More
                </Button>
              </div>
            </Grid>
            <Grid item xs={12} sm={4}>
              <div style={{ textAlign: "center" }}>
                <IconButton>
                  <CloudCircleIcon
                    className="icon-with-background"
                    sx={{ fontSize: 160, color: "skyblue" }}
                  />
                </IconButton>
                <Typography variant="h5">Feature Name 1</Typography>
                <Typography>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </Typography>
                <Button variant="contained" color="primary">
                  Learn More
                </Button>
              </div>
            </Grid>
          </Grid>
        </section>
      </Container>
    </main>
  );
};

export default Home;
