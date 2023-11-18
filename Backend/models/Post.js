const mongoose = require("mongoose");
const { Schema } = mongoose;

const postSchema = new Schema({
    userName: {
        type: String,
        required: true,
    },
    song: {
        type: String,
        required: true
    },
    numDiscs: {
        type: Number,
        required: true
    },
    numGoldenDiscs: {
        type: Number,
        required: true
    },
    comments: {
        type: Array,
        required: true
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now,
    }
});

module.exports = mongoose.model("Post", postSchema);