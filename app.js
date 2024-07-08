const express = require('express');

const mainRoutes = require('./src/routes/mainRoutes');
const userRoutes = require('./src/routes/userRoutes');


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', mainRoutes);
app.use('/user', userRoutes);

module.exports = app;