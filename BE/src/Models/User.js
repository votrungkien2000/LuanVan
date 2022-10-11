const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = new Schema(
  {
    email: {
      type: String
    },
    password: {
      type: String
    },
    status: {
      type: String
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", User);

