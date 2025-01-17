import React from "react";
import { Box, Button, Typography } from "@mui/material";
import Carousel from "react-material-ui-carousel";
// import ShopNow from ""
import ShopNow from "../../assets/products/girlshopping.webp"; 

import SpecialDelivery  from "../../assets/products/girlshop2.webp";
import SpecialSale from "../../assets/products/specialSale.webp";
const WelcomeCarousel = () => {
  const items = [
    {
      title: "Welcome to ShopEase",
      description: "Why wait? Shop now and enjoy an extra 5% discount on the products you love. Don’t miss this chance to save big while stocking up on your must-haves. Grab the best deals today and make your shopping experience unforgettable!",
      para:'Hurry, offer valid for a limited time only!',
     buttonText: "Shop Now",
      image:ShopNow // Replace with actual image path
    },
    {
      title: "Season Sale",
      description: "Get ready to save like never before! Explore unbeatable offers on the most sought-after products. Don’t let these amazing deals slip away—shop now and bring home your favorites at incredible prices.",
      para:'Hurry, these deals won’t last forever!',
      buttonText: "Explore",
      image:SpecialDelivery // Replace with actual image path
    },
    {
      title: "Special sale",
      description: "Unlock unbeatable savings today! Discover incredible deals on top-rated products you love. Don’t wait—these limited-time offers won’t last long. Start shopping now and grab your favorites at prices you can’t resist!",
      para:'Don’t wait—grab these deals before they’re gone!',
      buttonText: "Explore",
      image:SpecialSale // Replace with actual image path
    },
  ];

  return (
    <Carousel
      indicators={true}
      animation="slide"
      navButtonsAlwaysVisible={true}
      sx={{ width: "100%", height: "500px", marginTop: "20px",marginBottom:'20px',marginLeft:'-20px'}}
    >
      {items.map((item, index) => (
        <Box
          key={index}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: "#F8F1E9",
            padding: "20px",
            height: "500px",

            color: "#000000",
            marginLeft:'49px'
          }}
        >
          {/* Left Content */}
          <Box sx={{ flex: 1, padding: "20px" }}>
            <Typography variant="h3" sx={{ fontWeight: "bold" }}>
              {item.title}
            </Typography>
            <Typography
              variant="h5"
              sx={{ marginTop: "10px", marginBottom: "20px",fontWeight:'200',fontSize:'20px' }}
            >
              {item.description}
            </Typography>
            <Typography variant="h5" sx={{fontweight:"800",marginBottom:'30px'}}>
              {item.para}
            </Typography>
            <Button
              variant="contained"
              color="#2C2C2C"
              sx={{ padding: "10px 20px",marginLeft:'90px',backgroundColor:'#2C2C2C ',color:'white' }}
            >
              {item.buttonText}
            </Button>
          </Box>

          {/* Right Image */}
          <Box
            component="img"
            src={item.image}
            alt={item.title}
            sx={{
              flex: 1,
              height: "100%",
              objectFit: "contain",
              height:'400px',
              width:'400px',
              borderRadius: "10px",
            }}
          />
        </Box>
      ))}
    </Carousel>
  );
};

export default WelcomeCarousel;
