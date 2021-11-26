import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Grid from "@mui/material/Grid";
import { useForm } from "react-hook-form";
import "./Footer.css";

const Footer = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <Box sx={{ background: "#FBD062" }}>
      <Container sx={{ py: 10 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={6}>
            <Typography
              variant="h4"
              sx={{ fontWeight: "bold", color: "#2D2D2D", mb: 4 }}
            >
              Let us handle your <br /> project, professionally.
            </Typography>
            <Typography>
              With well written codes, we build amazing apps for all platforms,
              <br /> mobile and web apps in general.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                className="form-input"
                placeholder="Your email address"
                {...register("firstName", { required: true, maxLength: 20 })}
              />
              <input
                className="form-input"
                placeholder="Your name / company's name"
                {...register("lastName")}
              />
              <textarea
                className="form-message"
                {...register("message")}
                type="text"
                cols="30"
                rows="10"
              />
              <input className="form-btn" type="submit" value="Send" />
            </form>
          </Grid>
        </Grid>
      </Container>
      <Typography sx={{ textAlign: "center", py: 2 }}>
        Copyright Orange labs 2021
      </Typography>
    </Box>
  );
};

export default Footer;
