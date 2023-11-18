const express = require("express");
const groupController = require("../controllers/group.controller");
const groupRouter = express.Router();

// Remember that all api routes start with /api then specific routes like /users/:id

// get all users
groupRouter.get("/api/groups", groupController.getGroups);
// get a specific user from database.
groupRouter.get("/api/users/:id", groupController.getGroupById);
// create a user
groupRouter.post("/api/users", groupController.createUser);
// get posts in group
groupRouter.get("/api/users/:id/groups/:id/posts", groupController.getPosts);
// // update a user
// userRouter.put("/users/:id", userController.updateUser);
// // delete a user
// userRouter.delete("/users/:id", userController.deleteUser);

module.exports = groupRouter;
