const express = require("express");
const router = express.Router();
const getTimeStories = require("./getTimeStories.route");

router.use("/getTimeStories", getTimeStories);

module.exports = router;
