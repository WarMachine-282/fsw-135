const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const issueSchema = new Schema({
  subject: {
    type: String,
  },
  description: {
    type: String,
  },
  upVotes: {
    type: Number,
    default: 0,
  },
  downVotes: {
    type: Number,
    default: 0,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  }
});

module.exports = mongoose.model("Issue", issueSchema);
