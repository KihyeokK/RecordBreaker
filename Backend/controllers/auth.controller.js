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
    } catch (err) {
        res.status(500).json({ error: err });
    }
}   
