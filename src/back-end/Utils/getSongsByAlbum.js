const mysql = require('mysql');
const auth = require('../authentication/mysqlAuth.json')
const connection = mysql.createConnection(auth);

module.exports = async function getSongsByAlbum(input) {
    let album = input;
    let sqlString = 'SELECT * FROM music_player.album WHERE Album = ?'
    return new Promise(resolve => {
        connection.query(sqlString,[album], function (err, result, fields) {
            if (!err)
                resolve(result);
        })
    }).then(value => {
        return value
    })
}

