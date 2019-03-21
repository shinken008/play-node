var express = require('express');
var app = express();

var count = 0;
app.use(function (req, res, next) {
  console.log('f1');
  next();
})
app.use(function (req, res, next) {
  console.log('f2');
  // res.send('z')
  // return
  if (count > 1) {
    res.send('Bye');
  } else {
    next();
  }
})
app.use(function (req, res, next) {
  console.log('f3');
  count++;
  next();
})

app.get('/', function (req, res) {
  res.send('Hello World: ' + count);
});

var server = app.listen(3000);