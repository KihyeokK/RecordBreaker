import React from "react";
import { Box, Input } from '@mui/material';

const AddSongInput = () => {
    return (
        <Input placeholder="  Search Music and Artist" sx={{mt: 1, width: "70%", height: "50%", input: { color: "white", background: "#2E2E4C", borderRadius: 2,  }}} />
    )
}

export default AddSongInput;