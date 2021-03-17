var express = require('express');
const app = express();

const port = 3001;
const getSongs = require('./routes/getSongsRoute');
const getSongsByAlbum = require('./routes/getSongsByAlbumRoute');
const createPlayList = require('./routes/createPlayListRoute');
const deletePlayList = require('./routes/deletePlayListRoute');
const addSongToPlayListRoute = require('./routes/addSongToPlayListRoute');
const removeSongFromPlayListRoute = require('./routes/removeSongFromPlayListRoute');

app.listen(port, () => console.log(`Express server currently running on port ${port}`));


app.get('/hello', function (req, res) {
    res.send("Hello World!");
});

app.post('/hello', function (req, res) {
    res.send("You just called the post method at '/hello'!\n");
});

app.use('/', getSongs);

app.use('/', getSongsByAlbum);

app.use('/',createPlayList)

app.use('/',deletePlayList)

app.use('/',addSongToPlayListRoute)

app.use('/',removeSongFromPlayListRoute)