import React from "react";
import { Box, Grid, Divider } from "@mui/material";
import verticalDivider from "../../images/verticalDivider.svg";
import goldDisk from "../../images/goldDisk.svg";
import silverDisk from "../../images/silverDisk.svg";

const ProfileStats = (props) => {

  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box sx={{mr:1, display: "flex", flexDirection: "column", alignItems: "center"}}><Box>{props.numFriends}</Box><Box sx={{fontSize: "13px", color: "#898989"}}>Friends</Box></Box>

      <Box
        component="img"
        sx={{
          borderRadius: "50%",
          mr: 4,
          ml: 2,
          maxHeight: { xs: 35 },
          maxWidth: { xs: 20 },
        }}
        alt="Vertical Divider"
        src={verticalDivider}
      />
      <Box>{props.numDiscs}</Box>
      <Box sx={{ display: "flex", ml: 1  }}>
        <Box
          component="img"
          sx={{ mr: 3, maxHeight: { xs: 24 }, maxWidth: { xs: 24 } }}
          alt="Gold Disks"
          src={goldDisk}
        />
      </Box>
      <Box>{props.numGoldenDiscs}</Box>
      <Box sx={{ display: "flex", ml: 1 }}>
        <Box
          component="img"
          sx={{ mr: 1, maxHeight: { xs: 24 }, maxWidth: { xs: 24 } }}
          alt="Silver Disks"
          src={silverDisk}
        />
      </Box>
    </Box>
  );
};

export default ProfileStats;
