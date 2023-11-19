import React from "react";
import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";

const NextButton = () => {
  return (
    <Box sx={{display: "flex", justifyContent: "center", mt: "400px"}}>
      <Button
        sx={{
          width: "325px",
          height: "56px",
          boxShadow: "0px 2px 7px rgba(0, 0, 0, 0.15)",
          borderRadius: "15px",
          opacity: 1,
          bgcolor: "#B2C0E4",
          color: "#191919",
          fontSize: 15,
        }}
      >
        <Link
          to="/feed"
          style={{ color: "inherit", textDecoration: "inherit" }}
        >
          Next
        </Link>
      </Button>
    </Box>
  );
};

export default NextButton;
