import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Grid from "@mui/material/Grid";

const Footer = () => {
  return (
    <Box sx={{ background: "#FBD062", mt: 10 }}>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={6}>
            <Typography
              variant="h4"
              sx={{ fontWeight: "bold", color: "#2D2D2D", mb: 4 }}
            >
              Let us handle your <br /> project, professionally
            </Typography>
            <Typography>
              With well written codes, we build amazing apps for all platforms,
              mobile and web apps in general.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            2
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
