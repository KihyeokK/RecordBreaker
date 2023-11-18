const express = require("express");
const postController = require("../controllers/post.controller");

const postRouter = express.Router();

// Remember that all api routes start with /api then specific routes like /posts/:id

// get all posts
postRouter.get("/api/posts", postController.getPosts);
// get a specific post from database.
postRouter.get("/api/posts/:id", postController.getPost);
// create a post
postRouter.post("/api/posts", postController.createPost);
// // update a post
// postRouter.put("/posts/:id", postController.updatePost);
// // delete a post
// postRouter.delete("/posts/:id", postController.deletePost);

module.exports = postRouter;
