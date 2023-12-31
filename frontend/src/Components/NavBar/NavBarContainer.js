import React from "react";
import { Box, Typography, Divider} from "@mui/material";
import { Link } from "react-router-dom";

const NavBarContainer = (props) => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      {props.isFeed ? <Link to="/feed" style={{ color: "white", textDecoration: "inherit", fontFamily: "Inter", marginRight: "15px", marginLeft: "18px"}}>Feed</Link> 
      : <Link to="/feed" style={{ color: "#898989", textDecoration: "inherit", fontFamily: "Inter", marginRight: "15px", marginLeft: "18px"}}>Feed</Link>}
      {props.isFeed ? <Link to="/groups" style={{ color: "#898989", textDecoration: "inherit", fontFamily: "Inter", marginLeft: "15px" }}>Groups</Link> 
      : <Link to="/groups" style={{ color: "white", textDecoration: "inherit", fontFamily: "Inter", marginLeft: "15px" }}>Groups</Link>}
    </Box>
  );
};

export default NavBarContainer;