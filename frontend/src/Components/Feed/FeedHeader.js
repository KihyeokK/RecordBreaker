import PersonAddIcon from "@mui/icons-material/PersonAdd";
import React from "react";
import { Box, Button } from "@mui/material";
import logo from "../../images/logo.png";
import disk from "../../images/cd.svg";
import { Link } from "react-router-dom";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { borderRadius } from "@mui/system";

const FeedHeader = (props) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        mt: 5,
        ml: 4,
        mr: 4,
        mb: 2,
      }}
    >
      {/* <Box>
        <img src={logo} alt="My Image" />
      </Box> */}
      {props.isBackButtonNeeded ? (
        <Box onClick={() => {window.history.back()}}>
          <ArrowBackIosIcon style={{ padding: 0, marginLeft: "10px", fontSize: "25px",  }}></ArrowBackIosIcon>
        </Box>
      ) : (
        <Link to="/addFriends" style={{ color: "white", textDecoration: "inherit" }}>
          <PersonAddIcon style={{ fontSize: "35px" }}></PersonAddIcon>
        </Link>
      )}
      <Box
        component="img"
        sx={{
          height: 51,
          width: 89,
          maxHeight: { xs: 51 },
          maxWidth: { xs: 89 },
        }}
        alt="The RecordBreaker logo"
        src={logo}
      />
      <Link to="/profile" style={{ color: "white", textDecoration: "inherit" }}>
        <Box
          component="img"
          sx={{ color: "white", maxHeight: "30px", margin: 0 }}
          src={disk}
        ></Box>
      </Link>
    </Box>
  );
};

export default FeedHeader;
