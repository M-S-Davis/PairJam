const Song = require("../models/Song");

module.exports = {
  getDashboard: async (req, res) => {
    try {
      // const mostRecentSongCreated = await Song.findOne(
      //   {},
      //   {},
      //   { sort: { created_at: 1 } },
      //   function (err, post) {
      //     console.log(post);
      //   }
      // );
      const gettingTheNewShit = await Song.findOne().sort({
        createdAt: "asc",
        _id: -1,
      });
      res.render("dashboard.ejs", {
        title: "Dashboard",
        user: req.user,
        song: gettingTheNewShit,
      });
    } catch (err) {
      console.error(err);
    }
  },
};
