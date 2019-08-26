"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn("book", "author_id", {
      type: Sequelize.INTEGER,
      references: { model: "author", key: "id" }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn("book", "authorId");
  }
};
