const express = require("express");
const router = express.Router();

const getAllPlaylists = require("../Utils/getAllPlaylists");

router.post("/getAllPlaylists/", function (req, res) {
    getAllPlaylists().then(response => res.send(response));
});
module.exports = router;