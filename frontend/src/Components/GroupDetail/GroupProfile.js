import React from "react";
import { Box } from '@mui/material';
import codejamlogo from '../../images/codejamlogo.png'
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const GroupProfile = (props) => {
    const [group, setGroup] = useState({}) // empty group to begin with

    useEffect(() => {
        // change this with call to api using props.groupId
        setGroup({
            groupID: "dfdd",
            name: "CodeJam",
            numMembers: 5,
            members: [],
            isPublic: false,
            messages: [],
            createdAt: new Date(),
          });
    }, [])

    return (
        <Box sx={{display: "flex", justifyContent: "center"}}>
            <Box component="img" sx={{ borderRadius: "50%", mr: 2, maxHeight: { xs : 89 }, maxWidth: { xs: 89 }}} alt="Group Profile" src={codejamlogo}></Box>
            <Box sx={{ml: 2, display: "flex", flexDirection: "column", justifyContent: "center"}}>
                <Box sx={{fontSize: "25px"}}>{group.name}</Box>
                <Box sx={{color: "#898989", fontSize: "13px"}}>{group.numMembers} {" members"}</Box>
                <Link to="/" style={{ color: "#898989", fontSize: "9px" }}>edit group</Link>
            </Box>
        </Box>
    )
}

export default GroupProfile;