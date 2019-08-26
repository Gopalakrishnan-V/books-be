"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn("author", "phone_number", {
      type: Sequelize.DataTypes.STRING,
      allowNull: true,
      field: "phone_number"
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn("author", "phone_number");
  }
};
