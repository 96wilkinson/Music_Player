module.exports = async function timerInterval(minutes, seconds,totalTime) {
    let timeRemaining = seconds + (minutes * 60);
    if ( timeRemaining <= 10){
        return {time: {minutes: 0, seconds: 0, totalTime: totalTime}, percentage: 100}
    } else {
        timeRemaining = timeRemaining -10
        let minute = Math.floor(timeRemaining/60);
        let second = Math.floor(timeRemaining%60);
        let tempPercentage = timeRemaining / totalTime;
        let percentage = (1 - tempPercentage) * 100
        return {time: {minutes: minute, seconds: second, totalTime: totalTime}, percentage: percentage}
    }
}