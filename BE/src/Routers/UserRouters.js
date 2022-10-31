const express = require("express");
const route = express.Router();

const { scraping, addUser, getUser, login } = require("../Controllers/UserController");


// route.get('/api/room/scraping', scraping)
route.post('/api/user/login', login)
route.post('/api/user/addUser',addUser)
route.post('/api/user/getUser', getUser)




module.exports = route
