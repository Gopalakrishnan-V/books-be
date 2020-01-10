const express = require("express");
const router = express.Router();

const authorContoller = require("../../controllers").author;

router.get("/", authorContoller.fetchAll);

module.exports = router;
