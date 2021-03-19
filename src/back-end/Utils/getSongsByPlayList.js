const mysql = require('mysql');
const auth = require('../authentication/mysqlAuth.json')
const connection = mysql.createConnection(auth);

module.exports = async function getSongsByAlbum(input) {
    let playList = input;
    let sqlString = `SELECT * FROM music_player.${playList}`
    return new Promise(resolve => {
        connection.query(sqlString, function (err, result, fields) {
            if (!err)
                resolve(result);
        })
    }).then(value => {
        return value
    })
}

