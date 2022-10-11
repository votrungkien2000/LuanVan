const express = require("express");
const route = express.Router();

const { scraping, addUser } = require("../Controllers/UserController");


// route.get('/api/room/scraping', scraping)
route.post('/api/user/addUser', addUser)




module.exports = route
