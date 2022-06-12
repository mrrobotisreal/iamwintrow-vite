require("dotenv").config();
const express = require("express");
const path = require("path");
const bodyParser = require('body-parser');
const db = require('./db.js');

const app = express();

// Serves up all static and generated assets in ../client/dist.
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "../index.html")));

app.get('/comments', (req, res) => {
  console.log('comments route');
});

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);