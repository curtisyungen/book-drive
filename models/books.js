module.exports = function(sequelize, DataTypes) {
    let Books = sequelize.define("Books", {
        id: {
            type: DataTypes.STRING,
            primaryKey: true,
        },

        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        author: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        price: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },

        avail: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },

        tags: {
            type: DataTypes.STRING(2000),
        },

        imageURL: {
            type: DataTypes.STRING,
        }
    });

    return Books;
}