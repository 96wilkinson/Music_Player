module.exports = async function shuffleFunction(songs) {

    let shuffledArr = songs;
    let currentlyPlaying = songs[0];
    console.log(currentlyPlaying)
    for (let i = songs.length - 1; i > 0; i--) {
        let randomIndex = Math.floor(Math.random() * (i + 1));
        let tempValue = shuffledArr[i];
        shuffledArr[i] = shuffledArr[randomIndex];
        shuffledArr[randomIndex] = tempValue
    }

    for (let i = 0; i < shuffledArr.length; i++) {
        if(shuffledArr[i] === currentlyPlaying){
            shuffledArr.splice(i,1)
        }
    }

    shuffledArr.unshift(currentlyPlaying)
    return shuffledArr;
}