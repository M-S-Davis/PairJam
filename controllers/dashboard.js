module.exports = {
  showDashboard: async (req, res) => {
    try {
      res.render("dashboard.ejs", { title: "Dashboard" });
    } catch (err) {
      console.error(err);
    }
  },
};
