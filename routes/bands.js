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

//  @desc   Update single band info
//  @route  GET /bands/editBand/:id
router.get("/editBand/:id", ensureAuth, bandsController.getEditBand);

//  @desc   Validate and update data with the database
//  @route  PUT /bands/sendEdit/:id/
router.put("/sendEdit/:id", ensureAuth, bandsController.putBand);

//  @desc   Create a band process for the database
//  @route  POST /bands/addBand
router.post("/addBand", ensureAuth, bandsController.addBand);

//  @desc   Delete a single band
//  @route  DELETE /bands/deleteBand/:id
router.delete("/deleteBand/:id", ensureAuth, bandsController.deleteBand);

module.exports = router;
