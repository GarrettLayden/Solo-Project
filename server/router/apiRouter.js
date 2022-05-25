const express = require('express');
const router = express.Router();
const apiController = require('../controller/apiController.js')

// get data from api
router.get('/', apiController.getData, (req,res) => {
  res.status(200).json(res.locals.data)
});


// check on how to upload sounds from browser (if possible maybe)

module.exports = router;