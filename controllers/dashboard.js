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
};
