const express = require("express");
const postController = require("../controllers/post.controller");

const postRouter = express.Router();

// Remember that all api routes start with /api then specific routes like /posts/:id

// get all posts
postRouter.get("/posts", postController.getPosts);
// create a post
postRouter.post("/posts", postController.createPost);
// get a specific post from database.
postRouter.get("/posts/:id", postController.getPost);
module.exports = postRouter;
