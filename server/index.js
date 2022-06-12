require("dotenv").config();
const express = require("express");
const cors = require('cors');
const path = require("path");
const bodyParser = require('body-parser');
const { GETComments, POSTComment, POSTVisitors } = require('./db.js');

const app = express();

// Serves up all static and generated assets in ../client/dist.
app.use(cors({
  origin: ['http://localhost:3000', 'http://localhost:3300'],
  methods: ['GET', 'POST']
}))
app.use(bodyParser.json());
// app.use(express.static(path.join(__dirname, "../index.html")));

app.post('/', (req, res) => {
  console.log('tracking visitors');
  console.log('ip is -> ', req.socket.remoteAddress);
  console.log('body ip is -> ', req.body.ip);
  res.send('done');
});

app.get('/comments', (req, res) => {
  console.log('getting comments');
});

app.post('/comments', (req, res) => {
  console.log('posting a comment');
  var ip = req.headers['x-forwarded-for'] ||
     req.connection.remoteAddress ||
     req.socket.remoteAddress ||
     req.connection.socket.remoteAddress;
  // console.log('ip is -> ', req.socket.remoteAddress);
  console.log('ip is -> ', ip);

  // POSTComment(req.body.comment, req.body.poster, (err, success) => {
  //   if (err) {
  //     console.error(err);
  //   } else {
  //     console.log('successfully returned from database');
  //   }
  // });
});

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);