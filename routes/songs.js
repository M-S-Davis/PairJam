const express = require("express");
const router = express.Router();
const songsController = require("../controllers/songs");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//  @desc   Display the songs page
//  @route  GET /dashboard/songs
router.get("/", ensureAuth, songsController.getSongs);

//  @desc   Display the edit song page and fill inputs with selecetd song
//  @route  GET /songs/editSong/:id
router.get("/editSong/:id", ensureAuth, songsController.editSong);

//  @desc   Process add song form
//  @route  POST /songs/addSong
router.post("/addSong", ensureAuth, songsController.addSong);

//  @desc   Validate and update data with the database
//  @route  PUT /songs/editSong/:id/
router.put("/sendEdit/:id", ensureAuth, songsController.putSong);

//  @desc   Delete a chosen song
//  @route  DELETE /songs/deleteSong/:id
router.delete("/deleteSong/:id", songsController.deleteSong);

module.exports = router;
