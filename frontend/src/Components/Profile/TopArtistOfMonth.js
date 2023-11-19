import React from "react";
import { Box } from '@mui/material';
import ProfileUser from './ProfileUser';
import cover from '../../images/Coldplay.png';

const TopArtistOfMonth = () => {
    return (
        <Box sx={{display: "flex", alignItems: "center", justifyContent: "center", width: "325px", height: "74px", bgcolor: "#464669", mt: 2, borderRadius: "8px"}}>
            <Box component="img"
              sx={{
                height: 57,
                width: 59,
                borderRadius: "50%",
                mr: 2
              }}
              alt="Top Artist"
              src={cover}></Box> 
            <Box sx={{ml: 2, display: "flex", alignItems: "center", flexDirection: "column"}}>
                <Box sx={{fontSize: "13px"}}>Favourite Artist Of The Month</Box>
                <Box sx={{fontSize: "12px"}}>Coldplay</Box>
            </Box>
        </Box>
    )
}

export default TopArtistOfMonth;