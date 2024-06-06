import { useLocation } from "react-router-dom";
import shirt from "./image/wshirt1.jpg";
import {
  Box,
  Button,
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import { Category } from "./image/DataImage";

const ShopPage = () => {
  const location = useLocation();
  // const location =  props.location.state
console.log(location ,'location');
  // const {product} = location.state;
  console.log(location, "product");
  return (
    <div>
    
      <Container>
        <h1>page shop </h1>
        <section>
          <Grid container>
            <Grid item xs={6}>
              <Box>
                <img
                  src={shirt}
                  alt="product"
                  style={{ boxSizing: "cover", height: "300px", width: "80%" }}
                />
              </Box>
            </Grid> 
            <Grid item xs={6} spacing={2}>
              <Box>
                <Typography variant="h3">Product Name Here</Typography>
                <Typography variant="h4">Product Description Here</Typography>
                <Typography variant="h5">Product Details Like </Typography>
                <Typography variant="pre">
                  {" "}
                  material: cotton blend <br />
                  size: m, xl, sm,l <br />
                  wash type :hand ,and machine <br />
                </Typography>
                <FormControl>
                  <FormLabel id="demo-row-radio-buttons-group-label">
                    Size :
                  </FormLabel>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                  >
                    <FormControlLabel
                      value="small"
                      control={<Radio />}
                      label="small"
                    />
                    <FormControlLabel
                      value="large"
                      control={<Radio />}
                      label="large"
                    />
                    <FormControlLabel
                      value="medium"
                      control={<Radio />}
                      label="medium"
                    />
                    <FormControlLabel
                      value="Etra Large"
                      control={<Radio />}
                      label="Etra Large"
                    />
                    <FormControlLabel
                      value="disabled"
                      disabled
                      control={<Radio />}
                      label="other"
                    />
                  </RadioGroup>
                </FormControl>
                <Button variant="contained" color="primary">
                  RS. 100 Buy Now
                </Button>
              </Box>
            </Grid>
          </Grid>
        </section>

        <section>
          <Typography variant="h2" gutterBottom>
            Other Category Name here
          </Typography>
          <Grid container spacing={3}>
            {Category.map((cat) => (
              <Grid item xs={3} spacing={2}>
                <img
                  src={cat.img}
                  alt={cat.name}
                  className="img-fluid rounded-circle mb-4"
                />
                <Typography variant="h5" className="mb-4 text-center">
                  {cat.category_name}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </section>
      </Container>
    </div>
  );
};

export default ShopPage;
