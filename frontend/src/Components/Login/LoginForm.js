import React, { useState } from "react";
import {  Box, Button, TextField, Divider } from "@mui/material";


//used for both registration screen and login screen
const LogInForm = ({isLoginScreen}) => {
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

  return (
  <>
    {isLoginScreen ? 
      <Box sx={{ mt: 3, ml: 5, mr: 5, fontFamily: "Poppins", color: "white" }}>
        <Box sx={{ fontSize: "14px" }}>Create username</Box>
        <Box sx={{ fontSize: "14px", mt: 3 }}>Create password</Box>
      </Box> : 
  
      <Box sx={{ mt: 5, ml: 5, mr: 5, fontFamily: "Poppins" }}>
        <Box sx={{ fontSize: "14px", mt: 5 }}>Username</Box>
        <TextField sx={{width: "100%", input: { color: "white", background: "" }}} id="standard-basic" label="" variant="standard" />
        <Divider style={{ background: '#898989' }} />
        <Box sx={{ fontSize: "14px", mt: 3 }}>Password</Box>
        <TextField sx={{width: "100%", input: { color: "white", background: "" }}} onChange={handlePasswordChange} id="standard-basic" label="" variant="standard" />
        <Divider style={{ background: '#898989' }} />
      </Box>}
  </>
  );
};

export default LogInForm;
