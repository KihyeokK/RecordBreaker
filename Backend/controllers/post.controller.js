//import post model
const Post = require("../models/Post");

exports.createPost = async (req, res) => {
    try{
        const { userName, song, numDiscs, numGoldenDiscs, comments } = req.body;
        const newPost = new Post({ 
            userName, 
            song, 
            numDiscs, 
            numGoldenDiscs, 
            comments 
        });
        // Save the post to the database
        await newPost.save();
        return res.status(200).json({
            where: "createPost",
            message: "Post created successfully",
        });
    } catch (error) {
        return res.status(500).json({ error: "Internal Server Error" });
    }
}
// handle getposts
exports.getPosts = async (req, res) => {
    try {
        // Retrieve all posts
        const posts = await Post.find();
    
        return res.status(200).json({
          where: "getPosts",
          posts: posts,
        });
    } catch (error) {
        return res.status(500).json({ error: "Internal Server Error" });
    }
}

exports.getPost = async (req, res) => {
    try {
        const postId = req.params.postId;
    
        // Retrieve a specific post by ID
        const post = await Post.findById(postId);
    
        if (!post) {
          return res.status(404).json({ error: "Post not found" });
        }
    
        return res.status(200).json({
          where: "getPost",
          post: post,
        });
    } catch (error) {
        return res.status(500).json({ error: "Internal Server Error" });
    }
}