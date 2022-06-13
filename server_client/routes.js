const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/', (req, res) => {
  console.log('ip is -> ', req.socket.remoteAddress);
  console.log('in routes rn');
  let ip = req.socket.remoteAddress;
  let options = {
    ip: ip,
  };
  // axios.post('http://localhost:54321/', options)
  //   .then(({ data }) => {
  //     console.log('data -> ', data);
  //     res.send(data);
  //   })
  //   .catch((err) => console.error(err));
});

module.exports = router;