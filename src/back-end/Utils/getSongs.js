const mysql = require('mysql');
const auth = require('../authentication/mysqlAuth.json')

const connection = mysql.createConnection(auth);


connection.connect(function(err) {
    if (err) throw err;
    connection.query("SELECT * FROM `music_player`.`album` ", function (err, result, fields) {
      if (err) throw err;
      console.log(result);
    });
  });