const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
const db = require('./config/db');

require('dotenv').config();

const app = express();

// EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');

// Bodyparser
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));

const port = process.env.PORT || 5000;


app.listen(port, console.log(`Server started on port ${port}`));
