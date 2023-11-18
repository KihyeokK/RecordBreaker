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
    numGoldenDiscs: {
        type: Number,
        required: true
    },
    numFriends: {
        type: Number,
        required: true
    },
    friends: {
        type: Array,
        required: true
    },
    friendRequests: {
        type: Array,
        required: true
    },
    groups: {
        type: Array,
        required: true
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now,
    }
});

module.exports = mongoose.model("User", userSchema);