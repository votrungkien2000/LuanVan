const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const District = new Schema(
  {
    idProvince: {
      type: String
    },
    nameDistrict: {
        type: String
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("District", District);