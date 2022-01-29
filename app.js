const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
require('dotenv/config');
const key = require('./key.js');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(bodyparser.json());
const url = key.mongourl;
mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection

con.on('open', () => {
    console.log('connected...')
})

//Middleware
const citiesRoute = require('./Routes/cities');

app.use('/cities', citiesRoute);

//Routes
app.get('/', (req, res) => {
    res.send("Home");
});



app.listen(process.env.PORT || 5000);