const express = require('express');
const axios = require('axios');
const app = express();

app.set('view engine', 'pug');
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require('dotenv').config()

const PRIVATE_APP_ACCESS = process.env.PRIVATE_APP_KEY;


// * Localhost
app.listen(3000, () => console.log('Listening on http://localhost:3000'));