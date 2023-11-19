import React from "react";
import ProfileInfo from "./ProfileInfo";
import ProfilePicture from "./ProfilePicture";
import ProfileStats from "./ProfileStats";
import ProfileSettings from "./ProfileSettings";
import ProfileHeader from "./ProfileHeader";
import ProfileCalendar from "./ProfileCalendar";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Daniel from '../../images/danielz.png';
import { Box } from '@mui/material';
const ProfileComponent = () => {
  return (
    <Box>
      <ProfileHeader/>
      <ProfilePicture/>
      <ProfileStats/>
      <ProfileCalendar/>
    </Box>
  );
}

export default ProfileComponent;
