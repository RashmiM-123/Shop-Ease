

// import React from "react";
// import { Container, TextField, Button, Typography, Box, Card, CardContent } from "@mui/material";

// const ContactPage = () => {
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert("Thank you for getting in touch! We'll respond shortly.");
//   };

//   return (
//     <Container maxWidth="sm" sx={{ marginTop: 8, display: "flex", justifyContent: "center" }}>
//       <Card
//         sx={{
//           width: "100%",
//           backgroundColor: "white",
//           boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
//         }}
//       >
//         <CardContent>
//           <Typography variant="h4" component="h1" gutterBottom textAlign="center" sx={{fontWeight:'700'}}>
//             Contact Us
//           </Typography>
//           <Typography variant="body1" color="text.secondary" gutterBottom textAlign="center" sx={{fontweight:'700'}}>
//             We’re here to help. Fill out the form below, and our team will get in touch with you shortly. Your feedback and inquiries are important to us!
//           </Typography>
//           <Box
//             component="form"
//             onSubmit={handleSubmit}
//             sx={{
//               marginTop: 4,
//               display: "flex",
//               flexDirection: "column",
//               gap: 3,
//             }}
//           >
//             <TextField
//               label="Your Name"
//               variant="outlined"
//               fullWidth
//               required
//             />
//             <TextField
//               label="Your Email"
//               variant="outlined"
//               fullWidth
//               required
//               type="email"
//             />
//             <TextField
//               label="Your Message"
//               variant="outlined"
//               multiline
//               rows={4}
//               fullWidth
//               required
//             />
//             <Button
//               type="submit"
//               variant="contained"
//               size="large"
//               sx={{ alignSelf: "center", padding: "10px 20px" }}
//             >
//               Submit
//             </Button>
//           </Box>
//         </CardContent>
//       </Card>
//     </Container>
//   );
// };

// export default ContactPage;
import React from "react";
import { Container, TextField, Button, Typography, Box, Grid } from "@mui/material";

const ContactPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for getting in touch! We'll respond shortly.");
  };

  return (
    <Container maxWidth="lg" sx={{ marginTop: 8 }}>
      <Grid container spacing={4} alignItems="center">
        {/* Left Side: Paragraph Section */}
        <Grid item xs={12} md={6}>
          <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: "700",backgroundColor:'#2C2C2C',color:'white',width:'200px',marginLeft:'140px',padding:'10px' }}>
            Contact Us
          </Typography>
          <Typography variant="body1" color="text.secondary" gutterBottom sx={{fontSize:'20px',color:'black',marginTop:'40px'}}>
          Have questions about returns, delivery, product details, or general inquiries? We’re here to assist you every step of the way!
          Our dedicated support team is committed to providing you with a seamless shopping experience. Whether you’re facing issues with an order, need help with a return, or have questions about a product, we’re here to help.
          </Typography>
          <Typography variant="body2" color="text.secondary" mt={2} sx={{fontSize:'20px',color:'black'}}>
          For urgent inquiries, feel free to reach out to our support team through the live chat feature available on our website or connect with us via our contact page. We’re here to ensure you get the assistance you need promptly and efficiently!
          </Typography>
        </Grid>

        {/* Right Side: Contact Form */}
        <Grid item xs={12} md={6}>
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              backgroundColor: "#F8F1E9",
              padding: 4,
              borderRadius: 2,
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            }}
          >
            <TextField
              label="Your Name"
              variant="outlined"
              fullWidth
              required
              sx={{ marginBottom: 2 }}
            />
            <TextField
              label="Your Email"
              variant="outlined"
              fullWidth
              required
              type="email"
              sx={{ marginBottom: 2 }}
            />
            <TextField
              label="Your Address"
              variant="outlined"
              fullWidth
              sx={{ marginBottom: 2 }}
            />
            <TextField
              label="Your Message"
              variant="outlined"
              multiline
              rows={4}
              fullWidth
              required
              sx={{ marginBottom: 2 }}
            />
            <Button
              type="submit"
              variant="contained"
              size="large"
              fullWidth
              sx={{ padding: "10px",width:'80px',marginLeft:'230px',backgroundColor:'#2C2C2C' }}
            >
              Submit
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ContactPage;

