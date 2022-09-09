module.exports = {
  getLanding: (req, res) => {
    console.log("Loading landing page");
    res.render("landing.ejs");
  },
  getAbout: (req, res) => {
    console.log("Loading About page");
    res.render("about.ejs");
  },
};
