const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const History = new Schema(
  {
    idUser: {
      type: String
    },
    star: {
       type: Number
    },
    price: {
        type: Number
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("History", History);