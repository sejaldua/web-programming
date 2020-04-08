const mongoose = require('mongoose')
// Connect to DB
mongoose.connect('https://localhost/COVID')
 .then(() => console.log('MongoDB connected…'))
 .catch(err => console.log(err));