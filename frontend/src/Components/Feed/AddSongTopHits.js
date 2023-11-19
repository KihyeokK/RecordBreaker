import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import album1 from "../../images/album1.png";
import album2 from "../../images/album2.png";
import album3 from "../../images/album3.png";
import album4 from "../../images/album4.png";
import album5 from "../../images/album5.png";
import album6 from "../../images/album6.png";

const AddSongTopHits = () => {
  return (
    <Box sx={{ ml: 3, mr: 3, mt: 3 }}>
      <Box sx={{ fontSize: "15px", mb: 2, ml: 2 }}>Top Hits</Box>
      <Grid container rowSpacing={2} columnSpacing={2}>
        <Grid item xs={6}>
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
                height: 124,
                width: 124,
                mb: 1,
              }}
              alt="Top hit"
              src={album1}
            ></Box>
            <Box sx={{ fontSize: "10px", color: "#FFF" }}>
              My Love Mine All Mine
            </Box>
            <Box sx={{ fontSize: "8px", color: "#898989" }}>Mitski</Box>
          </Box>
        </Grid>
        <Grid item xs={6}>
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
                height: 124,
                width: 124,
                mb: 1,
              }}
              alt="Top hit"
              src={album2}
            ></Box>
            <Box sx={{ fontSize: "10px", color: "#FFF" }}>
              Paris In The Rain
            </Box>
            <Box sx={{ fontSize: "8px", color: "#898989" }}>Lauv</Box>
          </Box>
        </Grid>
        <Grid item xs={6}>
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
                height: 124,
                width: 124,
                mb: 1,
              }}
              alt="Top hit"
              src={album3}
            ></Box>
            <Box sx={{ fontSize: "10px", color: "#FFF" }}>PassionFruit</Box>
            <Box sx={{ fontSize: "8px", color: "#898989" }}>Drake</Box>
          </Box>
        </Grid>
        <Grid item xs={6}>
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
                height: 124,
                width: 124,
                mb: 1,
              }}
              alt="Top hit"
              src={album4}
            ></Box>
            <Box sx={{ fontSize: "10px", color: "#FFF" }}>Pink + White</Box>
            <Box sx={{ fontSize: "8px", color: "#898989" }}>Frank Ocean</Box>
          </Box>
        </Grid>
      </Grid>


      <Box sx={{ fontSize: "15px", mt: 2, mb: 2, ml: 2 }}>Local Artists</Box>
      <Grid container rowSpacing={2} columnSpacing={2}>
        <Grid item xs={6}>
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
                height: 124,
                width: 124,
                mb: 1,
              }}
              alt="Top hit"
              src={album5}
            ></Box>
            <Box sx={{ fontSize: "10px", color: "#FFF" }}>Turn Red</Box>
            <Box sx={{ fontSize: "8px", color: "#898989" }}>Mali Velasquez</Box>
          </Box>
        </Grid>
        <Grid item xs={6}>
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
                height: 124,
                width: 124,
                mb: 1,
              }}
              alt="Top hit"
              src={album6}
            ></Box>
            <Box sx={{ fontSize: "10px", color: "#FFF" }}>Falco</Box>
            <Box sx={{ fontSize: "8px", color: "#898989" }}>Pink Pablo</Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AddSongTopHits;
