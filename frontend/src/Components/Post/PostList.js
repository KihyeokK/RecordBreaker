import React from "react";
import { Box, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Post from "./Post";

const PostList = () => {

    const fetchedPosts = [
        {
            userName: "esme_bella",
            song: "My Love Mine",
            numDiscs: 33,
            numGoldenDiscs: 6,
            comments: [],
            createdAt: new Date()
        },
        {
            userName: "jaewonmoon00",
            song: "Paris in the Rain",
            numDiscs: 24,
            numGoldenDiscs: 5,
            comments: [],
            createdAt: new Date()
        },
        {
            userName: "joe_khkim",
            song: "Billie Jean",
            numDiscs: 14,
            numGoldenDiscs: 6,
            comments: [],
            createdAt: new Date()
        },
        {
            userName: "d_zhang2",
            song: "Super Shy",
            numDiscs: 74,
            numGoldenDiscs: 8,
            comments: [],
            createdAt: new Date()
        },
    ]

    return (
        <Box sx={{mb: 5}}>
            {fetchedPosts.map((post) => {
                return (
                    <Post userName={post.userName} song={post.song} numDiscs={post.numDiscs} numGoldenDiscs={post.numGoldenDiscs} comments={post.comments} createdAt={post.createdAt}></Post>
                )
            })}
        </Box>
    )
}

export default PostList;