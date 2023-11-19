import React from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Login from "./Components/Login/LoginComponent";
import FeedComponent from "./Components/Feed/FeedComponent"

const RouterComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/feed" element={<FeedComponent />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterComponent;
