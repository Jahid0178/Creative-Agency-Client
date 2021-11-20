import { Container } from "@mui/material";
import React from "react";
import Slack from "../../../Images/Logos/slack.png";
import Google from "../../../Images/Logos/google.png";
import Uber from "../../../Images/Logos/uber.png";
import Netflix from "../../../Images/Logos/netflix.png";
import Airbnb from "../../../Images/Logos/airbnb.png";
import "./Clients.css";
import { Box } from "@mui/system";

const Clients = () => {
  return (
    <Box sx={{ my: 5 }}>
      <Container>
        <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
          <img style={{ width: 150, height: 50 }} src={Slack} alt="" />
          <img style={{ width: 150, height: 50 }} src={Google} alt="" />
          <img style={{ width: 150, height: 50 }} src={Uber} alt="" />
          <img style={{ width: 150, height: 50 }} src={Netflix} alt="" />
          <img style={{ width: 150, height: 50 }} src={Airbnb} alt="" />
        </Box>
      </Container>
    </Box>
  );
};

export default Clients;
