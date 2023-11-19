import React from "react";
import { Box } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const NewGroup = (props) => {
  return (
    <Box
      sx={{
        height: "144px",
        width: "97%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderColor: "white",
        border: "dashed",
        borderRadius: "8px",
      }}
    >
      <AddIcon></AddIcon>
    </Box>
  );
};

export default NewGroup;
