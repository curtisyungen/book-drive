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
            type: DataTypes.STRING(2000),
        }
    });

    Users.associate = function(models) {
        Users.hasMany(models.Books, {
            onDelete: "cascade"
        });
    }
    
    return Users;
}