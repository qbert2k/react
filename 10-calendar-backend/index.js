const express = require('express');
const cors = require('cors');
const {dbConnection} = require('./database/config');
require('dotenv').config();

//console.log(process.env);

const app = express();

dbConnection();

app.use(cors());

// Public
app.use(express.static('public'));

// Middlewares
app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/events', require('./routes/events'));

app.listen(process.env.PORT, () => {
    console.log(`Server listening on port: ${process.env.PORT}`);
});