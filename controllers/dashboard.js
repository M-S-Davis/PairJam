module.exports = {
  getDashboard: async (req, res) => {
    try {
      res.render("dashboard.ejs", { title: "Dashboard" });
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
};
