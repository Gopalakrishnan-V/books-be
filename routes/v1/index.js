const express = require("express");
const router = express.Router();
const bookRouter = require("./book");
const authorRouter = require("./author");

router.use("/books", bookRouter);
router.use("/authors", authorRouter);

module.exports = router;
