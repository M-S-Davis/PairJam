const express = require("express");
const router = express.Router();
const dashboardController = require("../controllers/dashboard");

//  @desc   Display the dashboard
//  @route  GET /dashboard/
router.get("/", dashboardController.getDashboard);

//  @desc   Display the friends page
//  @route  GET /dashboard/friends
router.get("/friends", dashboardController.getFriends);

module.exports = router;
