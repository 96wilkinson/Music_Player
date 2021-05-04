module.exports = async function timerInterval(minutes, seconds,totalTime) {
    if (minutes !== 0 && seconds !== 0){
        seconds = seconds-1
        let convertedseconds = seconds + minutes * 60;
        let tempPercentage = convertedseconds / totalTime;
        let percentage = (1 - tempPercentage) * 100
        return {time: {minutes: minutes, seconds: seconds, totalTime: totalTime}, percentage: percentage}
    } if (minutes !== 0 && seconds === 0) {
        minutes = minutes -1
        seconds =  seconds + 59
        let convertedseconds = seconds + minutes * 60;
        let tempPercentage = convertedseconds / totalTime;
        let percentage = (1 - tempPercentage) * 100
        return {time: {minutes: minutes, seconds: seconds, totalTime: totalTime}, percentage: percentage}
    } if (minutes === 0 && seconds ===0) {
        let convertedseconds = seconds + minutes * 60;
        let tempPercentage = convertedseconds / totalTime;
        let percentage = (1 - tempPercentage) * 100
        return {time: {minutes: minutes, seconds: seconds, totalTime: totalTime}, percentage: percentage}
    }
}