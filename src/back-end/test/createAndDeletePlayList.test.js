const assert = require('assert');
const data = '{"fieldCount":0,"affectedRows":0,"insertId":0,"serverStatus":2,"warningCount":0,"message":"","protocol41":true,"changedRows":0}'
const inputData = "playlist100"

describe('Create and delete a playlist', () => {
    const createPlayList = require('../Utils/createPlayList');
    it('should create a playlist and get an object that MySql prepares', () => {
        return createPlayList(inputData).then(result => {
            assert.equal(JSON.stringify(result), data)
        })
    })

    const deletePlayList = require('../Utils/deletePlayList');
    it('should delete a playlist and get an object that MySql prepares', () => {
        return deletePlayList(inputData).then(result => {
            assert.equal(JSON.stringify(result), data)
        })
    })
})

