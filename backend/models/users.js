const Sequelize = require("sequelize");
module.exports = function(sequelize, DataTypes) {
    return sequelize.define(
        "users", {
            id: {
                autoIncrement: true,
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
            },
            displayName: {
                type: DataTypes.STRING(45),
                allowNull: true,
            },
            firstName: {
                type: DataTypes.STRING(45),
                allowNull: true,
            },
            lastName: {
                type: DataTypes.STRING(45),
                allowNull: true,
            },
            DOB: {
                type: DataTypes.DATEONLY,
                allowNull: true,
            },
            email: {
                type: DataTypes.STRING(100),
                allowNull: true,
            },
            password: {
                type: DataTypes.STRING(1024),
                allowNull: true,
            },
            gender: {
                type: DataTypes.ENUM(["m", "f"]),
                allowNull: true,
            },
            isAdmin: {
                type: DataTypes.CHAR(1),
                defaultValue: false,
                type: DataTypes.BOOLEAN,
            },
            isPremium: {
                type: DataTypes.BOOLEAN,
                defaultValue: false,
            },
            avatar: {
                type: DataTypes.TEXT,
                allowNull: true,
            },
            github: {
                type: DataTypes.TEXT,
                allowNull: true,
            },
            bio: {
                type: DataTypes.TEXT,
                allowNull: true,
            },
        }, {
            sequelize,
            tableName: "users",
            timestamps: true,
            indexes: [{
                name: "PRIMARY",
                unique: true,
                using: "BTREE",
                fields: [{ name: "id" }],
            }, ],
        }
    );
};