import React, { useState } from "react";
import { Stack, Box, Button, Input } from "@mui/material";


//used for both registration screen and login screen
const LogInForm = ({isLoginScreen}) => {


  return (
  <>
    {isLoginScreen ? 
    <form onSubmit={}>
      <Box sx={{ mt: 3, ml: 5, mr: 5, fontFamily: "Poppins" }}>
        <Box sx={{ fontSize: "14px" }}>Create username</Box>
        <Input id="username" aria-describedby="my-helper-text" />
        <Box sx={{ fontSize: "14px", mt: 3 }}>Create password</Box>
      </Box>
    </form>: 
  
    <form onSubmit={() => }>
      <Box sx={{ mt: 3, ml: 5, mr: 5, fontFamily: "Poppins" }}>
        <Box sx={{ fontSize: "14px" }}>Username</Box>

        <Input id="username" aria-describedby="my-helper-text" />
        <Box sx={{ fontSize: "14px", mt: 3 }}>Create password</Box>
      </Box>
    </form>}
  </>
  );
};

export default LogInForm;
