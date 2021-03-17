const mysql = require('mysql');
const auth = require('../authentication/mysqlAuth.json')
const connection = mysql.createConnection(auth);

module.exports = async function createPlayList(input) {
    let playListName = input;
    let createTable = 'CREATE TABLE '
    let params = '( ID int unsigned NOT NULL AUTO_INCREMENT, Title varchar(255) NOT NULL, Artist varchar(255) NOT NULL, Time int NOT NULL, Album varchar(255) NOT NULL,PRIMARY KEY (ID),UNIQUE KEY ID_UNIQUE (ID))'
    let sqlString =  createTable + playListName + params;
    return new Promise(resolve => {
        connection.query(sqlString, function (err, result, fields) {
            if (!err)
                resolve(result);
        })
    }).then(value => {
        return value
    })
}

