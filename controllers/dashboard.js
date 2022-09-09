module.exports = {
  showDashboard: async (req, res) => {
    try {
      res.render("landing.ejs");
    } catch (err) {
      console.error(err);
    }
  },
};
