import React from "react";
import { Box } from '@mui/material';
import NewPost from '../Post/NewPost';
import PostList from '../Post/PostList';

const PostsContainer = (props) => {
    const { groupId } = props;
    return (
        <Box sx={{ml: 3, mr: 3, display: "flex", justifyContent: "center"}}>
            <PostList groupId={groupId} />
        </Box>
    )
}

export default PostsContainer;