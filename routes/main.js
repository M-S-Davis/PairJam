const express = require("express");
const router = express.Router();
const mainController = require("../controllers/main");

//  @desc   Display landing page
//  @route  GET /
router.get("/", mainController.getLanding);

//  @desc   Display about page
//  @route  GET /about
router.get("/about", mainController.getAbout);

module.exports = router;
