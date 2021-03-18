module.exports = async function shuffleFunction(songs) {
    let shuffledArr = songs;
    for (let i = songs.length - 1; i > 0; i--){
        let randomIndex = Math.floor(Math.random() * (i + 1));
        let tempValue = shuffledArr[i];
        shuffledArr[i] = shuffledArr[randomIndex];
        shuffledArr[randomIndex] = tempValue
    }
    return shuffledArr;
}