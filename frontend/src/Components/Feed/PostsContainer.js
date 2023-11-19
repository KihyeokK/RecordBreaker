import React from "react";
import { Box } from '@mui/material';
import NewPost from '../Post/NewPost';
import PostList from '../Post/PostList';

const PostsContainer = () => {
    return (
        <Box sx={{ml: 3, mr: 3, display: "flex", justifyContent: "center"}}>
            <PostList />
        </Box>
    )
}

export default PostsContainer;