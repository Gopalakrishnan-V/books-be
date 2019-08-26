const Book = require("../models").Book;
const Author = require("../models").Author;
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

const fetchAll = async (req, res) => {
  try {
    const authors = await Author.findAll({
      include: [{ model: Book, as: "books" }]
    });
    return res.send(authors);
  } catch (e) {
    return res.status(500).send(e);
  }
};

module.exports = {
  fetchAll
};
