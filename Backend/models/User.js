const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
    userName: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        minLength: 6,
        maxLength: 20,
        required: true,
    },
    profilePic: {
        type: String,
        required: false,
    },
    name: {
        type: String,
        required: true
    },
    
    favoriteArtist: {
        type: String,
        required: false
    },
    numDiscs: {
        type: Number,
        required: true,
        default: 0
    },
    numGoldenDiscs: {
        type: Number,
        required: true,
        default: 0
    },
    numFriends: {
        type: Number,
        required: true,
        default: 0
    },
    friends: {
        type: Array,
        required: true,
        default: []
    },
    friendRequests: {
        type: Array,
        required: true,
        default: []
    },
    groups: {
        type: Array,
        required: true,
        default: []
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now,
    }
});

module.exports = mongoose.model("User", userSchema);