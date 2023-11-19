import React from 'react';
import { Box, Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import AddFriendsHeader from './AddFriendsHeader';
import AddFriendsList from './AddFriendsList';

const AddFriendsComponent = (props) => {
  const handleAddFriendSubmit = () => {
    // Add logic to handle the submit action
    console.log('Submit button clicked');
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column', // Make the container a column
        // alignItems: 'center', // Center content horizontally
        fontSize: '30px',
        fontFamily: 'Inter',
        mt: 6,
        pb: 2,
      }}
    >
      <AddFriendsHeader />
      <Box
      sx={{
        display: 'flex',
        flexDirection: 'column', // Make the container a column
        alignItems: 'center', // Center content horizontally
        fontSize: '30px',
        fontFamily: 'Inter',
        mt: 6,
        pb: 2,
      }}>
        <TextField
            id="filled-search"
            label="Input Username"
            type="search"
            variant="filled"
            InputProps={{
            style: {
                color: 'white', // Text color
                backgroundColor: '#2E2E4C', // Lighter background color
                width: "325px",
            },
            }}
            InputLabelProps={{
            style: {
                color: 'grey', // Grey color for the instruction text
            },
            }}
        />
        <Button
            variant="contained"
            color="primary"
            onClick={handleAddFriendSubmit}
            sx={{ mt: 2 , mt: 6 , width: "40px"}} 
        >
            Add
        </Button>
      </Box>
      
    </Box>
  );
};

export default AddFriendsComponent;
