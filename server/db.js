const { Pool } = require('pg')
const pool = new Pool({
  user: 'mitchwintrow',
  password: '',
  host: 'localhost',
  port: 5432,
  database: 'iamwintrow'
});

function GETComments() {
  return pool.query();
}

function POSTComment(comment) {
  pool.query();
}

module.exports.GETComments = GETComments;
module.exports.POSTComment = POSTComment;