import React from "react";
import "./Login.css";
import Logo from "../../../Images/Logos/logo.png";
import { Box, Button, Typography } from "@mui/material";

const Login = () => {
  return (
    <div className="login-container">
      <img src={Logo} alt="Logo" style={{ width: 150, marginBottom: 20 }} />
      <Box className="login-content" sx={{ py: 15, px: 8 }}>
        <Box>
          <Typography
            variant="h6"
            sx={{ fontWeight: 600, textAlign: "center", my: 2 }}
          >
            Login with
          </Typography>
          <Button className="google-btn" variant="contained">
            Continue with google
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default Login;
