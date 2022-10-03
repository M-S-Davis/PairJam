const Song = require("../models/Song");

module.exports = {
  getSongs: async (req, res) => {
    try {
      const songs = await Song.find({
        createdByGoogleId: req.user.googleId,
      }).sort({ createdAt: "desc" });
      res.render("songs.ejs", { title: "Songs", songs: songs, user: req.user });
    } catch (err) {
      console.error(err);
    }
  },
  addSong: async (req, res) => {
    try {
      await Song.create({
        createdByGoogleId: req.user.googleId,
        artistName: req.body.artistName,
        songName: req.body.songName,
        image:
          req.body.image ||
          "https://image.shutterstock.com/image-vector/vinil-record-glitter-yellow-color-600w-1386485138.jpg",
        videoLink: req.body.videoLink,
        note: req.body.note,
      });
      res.redirect("/songs");
    } catch (err) {
      console.error(err);
    }
  },
  editSong: async (req, res) => {
    const selectedSong = await Song.findOne({ _id: req.params.id });
    try {
      res.render("editsong.ejs", {
        title: "Edit Song",
        song: selectedSong,
        user: req.user,
      });
    } catch (err) {
      console.error(err);
    }
  },
  putSong: async (req, res) => {
    try {
      // todo: validate input
      await Song.findOneAndUpdate(
        { _id: req.params.id },
        {
          artistName: req.body.artistName,
          songName: req.body.songName,
          image: req.body.image,
          videoLink: req.body.videoLink,
          note: req.body.note,
        }
      );
      console.log(`Song ${req.body.songName} was updated.`);
      res.redirect("/songs");
    } catch (err) {
      console.error(err);
    }
  },
  deleteSong: async (req, res) => {
    try {
      await Song.remove({ _id: req.params.id });
      console.log("Deleted song.");
      res.redirect("/songs");
    } catch (err) {
      console.error(err);
      res.redirect("/songs");
    }
  },
};
