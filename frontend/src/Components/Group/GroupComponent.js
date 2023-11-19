import React from "react";
import { Box } from '@mui/material';
import NavBarContainer from '../NavBar/NavBarContainer'
import FeedHeader from '../Feed/FeedHeader'
import NewPost from '../Post/NewPost'
import Group from './Group'
import GroupList from './GroupList'

const GroupComponent = () => {
    return (
        <Box >
            <FeedHeader isBackButtonNeeded={true}></FeedHeader>
            <NavBarContainer isFeed={false} />
            <GroupList></GroupList>
        </Box>
    )
}

export default GroupComponent;