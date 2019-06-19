module.exports = function(sequelize, DataTypes) {
    let Books = sequelize.define("Books", {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        authorFirst: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        authorLast: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        price: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },

        avail: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        cover: {
            type: DataTypes.STRING,
        },

        condition: {
            type: DataTypes.STRING,
        },

        imageURL: {
            type: DataTypes.STRING,
        },

        tags: {
            type: DataTypes.STRING(2000),
        },

        buyer: {
            type: DataTypes.TEXT,
        },
    });

    return Books;
}