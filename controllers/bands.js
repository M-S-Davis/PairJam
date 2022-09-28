const Band = require("../models/Band");
const Song = require("../models/Song");
const User = require("../models/User");

module.exports = {
  getBands: async (req, res) => {
    try {
      const bands = await Band.find({ googleId: req.user.googleId });
      const members = bands.filter((band) => {
        band.bandMembers.includes(req.user.googleId);
      });
      const bandSongs = await Song.find({ googleId: members });
      console.log(`Members list: ${members}`);
      console.log(`Band Songs list: ${bandSongs}`);
      console.log(`Members name: ${members.firstName}`);
      console.log(`User id:${req.user._id}`);

      //Redesign from this line down

      //Goal it to get all bands with current user as a band member
      // get all bands

      res.render("bands.ejs", {
        title: "Bands",
        bands: bands,
        songs: bandSongs,
        user: req.user,
      });
    } catch (err) {
      console.error(err);
    }
  },
  addBand: async (req, res) => {
    try {
      await Band.create({
        createdByGoogleId: req.user.googleId,
        bandName: req.body.bandName,
        bandMembers: { user: req.user, googleId: req.user.googleId },
        logo: req.body.logo,
        bandDesc: req.body.bandDesc,
        createdBy: req.body.googleId,
      });

      res.redirect("/bands");
    } catch (err) {
      console.log(err);
    }
  },
};
