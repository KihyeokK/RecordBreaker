//import User model
const User = require("../models/User");

exports.createUser = async (req, res) => {
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
            groups,
            createdAt
        } = req.body;
        // Check if the username already exists in the database
        const existingUser = await User.findOne({ userName });

        if (existingUser) {
            return res.status(400).json({ error: "Username already exists" });
        }

        // Log the values of each field
        console.log('userName:', userName);
        console.log('password:', password);
        console.log('profilePic:', profilePic);
        console.log('name:', name);
        console.log('favoriteArtist:', favoriteArtist);
        console.log('numGoldenDiscs:', numGoldenDiscs);
        console.log('numFriends:', numFriends);
        console.log('friends:', friends);
        console.log('friendRequests:', friendRequests);
        console.log('groups:', groups);
        console.log('createdAt:', createdAt);

        const newUser = new User({ 
            userName, 
            password, 
            profilePic, 
            name, 
            favoriteArtist, 
            numGoldenDiscs, 
            numFriends,  
            friends,
            friendRequests,
            groups,
            createdAt 
        });
        
        await newUser.save();
        return res.status(200).json({
            where: "createUser"
        });
    }
    catch (err) {
        // print err
        console.log(err);
        return res.status(500).json({ error: "Internal Server Error" });
    }
}

exports.getUser = async (req, res) => {
    try {
        const { userName } = req.body;
        const User = await User.find({ userName: userName });
        return res.status(200).json({
            where: "getUser",
            User: User
        });
    }
    catch (err) {
        return res.status(500).json({ error: "Internal Server Error" });
    }
}

exports.updateUser = async (req, res) => {
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
            groups,
            createdAt
        } = req.body;
        
        const User = await User.find({ userName: userName });
        User.password = password || User.password;
        User.profilePic = profilePic || User.profilePic;
        User.name = name || User.name;
        User.favoriteArtist = favoriteArtist || User.favoriteArtist;
        User.numGoldenDiscs = numGoldenDiscs || User.numGoldenDiscs;
        User.numFriends = numFriends || User.numFriends;
        User.friends = friends || User.friends;
        User.friendRequests = friendRequests || User.friendRequests;
        User.groups = groups || User.groups;
        User.createdAt = createdAt || User.createdAt;
    
        await User.save();
        return res.status(200).json({
            where: "updateUser"
        });
    }
    catch (err) {
        return res.status(500).json({ error: "Internal Server Error" });
    }
    
}

exports.getFriends = async (req, res) => {
    const { userName } = req.body;
    const friends = await User.find({ userName: userName }).friends;

    return res.status(200).json({
        where: "getFriends",
        friends: friends || []
    });
}

exports.getGroups = async (req, res) => {
    const { userName } = req.body;
    const groups = await User.find({ userName: userName }).groups;

    return res.status(200).json({
        where: "getGroups",
        groups: groups || []
    });
}

exports.getFriendPosts = async (req, res) => {
    try {
        const userName = req.params.userName;
        
        // get list of people in the group
        const friends = await User.find({ userName: userName }).friends;
        const memberIds = friends.map((friend) => friend.userName);
        req.users = memberIds;
        // get all posts from the group members
        const posts = await getTodayPosts(req, res);
        return res.status(200).json({
          where: "getGroupPosts",
          posts: posts,
        });
    }
    catch (error) {
        return res.status(500).json({ error: "Internal Server Error" });
    }
}

exports.requestFriend = async (req, res) => {
    try {
        const { userName, friendUserName } = req.body;
        const user = await User.find({ userName: userName });
        const friend = await User.find({ userName: friendUserName });
        // check if friend exists
        if (!friend) {
            return res.status(400).json({ error: "Friend does not exist" });
        }
        friend.friendRequests.push(user);
        await user.save();
        return res.status(200).json({
            where: "requestFriend"
        });
    }
    catch (err) {
        return res.status(500).json({ error: "Internal Server Error" });
    }
}
exports.acceptFriend = async (req, res) => {
    try {
        const { userName, friendUserName } = req.body;
        const user = await User.find({ userName: userName });
        const friend = await User.find({ userName: friendUserName });
        user.friends.push(friend);
        await user.save();
        return res.status(200).json({
            where: "acceptFriend"
        });
    }
    catch (err) {
        return res.status(500).json({ error: "Internal Server Error" });
    }
}