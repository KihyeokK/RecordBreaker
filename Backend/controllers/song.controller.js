const Song = require('../models/Song');

exports.createSong = (req, res) => {
    try {
        const { songID, name, artist, albumCover } = req.body;

        const oldSong = Song.findOne({ songID });
        
        if (oldSong) {
            return;
            // return res.status(400).json({
            //     where: "createSong",
            //     message: "song already exists",
            // });
        }

        const song = new Song({
            songID,
            name,
            artist,
            albumCover
        });
        song.save();
        console.log("song saved");
        return;
        // return res.status(200).json({
        //     where: "createSong",
        //     message: "song created successfully",
        // });
    }
    catch (err) {
        res.status(500).send({
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

