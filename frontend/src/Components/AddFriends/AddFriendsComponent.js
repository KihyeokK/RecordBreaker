import React from 'react';
import { Box } from '@material-ui/core';
import AddFriendsHeader from './AddFriendsHeader';
import AddFriendsList from './AddFriendsList';



const AddFriendsComponent = (props) => {
    return  (
        <Box>
            <AddFriendsHeader />
            <AddFriendsList />
        </Box>
    )
}

export default AddFriendsComponent;