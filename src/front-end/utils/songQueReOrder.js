module.exports = async function songQueReOrder(song, songs) {
    let sonqQue = [];
    let newIndexNumb;
    for (let i = 0; i < songs.length; i++) {
        if (song === songs[i].Title) {
            console.log(i)
            newIndexNumb = i;
        }
    }
    for (let j = newIndexNumb; j < songs.length; j++) {
        sonqQue.push(songs[j]);
    }
    for (let k = 0; k < (newIndexNumb); k++) {
        sonqQue.push(songs[k]);
    }
    console.log("run")
    return sonqQue;
}