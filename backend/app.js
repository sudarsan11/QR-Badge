const express = require('express');
const app = express();
const mongoose = require('mongoose');

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const qrRoutes = require('./routes/qr-generate');


app.use ((req,res,next) => {

  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, DELETE" );

  next();
})

mongoose
  .connect(
    "mongodb+srv://sudarsan:QSMBUikSJzhVw0Zp@cluster0-ohcdv.mongodb.net/Tasks?retryWrites=true&w=majority"
    , { useNewUrlParser: true })
  .then(() => {
    console.log("Connected to database!");
  })
  .catch((err) => {
    console.log(err);
});



app.use('/api/qr', qrRoutes);

module.exports = app;
