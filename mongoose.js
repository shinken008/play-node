const mongoose = require('mongoose')

const mongoUrl = process.env.MONGOLAB_URI;

mongoose.connect('mongodb://localhost:27017').then(
  () => {
    console.log('mongoose.connect')
    /** ready to use. The `mongoose.connect()` promise resolves to undefined. */
  },
).catch(err => {
  console.log("MongoDB connection error. Please make sure MongoDB is running. " + err);
  // process.exit();
});