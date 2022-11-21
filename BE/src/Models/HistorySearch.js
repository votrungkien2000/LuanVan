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
    month: {
      type: Number
   },
   year: {
      type: String
   }
  },
  { timestamps: true }
);

module.exports = mongoose.model("HistorySearch", HistorySearch);