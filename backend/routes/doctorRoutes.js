const express = require('express');
const { getDoctors } = require('../controllers/doctorController');

const router = express.Router();

router.get('/doctors', getDoctors);

module.exports = router;
