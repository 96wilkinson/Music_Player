const express = require("express");
const router = express.Router();

const removeSongFromPlayList = require("../Utils/removeSongFromPlayList");

router.post("/removeSongFromPlayList/", function (req, res) {
    removeSongFromPlayList(req.query.playListName,req.query.Title)
    .then(response => res.send(response));
});
module.exports = router;