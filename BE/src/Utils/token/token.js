const express = require("express");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");


const app = express();
app.use(express.json());
dotenv.config();

function CreateToken(data) {
    const access = jwt.sign(data, process.env.ACCESS_TOKEN_SECRET
        , { expiresIn: '60m' })
    return access
}
module.exports = {CreateToken}