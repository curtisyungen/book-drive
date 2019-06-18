module.exports = function(sequelize, DataTypes) {
    let Orders = sequelize.define("Orders", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        date: {
            type: DataTypes.DATE,
            allowNull: false,
        },

        totalPrice: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },

        items: {
            type: DataTypes.TEXT,
            allowNull: false,
        },

        itemQty: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },

        shippingAddress: {
            type: DataTypes.TEXT,
            allowNull: false,
        }
    });

    return Orders;
}