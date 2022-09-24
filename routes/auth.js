const express = require("express");
const passport = require("passport");
const router = express.Router();
const authController = require("../controllers/auth");

//  @desc   Auth with Google
//  @route  GET /auth/google
router.get("/google", passport.authenticate("google", { scope: ["profile"] }));

// @desc    Google auth callback
// @route   GET /auth/google/callback
router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/" }),
  authController.getLogin
);

// @desc    Logout user
// @route   GET /auth/logout
router.get("/logout", authController.getLogout);

module.exports = router;
