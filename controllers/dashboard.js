module.exports = {
  showDashboard: async (req, res) => {
    try {
      res.render("dashboard.ejs");
    } catch (err) {
      console.error(err);
    }
  },
};
