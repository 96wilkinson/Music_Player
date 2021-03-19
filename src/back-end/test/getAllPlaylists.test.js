const assert = require('assert');
const data = '{"id":1,"playlist":"playlist1"}'

describe('should get all Playlists', () => {
    const getAllPlaylists = require('../Utils/getAllPlaylists');
    it('stringifies the first expected result from the playlist list not including the main songs table', () => {
        return getAllPlaylists().then(result => {
            assert.equal(JSON.stringify(result[0]), data)
        })
    })
})

