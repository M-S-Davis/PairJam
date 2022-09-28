const path = require("path");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const passport = require("passport");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const methodOverride = require("method-override");
const logger = require("morgan");
const bodyParser = require("body-parser");
const connectDB = require("./config/database");
const mainRoutes = require("./routes/main");
const authRoutes = require("./routes/auth");
const dashboardRoutes = require("./routes/dashboard");
const songsRoutes = require("./routes/songs");
const bandsRoutes = require("./routes/bands");

const PORT = process.env.PORT || 5000;

// Load config
require("dotenv").config({ path: "./config/.env" });

// Connect to the database
connectDB();

// Passport config
require("./config/passport")(passport);

// Set templating engine
app.set("view engine", "ejs");

// Static files
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "views")));

//Body parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Dev Helpers
if (process.env.NODE_ENV === "development") {
  app.use(logger("dev"));
}

//Use forms for put / delete
app.use(methodOverride("_method"));

// Sessions
app.use(
  session({
    secret: "secret pear",
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: process.env.DB_STRING }),
  })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Setting routes
app.use("/", mainRoutes);
app.use("/auth", authRoutes);
app.use("/dashboard", dashboardRoutes);
app.use("/songs", songsRoutes);
app.use("/bands", bandsRoutes);

// Starting server
app.listen(
  PORT,
  console.log(
    `The server is in ${process.env.NODE_ENV} mode running on port ${PORT}`
  )
);
