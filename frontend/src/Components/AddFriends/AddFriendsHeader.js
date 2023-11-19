import React from 'react';
import { Box } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link } from 'react-router-dom';

const AddFriendsHeader = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        fontFamily: "Inter",
        // alignItems: "center",
        mt: 5,
        ml: 3,
        mr: 4,
        mb: 0,
      }}
    >
      <div style={{width: 35}}> </div>
      <div> Add Friends</div>

      <Link to="/feed" style={{ color: "white", textDecoration: "inherit" }}>
        <ArrowForwardIosIcon sx={{color: "white", fontSize:"35px", margin: 0}} />
      </Link>
    </Box>
  );
};

export default AddFriendsHeader;
