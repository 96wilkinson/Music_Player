const assert = require('assert');
const data = '{"id":1,"Title":"Intro","Artist":"Home","Time":189,"Number":1,"Album":"Odyssey"}'
const inputData = "Odyssey"

describe('Tests get songs by album', () => {
    const getSongsByAlbum = require('../Utils/getSongsByAlbum');
    it('stringifies the first expected result from the songs list', () => {
        return getSongsByAlbum(inputData).then(result => {
            assert.equal(JSON.stringify(result[0]), data)
        })
    })

    it('inputting a wrong album should return undefined', () => {
        return getSongsByAlbum("wrongInput").then(result => {
            assert.equal(JSON.stringify(result[0]), undefined)
        })
    })
})

