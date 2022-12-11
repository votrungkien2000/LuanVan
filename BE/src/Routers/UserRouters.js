const express = require("express");
const route = express.Router();

const { scraping, addUser, getUser, login, updateUser, saveData } = require("../Controllers/UserController");


route.post('/api/user/login', login)
route.post('/api/user/getUser', getUser)
route.post('/api/user/register',addUser)
route.post('/api/user/updateUser',updateUser)
route.get('/api/user/saveData', saveData)




module.exports = route
