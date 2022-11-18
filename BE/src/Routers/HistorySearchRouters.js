const express = require("express");
const route = express.Router();
const { addHistorySearch } = require("../Controllers/HistorySearchController.js");

route.post('/api/addHistorySearch', addHistorySearch)

module.exports = route