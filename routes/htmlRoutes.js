//get handle on all lib I need, router com
const express = require('express');
const path = require('path');
const router = express.Router();

//router Get paths html files
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
  });
  
  router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });
  
//exports to router
module.exports = router;