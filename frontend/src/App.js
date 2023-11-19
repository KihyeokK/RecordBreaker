// import logo from './logo.svg';
// import './App.css';
import { useEffect } from "react";
import RouterComponent from "./RouterComponent";
import { Box } from "@mui/material";
import { UserContext } from "./Contexts/UserContext";
import { useContext } from "react";

const getUserId = () => {
  const userId = sessionStorage.getItem("userId");
  // deny access to other pages if not logged in
  if (!userId && window.location.pathname !== "/") {
    window.location.href = "/";
    return null;
  } else {
    return userId;
  }
}

function App() {
  const userContext = useContext(UserContext);
  const user = userContext?.user; // userId or null
  // useEffect(() => {
  //   if (user && window.location.pathname === "/login") {
  //     window.location.href = "/login"; // If user is logged in, redirect to "/feed"
  //   }
  // }, []);

  return (
    <Box className="app">
    <Box
      sx={{}}
    >
      <RouterComponent />
    </Box>
  </Box>
  );
}

export default App;
