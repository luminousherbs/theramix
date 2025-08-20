const express = require("express");
const path = require("path");
const app = express();

app.use(express.json()); // parse json
app.use(express.static(path.join(__dirname, "/"))); // serve from root

app.listen(8000, () => {
    console.log("Serving on 8000");
});
