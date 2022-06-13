require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const compression = require('compression');

const router = require('./routes');

const app = express();
app.use(compression());
app.use(express.static(path.join(__dirname, '../dist')));
app.use(bodyParser.json());
app.use(router);

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});



/* Bare bones Node server, will implement later */
// const http = require('http');
// const fs = require('fs');

// const host = '127.0.0.1';
// const port = 3300;

// const server = http.createServer((req, res) => {
//   if (req.method === 'GET') {
//     console.log('GETtin results!');
//     res.writeHead(200, {"Content-Type": "text/html"});
//     fs.createReadStream("./public/form.html", "UTF-8").pipe(res);
//   } else if (req.method === 'POST') {
//     let body = '';
//     req.on('data', (chunk) => {
//       body += chunk;
//     });
//     req.on('end', () => {
//       res.writeHead(200, {"Content-Type": "text/html"});
//       res.end(body);
//     });
//   }
// });

// server.listen(port, host, () => {
//   console.log(`Server running at http://${host}:${port}/`);
// });