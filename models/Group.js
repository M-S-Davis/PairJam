const mongoose = require("mongoose");
const Song = require("./Song");

const GroupSchema = new mongoose.Schema({
  // Owner of the group set by googleId
  googleId: {
    type: String,
    required: true,
  },
  groupName: {
    type: String,
    required: true,
  },
  groupMembers: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
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
  groupDesc: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

module.exports = mongoose.model("Group", GroupSchema);
