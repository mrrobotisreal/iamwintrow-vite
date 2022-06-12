require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const compression = require('compression');

const router = require('./routes');

const app = express();
app.use(compression());
app.use(express.static(path.join(__dirname, './dist')));
app.use(bodyParser.json());
app.use(router);

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});



/* Bare bones Node server, will implement later */
// const http = require('http');

// const host = '127.0.0.1';
// const port = 3300;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader("Content-Type", "text/plain");
//   res.end('Hello World!');
// });

// server.listen(port, host, () => {
//   console.log(`Server running at http://${host}:${port}/`);
// });