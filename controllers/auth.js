module.exports = {
  getLogin: async (req, res) => {
    try {
      if (req.user) {
        return res.redirect("/dashboard");
      }
      res.render("landing", { title: "Login" });
    } catch (err) {
      console.error(err);
    }
  },
  getLogout: async (req, res) => {
    try {
      req.session.destroy((err) => {
        if (err)
          console.log(
            "Error : Failed to destroy the session during logout.",
            err
          );
        req.user = null;
        res.redirect("/");
      });
    } catch (err) {
      console.error(err);
    }
  },
};
