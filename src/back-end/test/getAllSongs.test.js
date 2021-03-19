const assert = require('assert');
const data = '{"id":1,"Title":"Intro","Artist":"Home","Time":189,"Number":1,"Album":"Odyssey"}'

describe('should get all songs', () => {
    const getAllSongs = require('../Utils/getAllSongs');
    it('stringifies the first expected result from the songs list', () => {
        return getAllSongs().then(result => {
            assert.equal(JSON.stringify(result[0]), data)
        })
    })
})

