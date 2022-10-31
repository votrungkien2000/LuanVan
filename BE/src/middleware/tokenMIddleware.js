const express = require("express");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");


const app = express();
app.use(express.json());
dotenv.config();

function authenToken(req, res, next) {
    const authorizationHeader = req.headers['authorization'];
    console.log(authorizationHeader)
    //Beaer Token
    const token = authorizationHeader.split(' ')[1];
    if (!token) res.sendStatus(401);
    else
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, data) => {
        console.log(err, data)
        if (err) res.sendStatus(403);
        else { next(); }
    })
}
module.exports = { authenToken }