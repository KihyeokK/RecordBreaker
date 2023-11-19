const express = require("express");
const groupController = require("../controllers/group.controller");
const groupRouter = express.Router();

// Remember that all api routes start with /api then specific routes like /users/:id

// create a group
groupRouter.post("/groups", groupController.createGroup);
// get a specific group from database.
groupRouter.get("/groups/:id", groupController.getGroup);
// update a specific group from database.
groupRouter.post("/groups/:id", groupController.updateGroup);
// delete a specific group from database.
// groupRouter.delete("/groups/:id", groupController.deleteGroup);
// get posts in group
groupRouter.get("/users/:id/groups/:id/posts", groupController.getGroupPosts);
module.exports = groupRouter;