"use strict";
module.exports = (sequelize, DataTypes) => {
  const Author = sequelize.define(
    "Author",
    {
      name: DataTypes.STRING,
      age: DataTypes.INTEGER,
      phoneNumber: {
        type: DataTypes.STRING,
        allowNull: true,
        field: "phone_number"
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
    { freezeTableName: true, tableName: "author" }
  );
  Author.associate = function(models) {
    Author.hasMany(models.Book, { foreignKey: "authorId", as: "books" });
  };
  return Author;
};
