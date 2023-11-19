import React from "react";
import { Box, Modal } from "@mui/material";
import NavBarContainer from "../NavBar/NavBarContainer";
import FeedHeader from "./FeedHeader";
import NewPost from "../Post/NewPost";
import PostsContainer from "./PostsContainer";
import { useState } from "react";
import AddSongModal from "./AddSongModal"

const FeedComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const modalCloseHandler = () => {
    setIsModalOpen(false);
    console.log("modal closed");
  };

  const modalOpenHandler = () => {
    setIsModalOpen(true);
    console.log("modal opened");
  };


  return (
    <Box>
      <FeedHeader isBackButtonNeeded={false}></FeedHeader>
      <NavBarContainer isFeed={true} />
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <NewPost openModal={modalOpenHandler} />
      </Box>
      <PostsContainer />
      {isModalOpen && (
          <Modal
            open={isModalOpen}
            onClose={modalCloseHandler}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            sx={{
              bgcolor: "transparent",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <AddSongModal closeModal={modalCloseHandler}></AddSongModal>
          </Modal>
        )}
    </Box>
  );
};

export default FeedComponent;
