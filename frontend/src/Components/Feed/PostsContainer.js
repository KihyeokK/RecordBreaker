import React from "react";
import { Box } from '@mui/material';
import NewPost from '../Post/NewPost';
import PostsList from '../Post/PostsList';

const PostsContainer = () => {
    return (
        <Box sx={{ml: 3, mr: 3, display: "flex", justifyContent: "center"}}>
            <PostsList />
        </Box>
    )
}

export default PostsContainer;