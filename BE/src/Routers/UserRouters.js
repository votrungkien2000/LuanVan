const express = require("express");
const route = express.Router();

const { scraping, addUser, getUser, login, updateUser } = require("../Controllers/UserController");


// route.get('/api/room/scraping', scraping)
route.post('/api/user/login', login)
route.post('/api/user/getUser', getUser)
route.post('/api/user/register',addUser)
route.post('/api/user/updateUser',updateUser)




module.exports = route
