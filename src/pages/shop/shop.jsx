import React from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import { Grid, Typography } from "@mui/material";
import WelcomeCarousel from "../shop/CourselWelcome"
import "./shop.css";

export const Shop = () => {
  return (
    <div style={{ padding: "20px",backgroundColor:'#2C2C2C ' }}>
     
      <WelcomeCarousel />
      <Grid container spacing={3} sx={{marginTop:'50px'}}>
      {PRODUCTS.map((product) => (
          <Grid item xs={12} sm={6} md={3} key={product.id}>
            <Product data={product} />
          </Grid>
       ))}
          </Grid>
          </div>
     );
    };
