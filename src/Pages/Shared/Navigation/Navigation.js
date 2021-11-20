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
    <Box position="sticky" sx={{ flexGrow: 1, top: 0, zIndex: 999 }}>
      <AppBar position="fixed" sx={{ background: "#FBD062", boxShadow: 0 }}>
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
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, color: "#333" }}
          >
            News
          </Typography>
          <NavLink
            style={{
              color: "#333",
              textDecoration: "none",
              marginLeft: "15px",
              fontWeight: 500,
            }}
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            style={{
              color: "#333",
              textDecoration: "none",
              marginLeft: "15px",
              fontWeight: 500,
            }}
            to="/portfolio"
          >
            Our Portfolio
          </NavLink>
          <NavLink
            style={{
              color: "#333",
              textDecoration: "none",
              marginLeft: "15px",
              fontWeight: 500,
            }}
            to="/team"
          >
            Our Team
          </NavLink>
          <NavLink
            style={{
              color: "#333",
              textDecoration: "none",
              marginLeft: "15px",
              fontWeight: 500,
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
