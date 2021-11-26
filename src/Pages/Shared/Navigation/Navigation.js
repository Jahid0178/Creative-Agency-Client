import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../../Images/Logos/logo.png";
import { Button } from "@mui/material";
import "./Navigation.css";

const Navigation = () => {
  return (
    <Box position="sticky" sx={{ flexGrow: 1, top: 0, zIndex: 999 }}>
      <AppBar position="fixed" sx={{ background: "#FBD062", boxShadow: 0 }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <img src={Logo} alt="" style={{ width: 120 }} />
          </Box>
          <Box>
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
            <NavLink to="/login" style={{ textDecoration: "none" }}>
              <Button className="login-btn">Login</Button>
            </NavLink>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navigation;
