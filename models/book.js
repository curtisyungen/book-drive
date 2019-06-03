module.exports = function(sequelize, DataTypes) {
  var book = sequelize.define("book", {

    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },

    title: {
      type: DataTypes.STRING,
      allowNull: false
    },

    author: {
      type: DataTypes.STRING
    },

    price: {
      type: DataTypes.FLOAT,
      allowNull: false
    },

    avail: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },

    imageURL: {
      type: DataTypes.STRING,
    },

    tags: {
      type: DataTypes.STRING(2000),
    }
  });

  return book;
};