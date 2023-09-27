const express = require('express');
const app = express();
const cors = require('cors')
const dotenv = require('dotenv');
// dotenv.config({path:path.join(__dirname,"config/config.env")});


app.use(cors())
app.use(express.json());

const email = require('./routes/email')

app.use('/api/email/', email)

module.exports = app;