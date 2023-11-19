import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ProfileHeader = () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    // TODO - Add logic to navigate to another page
    navigate("/another-page");
  };

  const handleSettings = () => {
    // Add logic to handle settings
    //TODO - Add settings page
    console.log("Settings clicked");
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        fontSize: "30px",
        mt: 6,
        pb: 2,
        px: 2, // Add padding to the left and right
      }}
    >
      <Button variant="text" color="inherit" onClick={handleNavigation}>
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="19" viewBox="0 0 12 19" fill="none">
          <path d="M12 2.2325L9.7166 0L0 9.5L9.7166 19L12 16.7675L4.583 9.5L12 2.2325Z" fill="white"/>
        </svg>
      </Button>
      
      <Typography
        variant="h6"
        sx={{
          color: 'var(--White, #FFF)',
          textAlign: 'center',
          fontFamily: 'Inter',
          fontSize: 30,
          fontStyle: 'normal',
          fontWeight: 600,
          lineHeight: 'normal',
        }}
      >
        Profile
      </Typography>
      
      <Button variant="text" color="inherit" onClick={handleSettings}>
        <Typography
          sx={{
            color: 'var(--White, #FFF)',
            fontFamily: 'Inter',
            fontSize: 16,
            fontStyle: 'normal',
            fontWeight: 500,
            lineHeight: 'normal',
          }}
        >
          Settings
        </Typography>
      </Button>
    </Box>
  );
};

export default ProfileHeader;
