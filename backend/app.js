const express = require('express');
const bodyParser = require('body-parser');
const doctorRoutes = require('./routes/doctorRoutes');

const app = express();
app.use(bodyParser.json());

app.use('/api', doctorRoutes);

module.exports = app;
