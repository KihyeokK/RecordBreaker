// import User model
const User = require("../models/User");

exports.register = async (req, res) => {  
    try {
        const {
            userName,
            password,
            profilePic,
            name,
            favoriteArtist,
            numGoldenDiscs,
            numFriends,
            friends,
            friendRequests,
            createdAt
        } = req.body;
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password, salt);
        const newUser = new User({
            userName,
            password: hashedPassword,
            profilePic,
            name,
            favoriteArtist,
            numGoldenDiscs: 0,
            numFriends: 0,
            friends: [],
            friendRequests: [],
            createdAt
        })

        const createdUser = await newUser.save();
        res.status(201).json(createdUser);
    } catch (error) {
        console.log("user registration failed");
        res.status(500).json({ error: error });
    }
}   

exports.login = async (req, res) => {
    try {
        const { userName, password } = req.body;
        const foundUser = await User.findOne({ userName: userName });
        if (!foundUser) return res.status(400).json({ message: "This user does not exist." });
    
        const isPWDValid = await bcrypt.compare(password, user.password);
        if (!isPWDValid) return res.status(400).json({ message: "Invalid username or password." });
 
        res.status(200).json(foundUser);
      } catch (error) {
        console.log("login failed");
        res.status(500).json({ error: error });
      }
}

exports.logout = (req, res, next) => {
    req.session.destroy((err) => {
      console.log(err);
      res.status(500).json({ message: "Logout failed."});
    });
    res.status(200).json({ message: "Successfully Logged out!"});
  };