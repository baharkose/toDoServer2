"use strict";
/* -------------------------------------------------------
    EXPRESSJS - TODO Project with Sequelize
------------------------------------------------------- */

// dependencies
// npm init -y
// npm i nodemon
// npm install sequelize sqlite3
// npm i express dotenv express-async-errors

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000

app.use(express.json());

// catch async-errors
require("express-async-errors");

app.listen(PORT, () => console.log("Running: http://127.0.0.1" + PORT));
