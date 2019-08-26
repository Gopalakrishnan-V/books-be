const Book = require("../models").Book;
const Author = require("../models").Author;
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

const fetchAll = async (req, res) => {
  try {
    const books = await Book.findAll({
      include: [{ model: Author, as: "author" }]
    });
    return res.send(books);
  } catch (e) {
    return res.status(500).send(e);
  }
};

const fetchOne = async (req, res) => {
  const id = req.params.id;
  try {
    const book = await Book.findOne({ where: { id } });
    if (!book) {
      return res
        .status(404)
        .send({ message: "Book you are looking for doesn't exists" });
    }
    return res.send(book);
  } catch (e) {
    return res.status(500).send(e);
  }
};

const create = async (req, res) => {
  const { name, cover, authorName } = req.body;
  try {
    const book = await Book.create({ name, cover, authorName });
    return res.send(book);
  } catch (e) {
    return res.status(500).send(e);
  }
};

const update = async (req, res) => {
  const id = parseInt(req.params.id);
  const { name, cover, authorName } = req.body;
  try {
    const result = await Book.update(
      { name, cover, authorName },
      { where: { id } }
    );
    if (!result[0]) {
      return res.status(404).send({ message: "Book doesn't exists" });
    }
    return res.send({ id, name, cover, authorName });
  } catch (e) {
    return res.status(500).send(e);
  }
};

const destroy = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const numDeletedRows = await Book.destroy({ where: { id } });
    if (numDeletedRows === 0) {
      return res.status(404).send({ message: "Book doesn't exists" });
    }
    return res.send({ message: "Book deleted successfully" });
  } catch (e) {
    return res.status(500).send(e);
  }
};

module.exports = {
  fetchAll,
  fetchOne,
  create,
  update,
  destroy
};
