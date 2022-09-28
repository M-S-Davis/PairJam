const express = require("express");
const router = express.Router();
const bandsController = require("../controllers/bands");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//  @desc   Display the band page for a user
//  @route  GET /bands
router.get("/", ensureAuth, bandsController.getBands);

//  @desc   Create a band process for the database
//  @route  POST /bands/addBand
router.post("/addBand", ensureAuth, bandsController.addBand);

module.exports = router;
