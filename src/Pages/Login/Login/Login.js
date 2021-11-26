import React from "react";
import "./Login.css";
import Logo from "../../../Images/Logos/logo.png";
import { Box } from "@mui/material";

const Login = () => {
  return (
    <div className="login-container">
      <Box>
        <img src={Logo} alt="Logo" />
      </Box>
    </div>
  );
};

export default Login;
