import React from "react";
import { Box } from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";

const Group = (props) => {
  return (
    <Box
      sx={{
        bgcolor: "#464669",
        borderRadius: "8px",
        height: "150px",
        width: "100%",
      }}
    >
      <Box>
        <LockIcon></LockIcon>
      </Box>

      <Box>{props.name}</Box>
      <Box></Box>
    </Box>
  );
};

export default Group;
