const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var validator = require('validator');

const User = new Schema(
  {
    userName: {
      type: String,
      required: [true, "Please enter your name"],
      maxlength: [50, "Name cannot exceed 50 charaters"],
      minlength: [6, "Name should have more than 6 charaters"],

    },
    email: {
      type: String,
      unique: true,
      required: [true, "Please enter your email"],
      validate: [validator.isEmail, "Please enter the valid email"],
    },
    password: {
      type: String,
      required: [true, "Please enter your password"],
      minlength: [8, "Password should be greater than 8 characters"],
    },
    birthDate: {
      type: Date,
    },
    numberPhone: {
      type: String,
      required: [true, "Please enter your numberPhone"],
      maxlength: [10, "Number Phone should enter 10 number"],
      minlength: [10, "Number Phone should enter 10 number"],
    },
    province: {
      type: Schema.Types.ObjectId,
      ref: 'Province',
      // required: [true, "Please chose your province"],
    },
    district: {
      type: Schema.Types.ObjectId,
      ref: 'District',
      // required: [true, "Please enter your district"],
    },
    role: {
      type: Number,
    }
  },
);

module.exports = mongoose.model("User", User);
