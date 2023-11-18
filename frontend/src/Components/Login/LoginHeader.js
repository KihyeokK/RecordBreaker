import React from "react";
import { Box } from "@mui/material";

const LoginHeader = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        fontSize: "30px",
        mt: 6,
        pb: 2
      }}
    >
        Username
    </Box>
  );
};

export default LoginHeader;