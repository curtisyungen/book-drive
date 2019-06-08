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
    });

    Users.associate = function(models) {
        Users.hasMany(models.Books, {
            onDelete: "cascade"
        });
    }
    
    return Users;
}