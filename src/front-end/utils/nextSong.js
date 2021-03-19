module.exports = async function nextSong(songs) {
    let initialSongList = songs;
    let initialFirstSong = songs[0]
    initialSongList.shift();
    initialSongList.push(initialFirstSong)
    let finalSongList = initialSongList;
    let currentSong = finalSongList[0]
    let returnObj = {currentSong: currentSong, songList: finalSongList};
    return returnObj;
}