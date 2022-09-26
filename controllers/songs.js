const Song = require("../models/Song");

module.exports = {
  getSongs: async (req, res) => {
    console.log("We made it to the song page controller");
    try {
      const songs = await Song.find().sort({ createdAt: "desc" });
      res.render("songs.ejs", { title: "Songs", songs: songs });
    } catch (err) {
      console.error(err);
    }
  },
  addSong: async (req, res) => {
    try {
      await Song.create({
        googleId: req.user.id,
        artistName: req.body.artistName,
        songName: req.body.songName,
        image: req.body.image,
        videoLink: req.body.videoLink,
        note: req.body.note,
      });
      res.redirect("/songs");
    } catch (err) {
      console.error(err);
    }
  },
};
