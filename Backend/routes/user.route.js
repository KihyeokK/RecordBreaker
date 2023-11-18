const express = require("express");
const userController = require("../controllers/user.controller");

const userRouter = express.Router();

// Remember that all api routes start with /api then specific routes like /users/:id

// get all users?
userRouter.get("/users", userController.createUser);

// get a specific user from database.
userRouter.get("/users/:id", userController.getUser);

module.exports = userRouter;
