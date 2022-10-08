const Song = require("../models/Song");

module.exports = {
  getDashboard: async (req, res) => {
    try {
      const totalSongs = await Song.count({
        createdByGoogleId: req.user.googleId,
      });
      const gettingTheNewShit = await Song.findOne().sort({
        createdAt: "asc",
        _id: -1,
      });
      res.render("dashboard.ejs", {
        title: "Dashboard",
        user: req.user,
        song: gettingTheNewShit,
        totalSongs: totalSongs,
      });
    } catch (err) {
      console.error(err);
    }
  },
};
