const express = require("express");
const path = require("path");

const { status } = require("./src/middleware");

const app = express();

app.get("/status", status);
// Serve the static files from the React app
app.use(express.static(path.join(__dirname, "client/build")));
// Handles any requests that don't match the ones above
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
