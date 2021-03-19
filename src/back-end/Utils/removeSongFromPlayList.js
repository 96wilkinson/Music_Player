const mysql = require('mysql');
const auth = require('../authentication/mysqlAuth.json')
const connection = mysql.createConnection(auth);

module.exports = async function addSongToPlayList(playlistName, Title) {
    let deleteFrom = 'DELETE FROM `music_player`. '
    let whereTitle = ' WHERE Title = '
    let values = `'${Title}'`
    let sqlString =  deleteFrom + playlistName + whereTitle + values;
    return new Promise(resolve => {
        connection.query(sqlString, function (err, result, fields) {
            if (!err)
                resolve(result);
        })
    }).then(value => {
        return value
    })
}

