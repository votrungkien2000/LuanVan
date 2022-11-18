const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const HistorySearch = new Schema(
  {
    idProvince: {
      type: String
    },
    searches: {
       type: Number
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("HistorySearch", HistorySearch);