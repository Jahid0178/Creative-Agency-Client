import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <NavLink
            style={{
              color: "#fff",
              textDecoration: "none",
              marginLeft: "15px",
            }}
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            style={{
              color: "#fff",
              textDecoration: "none",
              marginLeft: "15px",
            }}
            to="/portfolio"
          >
            Our Portfolio
          </NavLink>
          <NavLink
            style={{
              color: "#fff",
              textDecoration: "none",
              marginLeft: "15px",
            }}
            to="/team"
          >
            Our Team
          </NavLink>
          <NavLink
            style={{
              color: "#fff",
              textDecoration: "none",
              marginLeft: "15px",
            }}
            to="/contact"
          >
            Contact Us
          </NavLink>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navigation;
