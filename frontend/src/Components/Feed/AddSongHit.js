import React from "react";
import { Box } from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import PublicIcon from "@mui/icons-material/Public";
import codejamlogo from "../../images/codejamlogo.png";

const AddSongHit = (props) => {
  return (
    <Box
      sx={{
        height: "150px",
        width: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          component="img"
          sx={{
            height: 124,
            width: 124,
            maxHeight: { xs: 124 },
            maxWidth: { xs: 124 },
            mb: 1,
          }}
          alt="The Group profile photo"
          src={codejamlogo}
        ></Box>
        <Box sx={{ fontSize: "10px", color: "#FFF" }}>My Love Mine All Mine</Box>
        <Box sx={{ fontSize: "8px", color: "#898989" }}>Mitski</Box>
      </Box>
    </Box>
  );
};

export default AddSongHit;
