import React from 'react';
import { Box } from '@mui/material';

const AddFriendsHeader = () => {
    return (
        <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          fontSize: "30px",
          mt: 6,
          pb: 2
        }}
      >
          Add Friends
      </Box>
    );
}  

export default AddFriendsHeader;