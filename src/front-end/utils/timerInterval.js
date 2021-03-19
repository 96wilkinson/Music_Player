module.exports = async function nextSong(minutes, seconds) {
    if (minutes !== 0 && seconds !== 0){
        seconds = seconds-1
        return {minutes: minutes, seconds: seconds}
    } if (minutes !== 0 && seconds === 0) {
        minutes = minutes -1
        seconds =  seconds + 59
        console.log(minutes, seconds)
        return {minutes: minutes, seconds: seconds}
    } if (minutes === 0 && seconds ===0) {
        return {minutes: minutes, seconds: seconds}
    }
}