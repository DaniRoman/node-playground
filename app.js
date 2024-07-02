const express = require('express');
const userRoutes = require('./src/routes/userRoutes');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', userRoutes);

module.exports = app;