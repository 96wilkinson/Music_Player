const express = require("express");
const router = express.Router();

const createPlayList = require("../Utils/createPlayList");

router.post("/createPlayList/", function (req, res) {
    createPlayList(req.query.playListName).then(response => res.send(response));
});
module.exports = router;