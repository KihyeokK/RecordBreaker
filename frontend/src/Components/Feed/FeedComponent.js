import React from "react";
import { Box } from '@mui/material';
import NavBarContainer from '../NavBar/NavBarContainer'
import FeedHeader from './FeedHeader'
import NewPost from '../Post/NewPost'
import PostsContainer from './PostsContainer'

const FeedComponent = () => {
    return (
        <Box >
            <FeedHeader isBackButtonNeeded={false}></FeedHeader>
            <NavBarContainer isFeed={true} />
            <Box sx={{display: "flex", justifyContent: "center"}}><NewPost /></Box>
            <PostsContainer />
        </Box>
    )
}

export default FeedComponent;