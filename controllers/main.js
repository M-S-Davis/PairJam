module.exports = {
  getLanding: (req, res) => {
    try {
      console.log("Loading Landing page");
      res.render("landing.ejs");
    } catch (err) {
      console.error(err);
    }
  },
  getAbout: (req, res) => {
    console.log("Loading About page");
    res.render("about.ejs");
  },
};
