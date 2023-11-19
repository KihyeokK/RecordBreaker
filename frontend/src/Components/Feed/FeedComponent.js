import React from "react";
import { Box } from '@mui/material';
import NavBarContainer from '../NavBar/NavBarContainer'
import FeedHeader from './FeedHeader'

const FeedComponent = () => {
    return (
        <Box >
            <FeedHeader></FeedHeader>
            <NavBarContainer isFeed={true} />
        </Box>
    )
}

export default FeedComponent;