const express = require("express");
const route = express.Router();

const { addProvince, add, getAllProvince} = require("../Controllers/ProvinceController");


route.post('/api/province/addprovince', addProvince)
route.post('/api/province/addprovinceList', add)
route.get('/api/province/getallprovince', getAllProvince)




module.exports = route
