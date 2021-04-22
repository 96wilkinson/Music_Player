module.exports = async function secondsIntoTime(title, songs) {
    let time;
    for (let i = 0; i < songs.length; i++){
        if(title === songs[i].Title){
            console.log(songs[i].Time)
            time = songs[i].Time;
        }
    }
    let minute = Math.floor(time/60);
    let second = Math.floor(time%60);
    let returnObj = {minutes: minute, seconds: second, totalTime: time}

    return returnObj;
}