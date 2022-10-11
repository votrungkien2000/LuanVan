const express = require("express");
const route = express.Router();

const { addProvince } = require("../Controllers/ProvinceController");


route.post('/api/province/addprovince', addProvince)




module.exports = route
