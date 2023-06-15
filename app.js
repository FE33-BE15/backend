const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const session = require("express-session");
const cors = require("cors");
const db = require("./database/models");

const routerIndex = require("./routes/index");
const routerUsers = require("./routes/users");
const app = express();

app.use(cors());

try {
  db.sequelize.authenticate();
  console.log("Successfully connected to the database!");
} catch (error) {
  console.error(error, "Unable to connect to the database:");
}

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(
  session({
    secret: "FEtigapuluhtigaBElimabelas",
    resave: true,
    maxAge: 600000,
    saveUninitialized: true,
    cookie: {},
  })
);

app.use("/", routerIndex);
app.use("/users", routerUsers);

module.exports = app;
