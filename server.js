const mongoose = require("mongoose");
const express = require("express");
const logger = require("morgan");

// require path? fs?

const PORT = process.env.PORT || 3000;

const app = express();

// REQUIRE MODELS HERE>?

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// MongoDB database
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });

// routes for STATS, EXERCISE

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});