const assert = require('assert');
const output1 = '{"fieldCount":0,"affectedRows":1,"insertId":1,"serverStatus":2,"warningCount":0,"message":"","protocol41":true,"changedRows":0}'
let output2 = '{"fieldCount":0,"affectedRows":1,"insertId":0,"serverStatus":34,"warningCount":0,"message":"","protocol41":true,"changedRows":0}'
let output3 ='{"fieldCount":0,"affectedRows":0,"insertId":0,"serverStatus":2,"warningCount":0,"message":"","protocol41":true,"changedRows":0}'
const testPlayList = "testPlayList100"
let title = "Intro"
let Artist = "Home"
let Album = "Odyssey"
let Time = "189"

// This file is marked x{file} as i want it to run last away from the other create and delete playlist option

describe('Create a playlist, add a song, remove the song, delete playlist', () => {
    
    const createPlayList = require('../Utils/createPlayList');
    createPlayList(testPlayList)
    const addSongToPlayList = require('../Utils/addSongToPlayList');
    it('should add a song to a newly created playlist', () => {
        createPlayList(testPlayList)
        return addSongToPlayList(testPlayList,title,Artist,Album,Time).then(result => {
            assert.equal(JSON.stringify(result), output1)
        })
    })

    const removeSongFromPlayList = require('../Utils/removeSongFromPlayList');
    it('should remove song from playlist and then delete the playlist', () => {
        return removeSongFromPlayList(testPlayList,title,Artist,Album,Time).then(result => {
            assert.equal(JSON.stringify(result), output2)
        })
    })

    const deletePlayList = require('../Utils/deletePlayList');
    it('should delete a playlist and get an object that MySql prepares', () => {
        return deletePlayList(testPlayList).then(result => {
            assert.equal(JSON.stringify(result), output3)
        })
    })
})

