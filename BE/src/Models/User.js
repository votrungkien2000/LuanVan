const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = new Schema(
  {
    userName: {
      type: String
    },
    email: {
      type: String
    },
    password: {
      type: String
    },
    birthDate: {
      type: Date
    },
    numberPhone: {
      type: String
    },
    province: {
      type: String
    },
    district: {
      type: String
    }
  },
);

module.exports = mongoose.model("User", User);

