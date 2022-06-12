require("dotenv").config();
const express = require("express");
const path = require("path");
const bodyParser = require('body-parser');

const app = express();

// Serves up all static and generated assets in ../client/dist.
app.use(bodyParser.json());
// app.use(express.static(path.join(__dirname, "../client/dist")));

// app.get('/', (req, res) => {
//   console.log('home route');
// });

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);