// import path, { dirname } from 'path';
// import { fileURLToPath } from 'url';
// import fs from 'fs';
// import express from 'express';
// import morgan from 'morgan';
// import { nanoid } from 'nanoid';
// // ^^^^^^^
// // Needs latest node verion to work (18.3.0)

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// const port = 3300;
// const app = express();

// function unique_id(req, __, next) {
//   req.id = nanoid(36);
//   next();
// }

// const stream = fs.createWriteStream(path.join(__dirname, 'log.txt'), {flags: 'a'});

// morgan.token('id', req => req.id);
// app.use(morgan(':id :method :url :response-time : remote-addr', { stream, }));

// app.use(express.json());
// app.use(unique_id);
// app.use('/', express.static(path.join('dist')));

// app.get('/test', (__, res) => res.send('Hi!'));

// app.listen(port, () => {
//   console.log(`Server listening at port:${3300}`);
// });



require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const compression = require('compression');
const morgan = require('morgan');

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