import React from "react";
import { Box } from "@mui/material";

const Welcome = () => {
  return (
    <Box
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <Box sx={{display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Box></Box>
        <Box sx={{ fontSize: "30px", ml: 3, mr: 3 }}>
          Welcome to Record Breaker
        </Box>
      </Box>
    </Box>
  );
};

export default Welcome;
