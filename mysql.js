var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '12345678',
  database: 'test'
});

connection.connect();

const sql = `CREATE TABLE Persons(
  Id_P int,
  LastName varchar(255),
  FirstName varchar(255),
  Address varchar(255),
  City varchar(255)
)`

connection.query(sql, function (error, results, fields) {
  if (error) throw error;
  // console.log('The solution is: ', results[0].solution);
});

connection.end();