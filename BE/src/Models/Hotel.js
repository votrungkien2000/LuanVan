const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Hotel = new Schema(
  {
    hotelName: {
      type: String
    },
    address: {
        type: String
    },
    hotelInfo: {
        type: String
    },
    price: {
        type: Number
    },
    latitude:{
        type: String
    },
    longitude:{
        type: String
    },
    point: {
        type: String
    },
    picture: {
        type: String
    },
    star: {
        type: Number
    },
    countSearch: {
        type: Number
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Hotel", Hotel);