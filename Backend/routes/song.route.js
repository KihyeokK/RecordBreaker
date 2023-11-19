const express = require("express");
const songController = require("../controllers/song.controller");

const postRouter = express.Router();

// Remember that all api routes start with /api then specific routes like /posts/:id

// get song
postRouter.get("/song/:id", songController.getSong);

module.exports = postRouter;