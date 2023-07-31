const express = require('express');
const {dbConnection} = require('./database/config');
require('dotenv').config();

//console.log(process.env);

const app = express();

dbConnection();

// Public
app.use(express.static('public'));

// Middlewares
app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/auth'));

app.listen(process.env.PORT, () => {
    console.log(`Server listening on port: ${process.env.PORT}`);
});