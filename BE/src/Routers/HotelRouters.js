const express = require("express");
const route = express.Router();
const { scraping } = require("../Controllers/HotelController.js");


route.get('/api/scraping', scraping)

module.exports = route