const path = require("path");

const express = require("express");
var bodyParser = require("body-parser");

const app = express();

//set static repository path
app.use(express.static(path.join(__dirname, "dist")));

// parse an HTML body into a string
app.use(bodyParser.text({ type: "text/html" }));

// viewed at http://localhost:3000
app.get("/", function (req, res) {
  console.log(path.join(__dirname));
  res.sendFile(path.join(__dirname + "/dist/index.html"));
});

// Serve the files on port 3000.
app.listen(3000, function () {
  /* eslint-disable no-console */
  console.log("localhost:3000");
});
