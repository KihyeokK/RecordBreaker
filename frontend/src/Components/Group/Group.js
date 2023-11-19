import React from "react";
import { Box } from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import PublicIcon from "@mui/icons-material/Public";
import codejamlogo from "../../images/codejamlogo.png";

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
        {!props.isPublic ? (
          <LockIcon sx={{ ml: 1, mt: 1 }} />
        ) : (
          <PublicIcon sx={{ ml: 1, mt: 1 }} />
        )}
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Box
          component="img"
          sx={{
            height: 60,
            width: 60,
            maxHeight: { xs: 60 },
            maxWidth: { xs: 60 },
            borderRadius: "50%",
            mb: 1
          }}
          alt="The Group profile photo"
          src={codejamlogo}
        ></Box>
        <Box>{props.groupName}</Box>
        <Box sx={{fontSize: "9px", color: "#898989"}}>{props.numMembers}{" members"}</Box>
      </Box>
    </Box>
  );
};

export default Group;
