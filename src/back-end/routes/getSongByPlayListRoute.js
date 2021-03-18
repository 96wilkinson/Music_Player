const express = require("express");
const router = express.Router();

const getSongsByPlayList = require("../Utils/getSongsByPlayList");

router.post("/getSongsByPlayList/", function (req, res) {
    getSongsByPlayList(req.query.playList).then(response => res.send(response));
});
module.exports = router;