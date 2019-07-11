const express = require("express");
const router = express.Router();
const bookController = require("../../controllers").book;

router.get("/", bookController.fetchAll);

router.get("/:id", bookController.fetchOne);

router.post("/", bookController.create);

router.put("/:id", bookController.update);

router.delete("/:id", bookController.destroy);

module.exports = router;
