const express = require("express");
const router = express.Router();
const mainController = require("../controllers/main");
const authController = require("../controllers/auth");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//  @desc   Display landing page
//  @route  GET /
router.get("/", ensureGuest, mainController.getLanding);

//  @desc   Test route
//  @route  GET /test
router.get("/menu", mainController.getMenu);

//  @desc   Test route
//  @route  GET /test
router.get("/test", mainController.getTest);

module.exports = router;
