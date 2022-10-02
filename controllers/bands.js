const Band = require("../models/Band");
const Song = require("../models/Song");
const User = require("../models/User");

module.exports = {
  getBands: async (req, res) => {
    try {
      const myBands = (await Band.find()).filter((band) =>
        band.bandMembers
          .map((member) => member.googleId)
          .includes(req.user.googleId)
      );
      res.render("bands.ejs", {
        title: "Bands",
        bands: myBands,
        user: req.user,
      });
    } catch (err) {
      console.error(err);
    }
  },
  getBandInfo: async (req, res) => {
    try {
      const band = await Band.findOne({ _id: req.params.id });
      const members = band.bandMembers.map((member) => member.googleId);
      const memberSongs = await Song.find({
        createdByGoogleId: { $in: members },
      });
      const memberNames = (await User.find({ googleId: { $in: members } })).map(
        (member) => {
          return member.displayName;
        }
      );
      console.log(memberNames);
      res.render("bandInfo.ejs", {
        title: band.bandName,
        band: band,
        members: members,
        memberNames: memberNames,
        user: req.user,
        songs: memberSongs,
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
  getEditBand: async (req, res) => {
    const selectedBand = await Band.findOne({ _id: req.params.id });
    try {
      res.render("editband.ejs", {
        title: "Edit Band",
        band: selectedBand,
        user: req.user,
      });
    } catch (err) {
      console.error(err);
    }
  },
  putBand: async (req, res) => {
    try {
      // todo: validate input
      await Band.findOneAndUpdate(
        { _id: req.params.id },
        {
          bandName: req.body.bandName,
          logo: req.body.logo,
          bandDesc: req.body.bandDesc,
        }
      );
      console.log(`Band ${req.body.bandName} was updated.`);
      res.redirect("/bands");
    } catch (err) {
      console.error(err);
    }
  },
  putBandMember: async (req, res) => {
    try {
      const currentBand = await Band.findOne({ _id: req.params.id });
      const newMember = req.body.googleId;
      const currentMembers = currentBand.bandMembers.map(
        (member) => member.googleId
      );
      // TEST LOG
      console.log(
        `Funzies: ${currentBand.bandMembers
          .map((member) => member.googleId)
          .join(" ")}`
      );
      console.log(currentMembers);
      await Band.updateOne(
        { _id: req.params.id },
        { $push: { bandMembers: { googleId: newMember } } }
      );
      // TEST LOG
      console.log(`Member ${req.body.googleId} added.`);
      const reloadCurrentBand = await Band.findOne({ _id: req.params.id });
      console.log(
        `Realzies: ${reloadCurrentBand.bandMembers
          .map((member) => member.googleId)
          .join(" ")}`
      );

      res.redirect("/bands/" + req.params.id);
    } catch (err) {
      console.error(err);
    }
  },
  deleteBand: async (req, res) => {
    try {
      await Band.remove({ _id: req.params.id });
      console.log(`Band deleted.`);
      res.redirect("/bands");
    } catch (err) {
      console.error(err);
    }
  },
  deleteBandMember: async (req, res) => {
    try {
      console.log(req.params);
      // Get the single band from the unique ID in the params,
      // and delete the bandMember with the memberID in the params.
      let memberId = req.params.memebr;
      await Band.updateOne(
        { _id: req.params.id },
        { $pull: { googleId: { memberId } } }
      );
    } catch (err) {
      console.error(err);
    }
  },
};
