module.exports = function(sequelize, DataTypes) {
    let Users = sequelize.define("Users", {
        // id: {
        //     type: DataTypes.STRING,
        //     primaryKey: true,
        // },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });
    
    return Users;
}