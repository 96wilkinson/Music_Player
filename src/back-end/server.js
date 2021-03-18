var express = require('express');
const app = express();

const port = 3001;
const getSongsRoute = require('./routes/getSongsRoute');
const getSongsByAlbumRoute = require('./routes/getSongsByAlbumRoute');
const createPlayListRoute = require('./routes/createPlayListRoute');
const deletePlayListRoute = require('./routes/deletePlayListRoute');
const addSongToPlayListRoute = require('./routes/addSongToPlayListRoute');
const removeSongFromPlayListRoute = require('./routes/removeSongFromPlayListRoute');
const getAllPlaylistsRoute = require('./routes/getAllPlaylistsRoute');
const getSongsByPlayListRoute = require('./routes/getSongByPlayListRoute')

app.listen(port, () => console.log(`Express server currently running on port ${port}`));


app.get('/hello', function (req, res) {
    res.send("Hello World!");
});

app.post('/hello', function (req, res) {
    res.send("You just called the post method at '/hello'!\n");
});

app.use('/', getSongsRoute);

app.use('/', getSongsByAlbumRoute);

app.use('/',createPlayListRoute)

app.use('/',deletePlayListRoute)

app.use('/',addSongToPlayListRoute)

app.use('/',removeSongFromPlayListRoute)

app.use('/', getAllPlaylistsRoute);

app.use('/', getSongsByPlayListRoute);