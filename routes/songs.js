const express = require("express");
const router = express.Router();
const Song = require("../models/Song");
const songsController = require("../controllers/songs");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//  @desc   Process add song form
//  @route  POST /songs/addSong
router.post("/addSong", async (req, res) => {
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
    console.errror(err);
  }
});
