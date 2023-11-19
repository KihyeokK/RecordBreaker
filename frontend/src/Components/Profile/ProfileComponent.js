import React from "react";
import { Box } from "@mui/material";
import NavBarContainer from "../NavBar/NavBarContainer";
import ProfileHeader from "./ProfileHeader";
import ProfileUser from "./ProfileUser";

const ProfileComponent = () => {
  return (
    <Box>
        <ProfileHeader isBackButtonNeeded={true}></ProfileHeader>
        <ProfileUser />

    </Box>
  );
};

export default ProfileComponent;
