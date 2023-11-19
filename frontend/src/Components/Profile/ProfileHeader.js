import PersonAddIcon from "@mui/icons-material/PersonAdd";
import React from "react";
import { Box, Button } from "@mui/material";
import logo from "../../images/logo.png";
import disk from "../../images/cd.svg";
import { Link } from "react-router-dom";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const ProfileHeader = (props) => {
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
      <Box sx={{fontSize: "25px", ml: 3}}>Profile</Box>
        <Box sx={{fontSize: "16px"}}>Settings</Box>
    </Box>
  );
};

export default ProfileHeader;
