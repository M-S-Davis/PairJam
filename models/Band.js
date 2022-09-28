const mongoose = require("mongoose");

const BandSchema = new mongoose.Schema({
  // Owner of the group set by googleId
  createdByGoogleId: {
    type: String,
    required: true,
  },
  bandName: {
    type: String,
    required: true,
  },
  bandMembers: [
    {
      googleId: {
        type: String,
        required: true,
      },
    },
  ],
  setList: [
    {
      type: String,
      default: "",
    },
  ],
  logo: {
    type: String,
    default: "https://www.svgrepo.com/show/156473/pear.svg",
  },
  bandDesc: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Band", BandSchema);
