const mongoose = require("mongoose");
const express = require("express");
const logger = require("morgan");

const PORT = process.env.PORT || 3000;

const app = express();

// REQUIRE MODELS HERE>?

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// MongoDB database
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });


