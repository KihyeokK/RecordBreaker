const Song = require('../models/Song');

exports.createSong = async (req, res) => {
    try {
        console.log("create song is called");
        let { songID, name, artist, albumCover } = req.body;
        artist = artist[0];
        const oldSong = await Song.findOne({ songID });
        console.log("old song is ", oldSong);
        
        if (oldSong) {
            return;
            // return res.status(400).json({
            //     where: "createSong",
            //     message: "song already exists",
            // });
        }
        // access the first elemenf of artist list

        const song = new Song({
            songID,
            name,
            artist,
            albumCover
        });
        console.log(song);
        await song.save();
        console.log("song saved");
        return;
        // return res.status(200).json({
        //     where: "createSong",
        //     message: "song created successfully",
        // });
    }
    catch (err) {
        console.log("HELLO",err);
        return res.status(500).send({
            message: err.message
        });
    }
}

exports.findAll = (req, res) => {
    Song.find()
        .then(songs => {
            res.send(songs);
        }).catch(err => {
            res.status(500).send({
                message: err.message
            });
        });
}

