const { Pool } = require('pg')
const pool = new Pool({
  user: 'mitchwintrow',
  password: '',
  host: 'localhost',
  port: 5432,
  database: 'iamwintrow'
});

function GETComments() {
  return pool.query(`SELECT * FROM comments`);
}

function POSTComment(comment, poster, cb = () => {}) {
  let date = Date.now();
  console.log('comment -> ', comment);
  console.log('poster -> ', poster);
  console.log('date -> ', date);
  let query = {
    text: 'INSERT INTO comments (poster, comment, date) VALUES ($1, $2, $3)',
    values: [poster, comment, date]
  };
  pool.query(query)
    .then(({ rows }) => {
      console.log('successfully stored in database');
      cb(null, 'success');
    })
    .catch((err) => console.error(err));
}

function POSTVisitors(ip, cb = () => {}) {
  let date = Date.now();
  let query = {
    text: 'INSERT INTO visitors (ip, date) VALUES ($1, $2)',
    values: [ip, date]
  }
  pool.query(query)
    .then((res) => {
      cb(null, 'success');
    })
    .catch((err) => console.error(err));
}

module.exports.GETComments = GETComments;
module.exports.POSTComment = POSTComment;
module.exports.POSTVisitors = POSTVisitors;