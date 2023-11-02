//server/index.js
//import fs from "fs";

const express = require("express");
const users = require("../users.json");
var path = require("path")
const app = express();

const PORT = 3011;

app.get("/api/users", (req, res) => {
    return res.json(users);
});

app.listen(PORT, () => console.log('Listening on port ${PORT}'));