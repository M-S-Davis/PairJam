const mongoose = require("mongoose");

const SongSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
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
    default:
      "https://image.shutterstock.com/image-vector/vinil-record-glitter-yellow-color-600w-1386485138.jpg",
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
