const express = require("express");
const router = express.Router();
const { ensureAuth, ensureGuest } = require("../middleware/auth");
const dashboardController = require("../controllers/dashboard");

//  @desc   Display the dashboard
//  @route  GET /dashboard/
router.get("/", ensureAuth, dashboardController.getDashboard);

//  @desc   Display the friends page
//  @route  GET /dashboard/friends
router.get("/friends", ensureAuth, dashboardController.getFriends);

module.exports = router;
