const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

// /admin/add-users => GET
router.get('/add-users', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'add-users.html'));
});

// /admin/add-users => POST
router.post('/add-users', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
});

module.exports = router;
