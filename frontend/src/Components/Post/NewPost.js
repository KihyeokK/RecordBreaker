import React from "react";
import { Box, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const NewPost = (props) => {
    return (
        <Box onClick={() => {props.openModal()}} sx={{mt: 3, ml: 3, mr: 3, display: "flex", justifyContent: "center", alignItems: "center", width: "307px", height: "158px", borderColor: "white", border: "dashed", borderRadius: 8}}>
            <Typography sx={{fontSize: 15, color: "#B1BEE0", width: "150px"}}>What's playing on your playlist today?</Typography>
            <AddIcon color="white" />
        </Box>
    )
}

export default NewPost;