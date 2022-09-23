module.exports = {
  getDashboard: async (req, res) => {
    try {
      res.render("dashboard.ejs", {
        title: "Dashboard",
        user: req.user,
      });
    } catch (err) {
      console.error(err);
    }
  },
  getFriends: async (req, res) => {
    console.log("I made a friend!");
    try {
      res.render("friends.ejs", { title: "Friends" });
    } catch (err) {
      console.error(err);
    }
  },
  getSongs: async (req, res) => {
    console.log("I did a song thing!");
    try {
      res.render("songs.ejs", { title: "Songs" });
    } catch (err) {
      console.error(err);
    }
  },
};
