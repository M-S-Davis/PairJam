module.exports = {
  getLanding: async (req, res) => {
    try {
      console.log("Loading Landing page");
      res.render("landing.ejs", { title: "Sign in, rockstar!" });
    } catch (err) {
      console.error(err);
    }
  },
  getAbout: async (req, res) => {
    console.log("Loading About page");
    res.render("about.ejs", { title: "What's all this about?" });
  },
};
