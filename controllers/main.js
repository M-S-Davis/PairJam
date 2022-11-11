module.exports = {
  getLanding: async (req, res) => {
    try {
      console.log("Loading Landing page");
      res.render("landing.ejs", { title: "Sign in, rockstar!" });
    } catch (err) {
      console.error(err);
    }
  },
  getMenu: async (req, res) => {
    try {
      console.log("We goin to the menu!");
      res.render("menu.ejs", {
        title: "Welcome to the menu, we got fun and games.",
      });
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
