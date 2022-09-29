const { isObjectIdOrHexString } = require("mongoose");
const Band = require("../models/Band");
const Song = require("../models/Song");
const User = require("../models/User");

module.exports = {
  getBands: async (req, res) => {
    try {
      // Get only bands where current user is a member
      const myBands = await Band.find({ id: req.user._id });
      console.log(`Test --> ${myBands} <--`);
      console.log(`All band names: ${myBands.map((band) => band.bandName)}`);
      // Get only members from bands above

      const bands = await Band.find({ googleId: req.user.googleId });
      const members = bands.filter((band) => {
        band.bandMembers.includes(req.user.googleId);
      });
      const bandSongs = await Song.find({ googleId: members });
      // console.log(`Band Members: ${members[0]}`);
      // console.log(
      //   `Band Songs: ${bandSongs.forEach((song) => {
      //     song.songName;
      //   })}`
      // );
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
  getBandInfo: async (req, res) => {
    try {
      const band = await Band.findOne({ _id: req.param.id });
      const members = band.filter((band) => {
        band.bandMembers.includes(req.user.googleId);
      }); // SINGLE BAND not getting all members
      console.log(members.length);
      console.log(band);
      const bandSongs = await Song.find({ googleId: members });
      res.render("bandInfo.ejs", {
        title: band.bandName,
        band: band,
        members: members,
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
