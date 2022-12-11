const express = require("express");
const route = express.Router();
const { addHotel, getHotelAll, getHotelBySearch, getHotelBySearchHistory, getHotelByPopular, getHotelByPosition } = require("../Controllers/HotelController.js");

route.get('/api/addHotel', addHotel)
route.get('/api/getHotelAll', getHotelAll)
route.post('/api/getHotelBySearch', getHotelBySearch)
route.post('/api/getHotelBySearchHistory', getHotelBySearchHistory)
route.post('/api/getHotelByPopular', getHotelByPopular)
route.post('/api/getHotelByPosition', getHotelByPosition)


module.exports = route