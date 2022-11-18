const express = require("express");
const route = express.Router();
const { addHistory} = require("../Controllers/HistoryController.js");

route.post('/api/addHistory', addHistory)

module.exports = route