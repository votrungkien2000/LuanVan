const express = require("express");
const route = express.Router();
const { addHistorySearch, getAllProvinceByMonth, getAllProvinceByYear } = require("../Controllers/HistorySearchController.js");

route.post('/api/addHistorySearch', addHistorySearch)
route.get('/api/getAllProvinceByMonth', getAllProvinceByMonth)
route.get('/api/getAllProvinceByYear', getAllProvinceByYear)

module.exports = route 