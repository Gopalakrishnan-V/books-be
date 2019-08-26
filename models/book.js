"use strict";
module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define(
    "Book",
    {
      name: DataTypes.STRING,
      cover: DataTypes.STRING,
      authorName: { type: DataTypes.STRING, field: "author_name" },
      price: DataTypes.INTEGER,
      authorId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: sequelize.models.Author,
          key: "id"
        },
        field: "author_id"
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: "created_at"
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: "updated_at"
      }
    },
    { freezeTableName: true, tableName: "book" }
  );
  Book.associate = function(models) {
    Book.belongsTo(models.Author, { foreignKey: "authorId", as: "author" });
  };
  return Book;
};
