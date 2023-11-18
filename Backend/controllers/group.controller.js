//import group model
const User = require("../models/Group");


// add user to group

exports.createGroup = async (req, res) => {
    try{
        const { userName, song, numDiscs, numGoldenDiscs, comments } = req.body;
        const newgroup = new Group({ 
            userName, 
            song, 
            numDiscs, 
            numGoldenDiscs, 
            comments 
        });
        // Save the group to the database
        await newgroup.save();
        return res.status(200).json({
            where: "createGroup",
            message: "Group created successfully",
        });
    } catch (error) {
        return res.status(500).json({ error: "Internal Server Error" });
    }
}

exports.getGroup = async (req, res) => {
    try {
        const groupId = req.params.groupId;
    
        // Retrieve a specific group by ID
        const group = await group.findById(groupId);
    
        if (!group) {
          return res.status(404).json({ error: "Group not found" });
        }
    
        return res.status(200).json({
          where: "getGroup",
          group: group,
        });
    } catch (error) {
        return res.status(500).json({ error: "Internal Server Error" });
    }
}

exports.updateGroup = async (req, res) => {
    try {
        const groupId = req.params.groupId;
        const { userName, song, numDiscs, numGoldenDiscs, comments } = req.body;
    
        // Retrieve a specific group by ID
        const group = await group.findById(groupId);
    
        if (!group) {
          return res.status(404).json({ error: "Group not found" });
        }
    
        // Update the group
        group.userName = userName|| group.userName;
        group.song = song || group.song;
        group.numDiscs = numDiscs || group.numDiscs;
        group.numGoldenDiscs = numGoldenDiscs || group.numGoldenDiscs;
        group.comments = comments || group.comments;
    
        // Save the updated group to the database
        await group.save();
    
        return res.status(200).json({
          where: "updateGroup",
          message: "Group updated successfully",
        });
    } catch (error) {
        return res.status(500).json({ error: "Internal Server Error" });
    }
}