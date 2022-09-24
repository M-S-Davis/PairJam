const mongoose = require("mongoose");

const SongSchema = new mongoose.Schema({
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
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("User", UserSchema);
