import React, { useState } from "react";
import { Box, Input, Button } from "@mui/material";
import { createPost } from "../../services";
import { UserContext } from "../../Contexts/UserContext";
import { useContext } from "react";
import { useData } from "../../Contexts/PostedContext";

const AddSongInput = () => {
  const [postText, setPostText] = useState("");
//   const { posted, setPosted } = useData();

  const handleCreatePost = () => {
    if (postText.trim() !== "") {
      // Call createPost function with the postText
      const userName = sessionStorage.getItem("userId");
      createPost({userName: userName ,song: postText});
      // Clear the input after creating the post
      setPostText("");
    //   setPosted(!posted);
    }
  };

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center", // Align items vertically
      }}
    >
      <Input
        placeholder="  Share your thoughts..."
        sx={{
          mt: 1,
          width: "70%",
          height: "50%",
          input: {
            color: "white",
            background: "#2E2E4C",
            borderRadius: 2,
          },
        }}
        value={postText}
        onChange={(e) => setPostText(e.target.value)}
      />
      <Button variant="contained" onClick={handleCreatePost} sx={{ ml: 1 }}>
        Post
      </Button>
    </Box>
  );
};

export default AddSongInput;
