const express = require("express");
const router = express.Router();

const deletePlayList = require("../Utils/deletePlayList");

router.post("/deletePlayList/", function (req, res) {
    deletePlayList(req.query.playListName).then(response => res.send(response));
});
module.exports = router;