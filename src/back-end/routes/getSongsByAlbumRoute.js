const express = require("express");
const router = express.Router();

const getSongsByAlbum = require("../Utils/getSongsByAlbum");

router.post("/getSongsByAlbum/", function (req, res) {
    getSongsByAlbum(req.query.album).then(response => res.send(response));
});
module.exports = router;