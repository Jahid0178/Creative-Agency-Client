import React from "react";
import Grid from "@mui/material/Grid";
import { Button, Container, Typography } from "@mui/material";
import BannerBg from "../../../Images/Banner/Frame.png";
import "./Banner.css";
import { Box } from "@mui/system";

const alignment = {
  display: "flex",
  alignItems: "center",
};

const Banner = () => {
  return (
    <Box className="banner-container" sx={{ mt: 2 }}>
      <Container>
        <Grid container spacing={2} style={alignment}>
          <Grid item xs={12} sm={12} md={6}>
            <Typography
              variant="h3"
              sx={{ fontWeight: "bold", color: "#111430" }}
            >
              Let's Grow Your <br /> Brand To The <br /> Next Level
            </Typography>
            <Typography sx={{ my: 3, textAlign: "justify" }}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque
              error officiis incidunt nam praesentium harum. Vitae repellendus
              ea, sint eum voluptates doloribus explicabo illo rem accusantium
              eius quibusdam accusamus corporis.
            </Typography>
            <Button variant="contained">Hire us</Button>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <img src={BannerBg} alt="" style={{ width: "100%" }} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Banner;
