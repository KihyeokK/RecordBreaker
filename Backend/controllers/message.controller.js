const Message = require('../models/Message');

// Create a new message
exports.createMessage = async (req, res) => {
  try {
    const { messageID, userName, content } = req.body;

    // Create a new message instance
    const newMessage = new Message({
      messageID,
      userName,
      content,
    });

    // Save the new message to the database
    const savedMessage = await newMessage.save();

    res.status(201).json(savedMessage);
  } catch (error) {
    console.error('Error creating message:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Get all messages
exports.getAllMessages = async (req, res) => {
  try {
    // Retrieve all messages from the database
    const members = req.users;
    const userNames = members.map(member => member.userName);

    const messages = await Message.find({ userName: { $in: userNames } });

    res.status(200).json(messages);
  } catch (error) {
    console.error('Error fetching messages:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

