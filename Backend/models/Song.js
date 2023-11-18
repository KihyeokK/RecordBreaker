const mongoose = require("mongoose");
const { Schema } = mongoose;

const songSchema = new Schema({
    songID: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true
    },
    artist: {
        type: String,
        required: true
    },
    albumCover: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Song", songSchema);