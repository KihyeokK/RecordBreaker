//import group model
const { getTodayPosts } = require("./post.controller");
const Group = require("../models/Group");


// add user to group

exports.createGroup = async (req, res) => {
    try{
        const { groupID, name, numMembers, members, isPublic, messages} = req.body;
        const newGroup = new Group({ 
            groupID, 
            name, 
            numMembers, 
            members, 
            isPublic,
            messages
        });
        // Save the group to the database
        await newGroup.save();
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
        const groupId = req.params.id;
    
        // Retrieve a specific group by ID
        const group = await group.findOne({ groupId });
    
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
        const { groupID, name, numMembers, members, isPublic, messages} = req.body;
    
        // Retrieve a specific group by ID
        const group = await group.findById(groupId);
    
        if (!group) {
          return res.status(404).json({ error: "Group not found" });
        }
    
        // Update the group
        group.groupID = groupID|| group.groupID;
        group.name = name || group.name;
        group.numMembers = numMembers || group.numMembers;
        group.members = members || group.members;
        group.isPublic = isPublic || group.isPublic;
        group.messages = messages || group.messages;
    
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

exports.getGroupPosts = async (req, res) => {
    try {
        const groupId = req.params.groupId;
        
        // get list of people in the group
        const members = await group.findById(groupId).select("members");
        const memberIds = members.map((member) => member.userName);
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