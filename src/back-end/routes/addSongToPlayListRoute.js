const express = require("express");
const router = express.Router();

const addSongToPlayList = require("../Utils/addSongToPlayList");

router.post("/addSongToPlayList/", function (req, res) {
    addSongToPlayList(req.query.playListName,req.query.Title,req.query.Artist, req.query.Album, req.query.Time)
    .then(response => res.send(response));
});
module.exports = router;