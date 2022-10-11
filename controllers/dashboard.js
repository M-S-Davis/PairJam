const Song = require("../models/Song");
const Band = require("../models/Band");

module.exports = {
  getDashboard: async (req, res) => {
    try {
      const totalBands = await Band.count({
        createdByGoogleId: req.user.googleId,
      });
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
        totalBands: totalBands,
      });
    } catch (err) {
      console.error(err);
    }
  },
};
