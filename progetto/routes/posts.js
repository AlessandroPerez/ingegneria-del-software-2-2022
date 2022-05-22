const express = require ('express');

const router = express.Router();

const Post = require('../model/Posts');

router.get('/', (req, res) => {
  res.send('you are on post');
});

router.post('/', (req, res) => {
  console.log(request.body);
});

module.exports = router;
