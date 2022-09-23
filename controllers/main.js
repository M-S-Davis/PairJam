module.exports = {
  getLanding: async (req, res) => {
    try {
      console.log("Loading Landing page");
      res.render("landing.ejs", { title: "Sign in, rockstar!" });
    } catch (err) {
      console.error(err);
    }
  },
  getTest: async (req, res) => {
    try {
      console.log(req.user);
      return res.redirect("/dashboard");
    } catch (err) {
      console.error(err);
    }
  },
};
