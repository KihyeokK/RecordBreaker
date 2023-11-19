import React from "react";
import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { login } from "../../services";
import { UserContext } from "../../Contexts/UserContext";
import { useContext } from "react";

const NextButton = (props) => {
    const userContext = useContext(UserContext);

    const handleLogin = async () => {
        try {
            const response = await login({ userName: props.userName, password: props.password });
            console.log(response);
            if (response.user) {
                console.log()
              sessionStorage.setItem("userId", response.user.userName);
              userContext.setUser(response.user);
              window.location.href = "/feed"; // redirect to feed once logged in
            } else {
              alert("Incorrect username or password. Please try again.");
              window.location.href = "/";
            }
          } catch (error) {
            console.log(error);
            alert("Incorrect username or password. Please try again.");
            window.location.href = "/";
          }
    }
  return (
    <Box sx={{display: "flex", justifyContent: "center", mt: "400px"}}>
      <Button
        sx={{
          width: "325px",
          height: "56px",
          boxShadow: "0px 2px 7px rgba(0, 0, 0, 0.15)",
          borderRadius: "15px",
          opacity: 1,
          bgcolor: "#B2C0E4",
          color: "#191919",
          fontSize: 15,
        }}
        onClick={() => {
            handleLogin()
        }}
      >
        <Link
          to="/feed"
          style={{ color: "inherit", textDecoration: "inherit" }}
        >
          Login
        </Link>
      </Button>
    </Box>
  );
};

export default NextButton;
