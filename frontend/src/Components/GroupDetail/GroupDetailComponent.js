import React from "react";
import { Box } from '@mui/material';
import NavBarContainer from '../NavBar/NavBarContainer'
import FeedHeader from '../Feed/FeedHeader'
import NewPost from '../Post/NewPost'
import Group from '../Group/Group'
import GroupList from '../Group/GroupList'
import PostsContainer from '../Feed/PostsContainer'
import GroupProfile from './GroupProfile'
import { useSearchParams, useParams } from "react-router-dom";

const GroupDetailComponent = (props) => {
    // get the id from the endpoint in the form of groups/:id
    const { groupId } = useParams();
    console.log("param value is: ", groupId);

    return (
        <Box >
            <FeedHeader isBackButtonNeeded={true}></FeedHeader>
            {/* pass groupID in props to GroupProfile */}
            <GroupProfile groupId={groupId} />
            <PostsContainer />
        </Box>
    )
}

export default GroupDetailComponent;