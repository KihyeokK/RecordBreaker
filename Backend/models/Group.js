const mongoose = require('mongoose');
const { Schema } = mongoose;

const groupSchema = new Schema({
    groupID: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true
    },
    numMembers: {
        type: Number,
        required: true
    },
    members: {
        type: Array,
        required: true
    },
    isPublic: {
        type: Boolean,
        required: true
    },
    messages: {
        type: Array,
        required: true
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now,
    }
});

module.exports = mongoose.model("Group", groupSchema);