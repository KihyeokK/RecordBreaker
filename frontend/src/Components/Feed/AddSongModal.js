import React from "react";
import { Box, Button } from "@mui/material";
import AddSongInput from "./AddSongInput";
import AddSongTopHits from "./AddSongTopHits";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import { useState } from "react";


const AddSongModal = (props) => {
    const [songInfo, setSongInfo] = useState("");

  return (
    <Box
      sx={{
        height: "80%",
        bgcolor: "#464669",
        width: "100%",
        marginTop: "auto",
        borderTopRightRadius: "27px",
        borderTopLeftRadius: "27px",
      }}
    >
      <Box
        onClick={() => {
          props.closeModal();
        }}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <DragHandleIcon />
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <AddSongInput />
      </Box>
      <AddSongTopHits />
    </Box>
  );
};

export default AddSongModal;
