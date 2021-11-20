import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const Service = (props) => {
  const { icon, name, desc } = props.service;
  return (
    <>
      <Grid item xs={12} sm={12} md={4}>
        <Card sx={{ maxWidth: 345, textAlign: "center" }}>
          <CardMedia
            component="img"
            sx={{ width: 80, margin: "auto", pt: 2 }}
            image={icon}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {desc}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
};

export default Service;
