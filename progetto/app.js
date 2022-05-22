var express = require('express');

var app = express();

const mongoose = require('mongoose');

app.listen(3000, () => {
   console.log('Server listening on 3000');
})

mongoose.connect('mongodb+srv://AlessandroPerez:Password123@cluster0.2dxfhcy.mongodb.net/?retryWrites=true&w=majority', () => {
   console.log('Connected to Mongo DB Successfully!!');
})
