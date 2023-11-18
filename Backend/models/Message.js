const mongoose = require('mongoose');
const { Schema } = mongoose;

const messageSchema = new Schema({
    messageID: {
        type: String,
        required: true,
    },
    userName: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now,
    }
});

module.exports = mongoose.model("Message", messageSchema);