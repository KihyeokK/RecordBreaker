const cors = require('cors');
const express = require("express");

const mongoose = require("mongoose");
require("dotenv").config();

// import routes here

// MongoDB connection
const MONGODB_URI = process.env.MONGODB_URI;
const PORT = process.env.PORT || 8080;

const app = express();
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send("Hello World");
})

// put your routes here
// every routes will be under /api
// example endpoint: /api/users/:id
app.use("/api", userRoutes);



mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log("connected");
    app.listen(PORT);
  })
  .catch((err) => {
    console.log(err);
  });