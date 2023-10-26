const express = require('express');
const cors = require('cors');

//Configurations
const app = express();


//Middleware
app.use(cors());
app.use(express.json());

//Routes
app.get('/', (request, response) => {
    response.send('Welcome to IbyChem')
})

module.exports = app;