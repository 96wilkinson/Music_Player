const mysql = require('mysql');
const auth = require('../authentication/mysqlAuth.json')
const connection = mysql.createConnection(auth);

module.exports = async function addSongToPlayList(playlistName, Title,Artist, Album, Time) {
    let insertInto = 'INSERT INTO `music_player`. '
    let fields = ' (`Title`, `Artist`, `Time`, `Album`) VALUES ('
    let values = `'${Title}', '${Artist}', '${Time}', '${Album}')`
    let sqlString =  insertInto + playlistName + fields + values;
    return new Promise(resolve => {
        connection.query(sqlString, function (err, result, fields) {
            if (!err)
                resolve(result);
        })
    }).then(value => {
        return value
    })
}

