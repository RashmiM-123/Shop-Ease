import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { Card,CardMedia,Typography,Button,CardContent } from "@mui/material";

export const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemCount = cartItems[id] || 0;

  return (
    ( 
      <Card sx={{ maxWidth: 345, boxShadow: 3,borderRadius:'10px',marginBottom:'70px',marginLeft:'20px' }}>
        <CardMedia
          component="img"
          height="300"
          image={productImage}
          alt={productName}
          sx={{ height: 200, objectFit: "contain", backgroundColor: "#F8F1E9" }}
        />

        <CardContent>
          <Typography variant="h6" component="div" sx={{marginLeft:'40px',fontWeight:700,marginBottom:'20px'}}>
            {productName}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{display:'flex',justifyContent:'center',backgroundColor:'#17B169',width:'50px',padding:'5px',color:'white',borderRadius:'10px'}}>
            ₹{price}
          </Typography>
        </CardContent>
        <Button
          variant="contained"
          color="primary"
          onClick={() => addToCart(id)}
          sx={{ margin: "10px",marginLeft:'90px',marginBottom:'20px'}}
        >
          Add To Cart {cartItemCount > 0 && `(${cartItemCount})`}
        </Button>
      </Card>
    )
    
  )}