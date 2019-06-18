module.exports = function(sequelize, DataTypes) {
    let Users = sequelize.define("Users", {
        // id: {
        //     type: DataTypes.STRING,
        //     primaryKey: true,
        // },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        cart: {
            type: DataTypes.TEXT,
        }
    });

    Users.associate = function(models) {
        Users.hasMany(models.Books, {
            onDelete: "cascade"
        });

        Users.hasMany(models.Orders, {
            onDelete: "cascade"
        });
    }
    
    return Users;
}