const express = require("express");
const app = express();

const { status } = require("./src/middleware");

const port = process.env.PORT || 3000;

app.get("/status", status);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
