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
        type: String
    },
    point: {
        type: String
    },
    picture: {
        type: String
    },
    listService: {
        type: Array
    },
    star: {
        type: Number
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Hotel", Hotel);