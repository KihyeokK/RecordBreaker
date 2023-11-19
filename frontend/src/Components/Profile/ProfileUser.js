import React from "react";
import { useState, useContext, useEffect } from "react";
import { Box } from "@mui/material";
import ProfileStats from "./ProfileStats";
import TopArtistOfMonth from "./TopArtistOfMonth";
import { UserContext } from "../../Contexts/UserContext";
import { getUser } from "../../services";

import cd from "../../images/cd.svg";;

const ProfileUser = () => {
  const userContext = useContext(UserContext);
  const userName = userContext.user.userName;
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchUser = async () => {
        const fetchedUser = await getUser(userName);
        setUser(fetchedUser);
        console.log(fetchedUser);
    }
    fetchUser();
  }, []);

  return (
    <Box sx={{display: "flex", justifyContent: "center"}}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          component="img"
          sx={{
            height: 80,
            width: 80,
            mb: 1
          }}
          alt="The Profile Picture"
          src={cd}
        ></Box>
        <Box sx={{ color: "white", fontSize: "15px" }}>
          {userContext.user.name}
        </Box>
        <Box sx={{ color: "white", fontSize: "10px", mt: "5px", mb: 2 }}>
          {userContext.user.userName}
        </Box>
        <ProfileStats numFriends={user.numFriends} numGoldenDiscs={user.numGoldenDiscs} numDiscs={user.numDiscs}></ProfileStats>
        <TopArtistOfMonth />
      </Box>
    </Box>
  );
};

export default ProfileUser;
