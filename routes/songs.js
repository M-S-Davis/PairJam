const express = require("express");
const router = express.Router();
// const Song = require("../models/Song");
const songsController = require("../controllers/songs");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//  @desc   Display the songs page
//  @route  GET /dashboard/songs
router.get("/", ensureAuth, songsController.getSongs);

//  @desc   Process add song form
//  @route  POST /songs/addSong
router.post("/addSong", songsController.addSong);

module.exports = router;
