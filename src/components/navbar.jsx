// import React from "react";
// import { Link } from "react-router-dom";
// import { ShoppingCart } from "phosphor-react";
// import "./navbar.css";

// export const Navbar = () => {
//   return (
//     <div className="navbar">
//       <h1>ShopEase</h1>
//       <div className="links">
//         <Link to="/"> Shop </Link>
//         <Link to="/contact"> Contact </Link>
//         <Link to="/cart">
//           <ShoppingCart size={32} />
//         </Link>
//       </div>
//     </div>
//   );
// };
import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/products/logo.png"
import { ShoppingCart } from "phosphor-react";
import { AppBar, Toolbar, Typography, Button, IconButton, Box } from "@mui/material";
import { styled } from "@mui/system";

const StyledAppBar = styled(AppBar)({
  backgroundColor: '#2C2C2C ',
  color:'white' // Set the background color to purple
});

export const Navbar = () => {
  return (
    <StyledAppBar position="sticky" sx={{padding:'20px'}}>
      <Toolbar>
      <Box
    component="img"
    src={Logo}
    alt="ShopEase Logo"
    sx={{
      height: 50,
      width: 50,
      marginRight: 1,
      marginLeft:'30px' // Add spacing between the logo and text

    }}
  />
        
        <Typography variant="h6" sx={{ flexGrow: 1,fontSize:'30px' ,marginLeft:'20px',fontWeight:700}}>
          ShopEase
        </Typography>
        <Box sx={{display:'flex',columnGap:'30px'}}>
          <Button color="inherit" component={Link} to="/" sx={{marginLeft:'-30px',fontSize:'20px',fontWeight:700}}>
            Shop
          </Button>
          <Button color="inherit" component={Link} to="/ContactPage" sx={{fontSize:'20px',fontWeight:700}}>
            Contact
          </Button>
          <IconButton color="inherit" component={Link} to="/cart" sx={{fontSize:'20px',fontWeight:700,backgroundColor:'#F8F1E9',color:'black',width:'60px',height:'60px'}}>
            <ShoppingCart size={32} />
          </IconButton>
        </Box>
      </Toolbar>
    </StyledAppBar>
  );
};

