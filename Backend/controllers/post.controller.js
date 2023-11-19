//import post model
const Post = require("../models/Post");
const User = require("../models/User");
// import song controller
const { createSong } = require("./song.controller");
const SpotifyWebApi = require('spotify-web-api-node');



// Function to refresh the Spotify access token
async function refreshAccessToken(spotifyApi) {
    try {
        const data = await spotifyApi.clientCredentialsGrant();
        const newAccessToken = data.body['access_token'];
        const expiresIn = data.body['expires_in'];

        // Set the new access token
        spotifyApi.setAccessToken(newAccessToken);

        console.log(`Refreshed access token. New token: ${newAccessToken}`);
        console.log(`Token expires in ${expiresIn} seconds`);
    } catch (error) {
        console.error('Error refreshing access token:', error);
    }
}

exports.createPost = async (req, res) => {
    try{
        const { userName, song, numDiscs, numGoldenDiscs, comments } = req.body;
        // Check if the user exists
        const user = await User.findOne({ userName: userName });
        if (!user) {
            return res.status(400).json({ error: "User not found" });
        }
        const today = new Date();
        // Check if the user has already posted today
        const todayPost = await Post.findOne({
            userName: userName,
            createdAt: {
                $gte: today.setHours(0, 0, 0),
                $lt: today.setHours(23, 59, 59),
            },
        });

        if (todayPost) {
            return res.status(400).json({ error: "User has already posted today" });
        }
        
        //using song and spotify api to get songID, name, artist, albumCover
        //Use Spotify API to get song details
        const spotifyApi = new SpotifyWebApi({
            clientId: process.env.SPOTIFY_CLIENT_ID,
            clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
            redirectUri: process.env.SPOTIFY_REDIRECT_URI
        });
        // Get an access token

        

        // Use the song information to search for the track on Spotify
        let searchResults;
        let firstResult;
        try {
            searchResults = await spotifyApi.searchTracks(song);
            firstResult = searchResults.body.tracks.items[0];
        } catch (error) {
            if (error.response && error.response.status === 401) {
                // If the response status is 401 (Unauthorized), the access token may have expired.
                // Attempt to refresh the access token
                await refreshAccessToken(spotifyApi);
                // Retry the original request or handle it accordingly.
                searchResults = await spotifyApi.searchTracks(song);
                firstResult = searchResults.body.tracks.items[0];
            } else {
                console.error('Error making Spotify API request:', error.message);
                return res.status(500).json({ error: "Internal Server Error" });
            }
        }

        // Now you can use details from firstResult, e.g., firstResult.name, firstResult.artists, etc.
        console.log('Song details:', {
            name: firstResult.name,
            artists: firstResult.artists.map(artist => artist.name),
            album: firstResult.album.name,
            albumCover: firstResult.album.images[0].url,
            // Add other details as needed
        });
        // Save the retrieved song details to the database or use them as needed
        const songID = firstResult.id;
        const name = firstResult.name;
        const artist = firstResult.artists.map(artist => artist.name);
        const albumCover = firstResult.album.images[0].url;
        // Create a new song instance
        const params = {
            songID: songID,
            name: name,
            artist: artist,
            albumCover: albumCover,
        };
        createSong({ body: params }, res);

        const newPost = new Post({ 
            userName,
            songID,
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
        console.log(error);
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

exports.getTodayPosts = async (req, res) => {
    try {
        const users = req.users;
        const today = new Date();
        const todayPosts = await Post.find({
            userName: { $in: users },
            createdAt: {
                $gte: today.setHours(0, 0, 0),
                $lt: today.setHours(23, 59, 59),
            },
        });
    
        return res.status(200).json({
          where: "getTodayPosts",
          posts: todayPosts,
        });
    } catch (error) {
        return res.status(500).json({ error: "Internal Server Error" });
    }
}