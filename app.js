const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const Campground = require("./models/campground");
// const campgrounds = require("./seeds/cities");
// const methodOverride = require("method-override");
// const Campground = require("./models/campground");

mongoose.connect("mongodb://127.0.0.1:27017/campconnect", {
  useNewUrlParser: true,
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

app.get("/campgrounds", (req, res) => {
  Campground.find({}, (err, campgrounds) => {
    if (err) {
      console.log(err);
      res.send("Error fetching campgrounds");
    } else {
      res.render("campgrounds/index", { campgrounds });
    }
  });
});

app.listen(5000, () => {
  console.log("Serving on port 5000");
});
