const express = require("express");
const userController = require("../controllers/user.controller");

const userRouter = express.Router();

// Remember that all api routes start with /api then specific routes like /users/:id

// get a specific user from database.
userRouter.get("/api/users/:id", userController.getUser);
// create a user
userRouter.post("/api/users", userController.createUser);
// get all groups
userRouter.get("/api/users/groups", userController.getGroups);
// get all friends
userRouter.get("/api/users/friends", userController.getFriends);

// // update a user
// userRouter.put("/users/:id", userController.updateUser);
// // delete a user
// userRouter.delete("/users/:id", userController.deleteUser);

module.exports = userRouter;
