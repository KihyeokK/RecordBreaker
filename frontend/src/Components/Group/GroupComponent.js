import React from "react";
import { Box } from '@mui/material';
import NavBarContainer from '../NavBar/NavBarContainer'
import FeedHeader from '../Feed/FeedHeader'
import NewPost from '../Post/NewPost'

const GroupComponent = () => {
    return (
        <Box >
            <FeedHeader></FeedHeader>
            <NavBarContainer isFeed={false} />
            
        </Box>
    )
}

export default GroupComponent;