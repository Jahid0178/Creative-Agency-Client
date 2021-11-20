import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Grid from "@mui/material/Grid";
import Service from "../Service/Service";

const services = [
  {
    id: 1,
    icon: "https://i.ibb.co/Q83sd6S/service1.png",
    name: "Web & Mobile Design",
    desc: "We craft stunning and amazing web UI, using a well drrafted UX to fit your product.",
  },
  {
    id: 2,
    icon: "https://i.ibb.co/tPyzvLm/service2.png",
    name: "Graphics Design",
    desc: "Amazing flyers, social media posts and brand representations that would make your brand stand out.",
  },
  {
    id: 3,
    icon: "https://i.ibb.co/w0vPxST/service3.png",
    name: "Web development",
    desc: "With well written codes, we build amazing apps for all platforms, mobile and web apps in general.",
  },
];

const Services = () => {
  return (
    <Box>
      <Container>
        <Typography
          variant="h4"
          sx={{ textAlign: "center", fontWeight: "bold", my: 8 }}
        >
          Provide awesome <span style={{ color: "#7AB259" }}>services</span>
        </Typography>
        <Grid container spacing={2}>
          {services.map((service) => (
            <Service key={service.id} service={service}></Service>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;
