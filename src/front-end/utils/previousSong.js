module.exports = async function previousSong(songs) {
    let initialSongList = songs;
    let songsLength = songs.length;
    let lastIndex = songsLength-1;
    let lastSong = songs[lastIndex];
    let  tempList = initialSongList;
    tempList.splice(lastIndex,1)
    tempList.unshift(lastSong);
    let returnObj = {currentSong: lastSong, songList: tempList};
    return returnObj;
}