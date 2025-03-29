const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const Campground = require("./models/campground");

mongoose.connect("mongodb://localhost:27017/yelp-camp", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Database connected");
});

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/makeCampground ", (req, res) => {
  res.send("Hello World!");
});

app.listen(3000, () => {
  console.log("Serving on port 3000");
});

// const path = require('path');
// const mongoose = require('mongoose');
// const methodOverride = require('method-override');
// const ejsMate = require('ejs-mate');
// const session = require('express-session');
