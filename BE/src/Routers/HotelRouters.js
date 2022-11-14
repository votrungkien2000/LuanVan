const express = require("express");
const route = express.Router();
const { addHotel, getHotelAll } = require("../Controllers/HotelController.js");

route.get('/api/addHotel', addHotel)
route.get('/api/getHotelAll', getHotelAll)

module.exports = route