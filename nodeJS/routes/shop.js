// check the comments above this file
const path = require('path')  //1
const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'))  //1
});

module.exports = router;


/*

*/