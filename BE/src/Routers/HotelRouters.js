const express = require("express");
const route = express.Router();
const { addHotel, getHotelAll, getHotelBySearch, getHotelBySearchHistory } = require("../Controllers/HotelController.js");

route.get('/api/addHotel', addHotel)
route.get('/api/getHotelAll', getHotelAll)
route.post('/api/getHotelBySearch', getHotelBySearch)
route.post('/api/getHotelBySearchHistory', getHotelBySearchHistory)

module.exports = route