const cors = require('cors');
const express = require("express");

const mongoose = require("mongoose");
require("dotenv").config();
const csrf = require("csurf");

// Store sesion
const session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);

// import routes here

// MongoDB connection
const MONGODB_URI = process.env.MONGODB_URI;
const PORT = process.env.PORT || 8080;

const app = express();
app.use(express.json());
app.use(cors());

const sessionStore = new MongoDBStore({
  uri: MONGODB_URI,
  collections: "sessions",
});
const csrfProtection = csrf(); // middlware for csrf protection

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: sessionStore,
  })
);
app.use(csrfProtection);

app.use((req, res, next) => {
  if (!req.session.user) {
    // if user is not logged in
    console.log("The user is not present in the session.");
    next();
  } else {
    console.log("getting user");
    // if user is logged in, get user info from database
    // user is fetched in every request while the session is not destroyed(while user is logged in)
    User.findById(req.session.user._id)
      .then((user) => {
        // all good if user is found in session
        next();
      })
      .catch((error) => res.status(500).json({ message: "user not found in session" }));
  }
});

app.get('/', (req, res) => {
    res.send("Hello World");
})

// import routes here
const userRoutes = require("./routes/user.route");

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