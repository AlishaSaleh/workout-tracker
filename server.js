const mongoose = require("mongoose");
const express = require("express");
const logger = require("morgan");
//const routes = require('./routes');

// const path = require("path");
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
//app.use(routes);

app.use(require("./routes/apiRoutes.js"));
app.use(require("./routes/htmlRoutes.js"));

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});