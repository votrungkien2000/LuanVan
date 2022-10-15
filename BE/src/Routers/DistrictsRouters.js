const express = require("express");
const route = express.Router();

const { scraping, add, getDistricts } = require("../Controllers/DistrictsController");


// route.get('/api/room/scraping', scraping)
route.post('/api/districts/addDistrictById', add)
route.get('/api/districts/getDistricts', getDistricts)



module.exports = route
