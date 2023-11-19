const mongoose = require("mongoose");
const { Schema } = mongoose;

const postSchema = new Schema({
    userName: {
        type: String,
        required: true,
    },
    songID: {
        type: String,
        required: true
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
    comments: {
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

module.exports = mongoose.model("Post", postSchema);