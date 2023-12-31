import React from "react";
import { Box, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import pic1 from "../../images/esme.png";
import album1 from "../../images/album1.png";
import goldDisk from "../../images/goldDisk.svg";
import silverDisk from "../../images/silverDisk.svg";
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import { getSong }  from "../../services";
import { useEffect, useState } from "react";

const Post = (props) => {
  const [song, setSong] = useState({});
  const { userName, songId, numDiscs,numGoldenDiscs, comments, createdAt} = props;

  useEffect(() => {
    const fetchSong = async () => {
      if(songId !== undefined){
        const response = await getSong(songId);
        setSong(response);
      }
    };
    fetchSong();
    console.log("song", song);
  } , [songId]);

  return (
    <Box
      sx={{
        mb: 3,
        display: "flex",
        flexDirection: "column",
        bgcolor: "#464669",
        width: "307px",
        height: "210px",
        borderRadius: "8px",
      }}
    >
      <Box sx={{ ml: 2, mt: 2 }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box
            component="img"
            sx={{
              borderRadius: "50%",
              maxHeight: { xs: 28 },
              maxWidth: { xs: 28 },
              mr: 1,
            }}
            alt="Profile picture"
            src={pic1}
          />
          <Box sx={{ fontSize: "14px" }}>{userName}</Box>
        </Box>
      </Box>

      <Box sx={{ ml: 2, mt: 2, mr: 2 }}>
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-around" }}>
          <Box>
            <Box
              component="img"
              sx={{
                maxHeight: { xs: 100 },
                maxWidth: { xs: 100 },
                mr: 1,
                mb: 1
              }}
              alt="Album cover"
              src={song.albumCover}
            />
            <Box sx={{display: "flex", alignItems: "center"}}>
                <Box sx={{mr: 1, fontSize: "12px"}}>{numGoldenDiscs}</Box>
                <Box component="img" sx={{ mr: 1, maxHeight: { xs : 24 }, maxWidth: { xs: 24 }}} alt="Gold Disks" src={goldDisk}></Box>
                <Box sx={{mr: 1, fontSize: "12px"}}>{numDiscs}</Box>
                <Box component="img" sx={{ mr: 1, maxHeight: { xs : 19 }, maxWidth: { xs: 19 }}} alt="Gold Disks" src={silverDisk}></Box>
            </Box>
          </Box>

          <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-start" }}>
            <Box>{props.song}</Box>
            <Box sx={{color: "#898989", fontSize: "13px"}}>{song.artist}</Box>
            <PlayCircleIcon sx={{fontSize: "40px"}}></PlayCircleIcon>
            <Box sx={{mt: 1, fontSize: "10px", color: "#898989"}}>View all comments</Box>
            <Box sx={{mt: 1, fontSize: "8px", color: "#898989"}}>Add a comment ...</Box>
          </Box>
        </Box>
      </Box>
      <Box></Box>
    </Box>
  );
};

export default Post;
