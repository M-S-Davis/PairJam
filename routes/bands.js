const express = require("express");
const router = express.Router();
const bandsController = require("../controllers/bands");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//  @desc   Display the bands page for a user
//  @route  GET /bands
router.get("/", ensureAuth, bandsController.getBands);

//  @desc   Display single band
//  @route  GET /bands/:id
router.get("/:id", ensureAuth, bandsController.getBandInfo);

//  @desc   Create a band process for the database
//  @route  POST /bands/addBand
router.post("/addBand", ensureAuth, bandsController.addBand);

module.exports = router;
