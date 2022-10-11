const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Province = new Schema(
  {
    nameProvince: {
      type: String
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Province", Province);

