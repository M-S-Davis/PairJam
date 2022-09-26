const mongoose = require("mongoose");

const GroupSchema = new mongoose.Schema({
  groupName: {
    type: String,
    required: true,
  },
  groupMembers: [
    {
      type: String,
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
});

module.exports = mongoose.model("Group", GroupSchema);
