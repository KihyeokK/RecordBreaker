import React from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Login from "./Components/Login/LoginComponent";
import FeedComponent from "./Components/Feed/FeedComponent";
import GroupComponent from "./Components/Group/GroupComponent"

const RouterComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/feed" element={<FeedComponent />} />
        <Route path="/groups" element={<GroupComponent />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterComponent;
