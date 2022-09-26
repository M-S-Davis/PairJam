const mongoose = require("mongoose");

const SongSchema = new mongoose.Schema({
  googleId: {
    type: String,
    required: true,
  },
  artistName: {
    type: String,
    required: true,
  },
  songName: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    default: "http://clipart-library.com/images/qTBoKLAAc.png",
  },
  videoLink: {
    type: String,
  },
  note: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Song", SongSchema);
