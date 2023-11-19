import React from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Login from "./Components/Login/LoginComponent";
import FeedComponent from "./Components/Feed/FeedComponent";
import AddFriendsComponent from "./Components/AddFriends/AddFriendsComponent";
import GroupComponent from "./Components/Group/GroupComponent";
import GroupDetailComponent from "./Components/GroupDetail/GroupDetailComponent";
import LoginComponent from "./Components/Login/LoginComponent";
import { UserProvider } from "./Contexts/UserContext";

const RouterComponent = () => {
  return (
    <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/feed" element={<FeedComponent />} />
          <Route path="/groups" element={<GroupComponent />} />
          <Route path="/groups/:groupId" element={<GroupDetailComponent />} />
          <Route path="/addFriends" element={<AddFriendsComponent />} />
          {/* <Route path="/profile" element={<UserProfileComponent />} /> */}
          <Route path="/login" element={<LoginComponent />} />
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
};

export default RouterComponent;
