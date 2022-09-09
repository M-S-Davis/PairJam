const express = require("express");
const router = express.Router();
const dashboardController = require("../controllers/dashboard");

//  @desc   Display the dashboard
//  @route  GET /dashboard
router.get("/", dashboardController.showDashboard);
