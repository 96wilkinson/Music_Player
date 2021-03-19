const mysql = require('mysql');
const auth = require('../authentication/mysqlAuth.json')
const connection = mysql.createConnection(auth);

module.exports = async function getAllPlaylists() {
    let arr =[]
    let sqlString = `SELECT table_name FROM information_schema.tables WHERE table_schema = 'music_player'`;
    return new Promise(resolve => {
        connection.query(sqlString, function (err, result, fields) {
            if (!err)
                resolve(result);
        })
    }).then(value => {
        for(let i=0; i < value.length;i++){
            if(value[i].TABLE_NAME === 'album'){

            } else {
                arr.push({
                    id: i,
                    playlist: value[i].TABLE_NAME
                })
            }
        }
        return arr
    })
}

 