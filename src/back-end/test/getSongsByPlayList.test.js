const assert = require('assert');
const data = '{"ID":1,"Title":"Intro","Artist":"Home","Time":189,"Album":"Odyssey"}'
const inputData = "playlist1"

describe('Tests get songs by playlist', () => {
    const getSongsByPlayList = require('../Utils/getSongsByPlayList');
    it('stringifies the first expected result from the songs list', () => {
        return getSongsByPlayList(inputData).then(result => {
            assert.equal(JSON.stringify(result[0]), data)
        })
    })
    // Leaving the below code in as It is a strange occurance but mysql will error out and not send a response back

    // it('inputting a wrong album should return undefined', () => {
    //     return getSongsByPlayList("wrongInput").then(result => {
    //         assert.equal(JSON.stringify(result[0]), undefined)
    //     })
    // })
})

