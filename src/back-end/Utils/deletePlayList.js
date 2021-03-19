const mysql = require('mysql');
const auth = require('../authentication/mysqlAuth.json')
const connection = mysql.createConnection(auth);

module.exports = async function deletePlayList(input) {
    let playListName = input;
    let createTable = 'DROP TABLE '
    let sqlString =  createTable + playListName;
    return new Promise(resolve => {
        connection.query(sqlString, function (err, result, fields) {
            if (!err)
                resolve(result);
        })
    }).then(value => {
        return value
    })
}

