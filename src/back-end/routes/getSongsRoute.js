const express = require("express");
const router = express.Router();

const getSongs = require("../Utils/getSongs.js");

router.get("/getSongs/", function (req, res, next) {
    getSongs().then(response => res.send((response)));
});

module.exports = router;