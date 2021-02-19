const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const issueSchema = new Schema({
  username: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  subject: {
    type: String,
  },
  description: {
    type: String,
  },
  votes: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("Issue", issueSchema);
