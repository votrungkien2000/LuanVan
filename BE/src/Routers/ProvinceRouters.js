const express = require("express");
const route = express.Router();
const {authenToken} = require("../middleware/tokenMIddleware.js")

const { addProvince, add, getAllProvince} = require("../Controllers/ProvinceController");


route.post('/api/province/addprovince', authenToken, addProvince)
route.post('/api/province/addprovinceList', authenToken, add)
route.get('/api/province/getallprovince',authenToken , getAllProvince)




module.exports = route
