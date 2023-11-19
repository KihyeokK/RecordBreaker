import React, { useEffect, useState } from "react";
import { Box, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Post from "./Post";
import { getGroupPosts, getFriendPosts } from "../../services";

const PostList = (props) => {
    const { groupID } = props;
    const [fetchedPosts, setFetchedPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            if (groupID) {
                console.log("fetching group posts");
                const response = await getGroupPosts(groupID);
                setFetchedPosts(response.posts);
            }
            else {
                console.log("fetching friend posts");
                const userName = sessionStorage.getItem("userId");
                const response = await getFriendPosts(userName);
                setFetchedPosts(response.posts);
            }
            console.log("fetched posts: ", fetchedPosts);
        }
        fetchPosts();
        console.log("fetched posts: ", fetchedPosts);
    } , []);

    return (
        <Box sx={{mb: 2, mt:3}}>
            <Box sx={{fontSize: "14px", mb:2}}>TODAY</Box>
            {fetchedPosts?.map((post) => {
                return (
                    <Post userName={post.userName} songId={post.songID} numDiscs={post.numDiscs} numGoldenDiscs={post.numGoldenDiscs} comments={post.comments} createdAt={post.createdAt}></Post>
                )
            })}
        </Box>
    )
}

export default PostList;