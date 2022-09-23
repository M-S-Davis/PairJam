const express = require("express");
const router = express.Router();
const mainController = require("../controllers/main");
const authController = require("../controllers/auth");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//  @desc   Display landing page
//  @route  GET /
router.get("/", ensureGuest, mainController.getLanding);

//  @desc   Display login page
//  @route  GET /login
router.get("/login", authController.getLogin);

//  @desc   Logout user from session
//  @route  GET /logout
router.get("/logout", authController.logout);

//  @desc   Test route
//  @route  GET /test
router.get("/test", mainController.getTest);

module.exports = router;
