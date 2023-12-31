const express = require("express");
const userController = require("../controllers/user.controller");
const authController = require("../controllers/auth.controller");

const userRouter = express.Router();

// Remember that all api routes start with /api then specific routes like /users/:id

// get a specific user from database.
userRouter.get("/users/:id", userController.getUser);
// create a user
userRouter.post("/users", userController.createUser);
// get all groups
userRouter.get("/users/:id/groups", userController.getGroups);
// get all friends
userRouter.get("/users/:id/friends", userController.getFriends);
// get all posts from friends
userRouter.get("/users/:id/friends/posts", userController.getFriendPosts);
// request a friend
userRouter.post("/users/:id/friends/request", userController.requestFriend);
// accept a friend request
userRouter.post("/users/:id/friends", userController.acceptFriend);

userRouter.post("/login", authController.login);

module.exports = userRouter;