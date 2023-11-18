import React from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Login from "./Components/Login/LoginComponent";

const RouterComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/feed" element={<></>} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterComponent;
