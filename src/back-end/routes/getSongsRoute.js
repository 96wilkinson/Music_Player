const express = require("express");
const router = express.Router();

const getSongs = require("../Utils/getSongs");

router.post("/getData/", function (req, res) {
    getSongs().then(response => res.send(response));
});
module.exports = router;