const mysql = require('mysql');
const auth = require('../authentication/mysqlAuth.json')
const connection = mysql.createConnection(auth);

module.exports = async function getSongs() {

  return new Promise(resolve => {
    connection.query("SELECT * FROM `music_player`.`album` ", function (err, result, fields) {
      if(!err)
      resolve(result);
    })
  }).then(value => {
    return value
  })
}

