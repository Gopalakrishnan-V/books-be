const express = require("express");
const router = express.Router();
const bookRouter = require("./book");

router.use("/books", bookRouter);

module.exports = router;
