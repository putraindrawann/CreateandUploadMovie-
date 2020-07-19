const Sequelize = require("sequelize");
const connection = require('../../config/dbConn');

const SysUser = connection.define('user', {
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV1,
        allowNull: false,
        primaryKey: true,
    },
    userName: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    userPassword: {
        type: Sequelize.STRING,
        allowNull: false,
        min: 6
    },
    fullName: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        validate: {
            isEmail: true
        }
    },
    roleId: {
        type: Sequelize.STRING,
        allowNull: false,
    }
}, {
    freezeTableName: true,
    tableName: 'user'
});

module.exports = SysUser;