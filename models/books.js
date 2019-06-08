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
            type: DataTypes.BOOLEAN,
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
    });

    Books.associate = function(models) {
        Books.belongsTo(models.Users, {
            foreignKey: {
                allowNull: false,
            }
        });
    }

    return Books;
}