const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const session = require("express-session");
const db = require("./database/models");

const app = express();

try {
  db.sequelize.authenticate();
  console.log("Successfully connected to the database!");
} catch (error) {
  console.error(error, "Unable to connect to the database:");
}

module.exports = app;
