const express = require("express");
const router = express.Router();
const { ensureAuth, ensureGuest } = require("../middleware/auth");
const dashboardController = require("../controllers/dashboard");

//  @desc   Display the dashboard
//  @route  GET /dashboard/
router.get("/", ensureAuth, dashboardController.getDashboard);

module.exports = router;
