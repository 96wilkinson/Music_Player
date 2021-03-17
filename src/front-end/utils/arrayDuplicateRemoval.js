const { default: axios } = require("axios");

module.exports = async function arrayDuplicateRemoval(songs) {
    let response = await axios.post('http://localhost:3001/getData');
    let arr = response.data;
    let uniqueArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (uniqueArr.indexOf(arr[i].Album) === -1) {
            uniqueArr.push(arr[i].Album);
        }
    }
    return await uniqueArr;
}