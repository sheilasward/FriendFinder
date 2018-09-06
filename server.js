
// Dependencies
// ===========================================================
var express = require("express");  // have to install
var bodyParser = require("body-parser");  // Needed to use POST,  have to install
var path = require("path");  // Internal package - don't have to install

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8081;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var htmlRoutes = require("./app/routing/htmlRoutes")(app, path);
var apiRoutes = require("./app/routing/apiRoutes")(app, path);

// Listener
// ===========================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
